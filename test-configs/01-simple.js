/**
 * Let's deploy and expose a simple echo server !
 */

const k = require('konstructor')

const lib = {
    defaultDeployment: () => ({
        apiVersion: "extensions/v1beta1",
        kind: "Deployment",
        spec: {
            replicas: 1,
            strategy: {
                type: "RollingUpdate",
                rollingUpdate: {
                    maxSurge: 3,
                    maxUnavailable: 0
                }
            }
        }
    })
}

k.installPlugin(function funky(object, name) {
    return object.set('metadata.funky', {
        at: `${Date.now()}`,
        name
    })
})

let deployment = lib.defaultDeployment()
    .merge(k.yamlparse(`
      spec:
        template:
          spec:
            containers:
            - name: echo-server
              image: 'eu.gcr.io/kubernetes-web-demo/echo-server:latest'
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
                value: false
    `))
    .addDeploymentDefaultNameAndLabels("echo-server")
    .funky(`g/me/s`)

console.log(k.yamlify(deployment))