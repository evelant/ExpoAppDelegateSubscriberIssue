import { AndroidConfig, withAndroidManifest } from "@expo/config-plugins"
import type { ConfigPlugin } from "@expo/config-plugins"
import { ConfigData } from "./types"

const { addMetaDataItemToMainApplication, getMainApplicationOrThrow, removeMetaDataItemFromMainApplication } =
    AndroidConfig.Manifest

const META_CLEVERTAP_ACCOUNT_ID = "CLEVERTAP_ACCOUNT_ID"
const META_CLEVERTAP_TOKEN = "CLEVERTAP_TOKEN"
const META_CLEVERTAP_REGION = "CLEVERTAP_REGION"
const META_CLEVERTAP_USE_GOOGLE_AD_ID = "CLEVERTAP_USE_GOOGLE_AD_ID"

export const withCleverTapAndroid: ConfigPlugin<ConfigData> = (config, data) => {
    const { cleverTapAccountId, cleverTapToken, cleverTapRegionCode, cleverTapAndroidUseGoogleAdId } = data
    if (!cleverTapAccountId) {
        throw new Error("CleverTap account ID is required")
    }
    if (!cleverTapToken) {
        throw new Error("CleverTap token is required")
    }
    if (!cleverTapRegionCode) {
        throw new Error("CleverTap region code is required")
    }
    config = withAndroidManifest(config, (config) => {
        const mainApplication = getMainApplicationOrThrow(config.modResults)
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_ACCOUNT_ID, cleverTapAccountId)
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_TOKEN, cleverTapToken)
        addMetaDataItemToMainApplication(mainApplication, META_CLEVERTAP_REGION, cleverTapRegionCode)
        addMetaDataItemToMainApplication(
            mainApplication,
            META_CLEVERTAP_USE_GOOGLE_AD_ID,
            cleverTapAndroidUseGoogleAdId ? "1" : "0"
        )

        return config
    })

    return config
}
