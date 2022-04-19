"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withCleverTapIOS = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withCleverTapIOS = (config, data) => {
    // Ensure object exist
    if (!config.ios) {
        config.ios = {};
    }
    const { cleverTapAccountId, cleverTapToken, cleverTapRegionCode } = data;
    if (!cleverTapAccountId) {
        throw new Error("CleverTap account ID is required");
    }
    if (!cleverTapToken) {
        throw new Error("CleverTap token is required");
    }
    if (!cleverTapRegionCode) {
        throw new Error("CleverTap region code is required");
    }
    // Update the infoPlist with the CleverTap accountId, token, region code, and google ads config
    config = (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults = {
            ...config.modResults,
            CleverTapAccountId: cleverTapAccountId,
            CleverTapToken: cleverTapToken,
            CleverTapRegion: cleverTapRegionCode,
        };
        return config;
    });
    // Without this dangerous mod build will fail because Expo AppDelegate subscribers don't support objective c deps
    // config = withDangerousMod(config, [
    //     "ios",
    //     async (config) => {
    //         const filePath = path.join(config.modRequest.platformProjectRoot, "Podfile")
    //         const contents = await fs.readFile(filePath, "utf-8")
    //
    //         let results = mergeContents({
    //             tag: "clevertap-react-native",
    //             src: contents,
    //             newSrc: `pod 'clevertap-react-native', :path => '${config.modRequest.projectRoot}/../../node_modules/clevertap-react-native/', :modular_headers => true`,
    //             anchor: /use_native_modules/,
    //             offset: 0,
    //             comment: "#",
    //         })
    //         results = mergeContents({
    //             tag: "clevertap-ios",
    //             src: results.contents,
    //             newSrc: `pod 'CleverTap-iOS-SDK', '=4.0.0', :modular_headers => true`,
    //             anchor: /use_native_modules/,
    //             offset: 0,
    //             comment: "#",
    //         })
    //         await fs.writeFile(filePath, results.contents)
    //         return config
    //     },
    // ])
    return config;
};
exports.withCleverTapIOS = withCleverTapIOS;
//# sourceMappingURL=withCleverTapIos.js.map