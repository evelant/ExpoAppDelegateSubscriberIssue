"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withCleverTapAndroid_1 = require("./withCleverTapAndroid");
const withCleverTapIos_1 = require("./withCleverTapIos");
const withCleverTap = (config, { cleverTapAccountId, cleverTapRegionCode, cleverTapToken, cleverTapAndroidUseGoogleAdId }) => {
    config = (0, withCleverTapAndroid_1.withCleverTapAndroid)(config, {
        cleverTapAccountId,
        cleverTapRegionCode,
        cleverTapToken,
        cleverTapAndroidUseGoogleAdId,
    });
    config = (0, withCleverTapIos_1.withCleverTapIOS)(config, {
        cleverTapAccountId,
        cleverTapRegionCode,
        cleverTapToken,
    });
    return config;
};
let pkg = {
    name: "clevertap-react-native",
};
try {
    const clevertapPkg = require("clevertap-react-native/package.json");
    pkg = clevertapPkg;
}
catch { }
exports.default = (0, config_plugins_1.createRunOncePlugin)(withCleverTap, pkg.name, pkg.version);
//# sourceMappingURL=withCleverTap.js.map