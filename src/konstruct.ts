import * as k8s from './kubernetes-api'
export { k8s }

import * as beta from './beta'
export const lib = {
    beta
}

export {
    interpolate,
    interpolateFile
} from './misc-tools'

import * as build from './kubernetes-builder'
export { build }

export {
    copyObject,
    installPlugin,
    mergeObjects,
    preparseYaml,
    setObjectProperty,
    yamlParse,
    yamlParseAll,
    yamlify,
    yamlifyAll,
    command,
    env,
    run
} from './core'