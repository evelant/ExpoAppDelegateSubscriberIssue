"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withCleverTapAndroid = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const { addMetaDataItemToMainApplication, getMainApplicationOrThrow, removeMetaDataItemFromMainApplication } = config_plugins_1.AndroidConfig.Manifest;
const META_CLEVERTAP_ACCOUNT_ID = "CLEVERTAP_ACCOUNT_ID";
const META_CLEVERTAP_TOKEN = "CLEVERTAP_TOKEN";
const META_CLEVERTAP_REGION = "CLEVERTAP_REGION";
const META_CLEVERTAP_USE_GOOGLE_AD_ID = "CLEVERTAP_USE_GOOGLE_AD_ID";
const withCleverTapAndroid = (config, data) => {
    const { cleverTapAccountId, cleverTapToken, cleverTapRegionCode, cleverTapAndroidUseGoogleAdId } = data;
    if (!cleverTapAccountId) {
        throw new Error("CleverTap account ID is required");
    }
    if (!cleverTapToken) {
        throw new Error("CleverTap token is required");
    }
    if (!cleverTapRegionCode) {
        throw new Error("CleverTap region code is required");
    }
    config = (0, config_plugins_1.withAndroidManifest)(config, (config) => {
        const mainApplication = getMainApplicationOrThrow(config.modResults);
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_ACCOUNT_ID, cleverTapAccountId);
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_TOKEN, cleverTapToken);
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_REGION, cleverTapRegionCode);
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_USE_GOOGLE_AD_ID, cleverTapAndroidUseGoogleAdId ? "1" : "0");
        return config;
    });
    return config;
};
exports.withCleverTapAndroid = withCleverTapAndroid;
//# sourceMappingURL=withCleverTapAndroid.js.map