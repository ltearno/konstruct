import * as k from './konstruct'
import * as fs from 'fs'
import * as path from 'path'

const log = console.log.bind(console)
const base = `/home/arnaud/repos/idp/aaa/aaa-platform/k8s-2/output-target/aaa-platform/templates/`

const GCP_PROJECT = k.env('PROJECT') || k.command(`gcloud config get-value project`)

let out = {}
let files = fs.readdirSync(base)
for (let file of files) {
    out[file] = k.yamlParseAll(fs.readFileSync(path.join(base, file)))
}

//log(JSON.stringify(out, null, 2))

let cm = k.build.configMap()
    .set('data.nginx\.conf', k.interpolateFile('nginx.conf', {
        authenticate: {
            masterRealm: 'IDP'
        }
    }))

let deploy = k.build.deployment({
    spec: {
        template: {
            spec: {
                containers: [{
                    name: `toto`,
                    image: `eu.gcr.io/${GCP_PROJECT}/toto`,
                    readinessProbe: {
                        httpGet: {
                            path: '/health',
                            port: 8080,
                            scheme: 'http'
                        }
                    }
                }]
            }
        }
    }
})
    .addDeploymentDefaultNameAndLabels('mondeploiement')

log(k.yamlify(cm))
log(k.yamlify(deploy))