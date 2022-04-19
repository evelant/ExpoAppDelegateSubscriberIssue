import { createRunOncePlugin } from "@expo/config-plugins"
import type { ConfigPlugin } from "@expo/config-plugins"

import type { ConfigData } from "./types"
import { withCleverTapAndroid } from "./withCleverTapAndroid"
import { withCleverTapIOS } from "./withCleverTapIos"

const withCleverTap: ConfigPlugin<ConfigData> = (
    config,
    { cleverTapAccountId, cleverTapRegionCode, cleverTapToken, cleverTapAndroidUseGoogleAdId }
) => {
    config = withCleverTapAndroid(config, {
        cleverTapAccountId,
        cleverTapRegionCode,
        cleverTapToken,
        cleverTapAndroidUseGoogleAdId,
    })
    config = withCleverTapIOS(config, {
        cleverTapAccountId,
        cleverTapRegionCode,
        cleverTapToken,
    })
    return config
}

let pkg: { name: string; version?: string } = {
    name: "clevertap-react-native",
}
try {
    const clevertapPkg = require("clevertap-react-native/package.json")
    pkg = clevertapPkg
} catch {}

export default createRunOncePlugin(withCleverTap, pkg.name, pkg.version)
