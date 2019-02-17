import * as api from './kubernetes-api';
export { api };
import * as beta from './beta';
export declare const lib: {
    beta: typeof beta;
};
export { interpolate, interpolateFile } from './misc-tools';
import * as build from './kubernetes-builder';
export { build };
export { copyObject, installPlugin, mergeObjects, preparseYaml, setObjectProperty, yamlParse, yamlParseAll, yamlify, yamlifyAll, command, env, run } from './core';
