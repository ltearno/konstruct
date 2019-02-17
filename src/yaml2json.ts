import * as k from './konstruct'
import * as fs from 'fs'
import * as path from 'path'

const log = console.log.bind(console)
const base = `/home/arnaud/repos/idp/aaa/aaa-platform/k8s-2/output-target/aaa-platform/templates/`

let out = {}
let files = fs.readdirSync(base)
for (let file of files) {
    out[file] = k.yamlParseAll(fs.readFileSync(path.join(base, file)))
}

//log(JSON.stringify(out, null, 2))

let cm = k.build.configMap({
    data: {
        'ngnix.conf': k.interpolateFile('nginx.conf', {
            authenticate: {
                masterRealm: 'IDP'
            }
        })
    }
})

log(k.yamlify(cm))