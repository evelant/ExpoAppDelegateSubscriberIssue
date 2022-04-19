import { withDangerousMod, withInfoPlist } from "@expo/config-plugins"
import type { ConfigPlugin, InfoPlist } from "@expo/config-plugins"
import type { ExpoConfig } from "@expo/config-types"
import fs from "fs-extra"
import path from "path"

import type { ConfigData } from "./types"
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode"

export const withCleverTapIOS: ConfigPlugin<ConfigData> = (config, data) => {
    // Ensure object exist
    if (!config.ios) {
        config.ios = {}
    }

    const { cleverTapAccountId, cleverTapToken, cleverTapRegionCode } = data
    if (!cleverTapAccountId) {
        throw new Error("CleverTap account ID is required")
    }
    if (!cleverTapToken) {
        throw new Error("CleverTap token is required")
    }
    if (!cleverTapRegionCode) {
        throw new Error("CleverTap region code is required")
    }

    // Update the infoPlist with the CleverTap accountId, token, region code, and google ads config
    config = withInfoPlist(config, (config) => {
        config.modResults = {
            ...config.modResults,
            CleverTapAccountId: cleverTapAccountId,
            CleverTapToken: cleverTapToken,
            CleverTapRegion: cleverTapRegionCode,
        }

        return config
    })

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

    return config
}
