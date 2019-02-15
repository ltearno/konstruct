/**
 * Let's deploy and expose a simple echo server !
 * 
 * We will do that by manipulating javascript objects and call provided fluent methods
 * and output the corresponding yaml which will be sent to kubectl
 */

const k = require('konstructor')

/** We can extract environment variables */
const GCP_PROJECT = k.env('GCP_PROJECT')
/** We can execute bash commands and get the result */
const CURRENT_COMMIT = k.command('git rev-parse HEAD')

/**
 * We define a default deployment object, to be used as a template for our deployments
 */
const defaultDeployment = () => ({
    apiVersion: "extensions/v1beta1",
    kind: "Deployment",
    spec: {
        // we use 3 replicas on prod and only one on other platforms
        replicas: GCP_PROJECT.includes('prod') ? 3 : 1,
        strategy: {
            type: "RollingUpdate",
            rollingUpdate: {
                maxSurge: 3,
                maxUnavailable: 0
            }
        }
    }
})

/**
 * Add our own method to the Object prototype.
 * 
 * It uses the 'set' provided function on Object prototype.
 * This function accepts a path and a value and is useful for patching objects.
 */
k.installPlugin(function setMetadata(object, name, value) {
    return object.set(`metadata.labels.${name}`, value)
        .set(`metadata.labels.${name}CreationDate`, `${Date.now()}`)
})

/**
 * This is just to show that you can write a custom function and
 * use it later in your template definition
 */
function expandVersion(version) {
    return 'version-' + version + '-' + GCP_PROJECT
}

/**
 * Here we define our deployments
 * 
 * We have two deployments :
 * - version v1.0 is called 'a'
 * - version v1.5 is called 'b'
 * 
 * Each of our two similar services is mapped to
 * a default deployment template on which we add specific informations.
 * 
 * This is done by chaining calls and calling the Konstructor provided
 * methods :
 * - merge : merge two javascript objects
 * - addDeploymentDefaultNameAndLabels : add label and name on the deployment and its template's metadata
 * - yamlparse : parse a yaml payload and return the corresponding javascript object
 */
let deployments = [['a', 'v1.0'], ['b', 'v1.5']].map(([name, version]) => defaultDeployment()
    // we use a yaml string, but we could also use javascript plain object (in fact I prefer to do that, but that is just to show)
    .merge(k.yamlparse(`
      spec:
        template:
          spec:
            containers:
            - name: echo-server-${name}
              image: 'eu.gcr.io/${GCP_PROJECT}/echo-server:${CURRENT_COMMIT}'
              ports:
              - containerPort: 8080
                protocol: TCP
              - containerPort: 8443
                protocol: TCP
              env:
              - name: STARTUP_DURATION
                value: '70'
              - name: SERVICE_COLOR
                value: 'rgba(156,56,35,.8)'
              - name: REQUEST_DURATION
                value: '1'
              - name: USE_CPU
                value: 'false'
    `))
    .addDeploymentDefaultNameAndLabels(name)
    .setMetadata('version', expandVersion(version))
)

console.log(deployments.map(deployment => k.yamlify(deployment)).join('\n---\n\n'))