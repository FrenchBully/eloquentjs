"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=Mixins.js.map