# config-plugins/clevertap-react-native

Config plugin to auto configure `clevertap-react-native` when the native code is generated (`expo prebuild`).

## Expo installation

> Tested against Expo SDK 44

> This package cannot be used in the "Expo Go" app because [it requires custom native code](https://docs.expo.io/workflow/customizing/).
> First install the package with yarn, npm, or [`expo install`](https://docs.expo.io/workflow/expo-cli/#expo-install).

```sh
expo install clevertap-react-native @config-plugins/clevertap-react-native
```

After installing this npm package, add the [config plugin](https://docs.expo.io/guides/config-plugins/) to the [`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of your `app.json` or `app.config.js`:

```json
{
    "expo": {
        "plugins": ["@config-plugins/clevertap-react-native"]
    }
}
```

Next, rebuild your app as described in the ["Adding custom native code"](https://docs.expo.io/workflow/customizing/) guide.

## API

The plugin provides props for customization. Every time you change the props or plugins, you'll need to rebuild (and `prebuild`) the native app.

-   `cleverTapAccountId` (_string_): CleverTap account ID. Required.
-   `cleverTapToken` (_string_): CleverTap token. Required.
-   `cleverTapRegionCode` (_string_): CleverTap region code. Required.
-   `cleverTapAndroidUseGoogleAdId` (_boolean_): Configure CleverTap to use Google Ad ID. Optional. Default false.

See the ["Clevertap React Native documentation](https://developer.clevertap.com/docs/react-native-quick-start-guide) for more information on these fields.

#### Example

```json
{
    "expo": {
        "plugins": [
            [
                "@config-plugins/clevertap-react-native",
                {
                    "cleverTapAccountId": "111-222-3333",
                    "cleverTapToken": "123-456",
                    "cleverTapRegionCode": "EU",
                    "cleverTapAndroidUseGoogleAdId": false
                }
            ]
        ]
    }
}
```
