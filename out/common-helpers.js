"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var k = __importStar(require("./konstruct"));
function nameMetadata(name) {
    return {
        name: name,
        labels: {
            app: name
        }
    };
}
exports.nameMetadata = nameMetadata;
k.installPlugin(function addDeploymentDefaultNameAndLabels(object, name) {
    return object.merge({
        metadata: nameMetadata(name),
        spec: {
            template: {
                metadata: {
                    labels: {
                        name: name,
                        app: name
                    }
                },
            }
        }
    });
});
