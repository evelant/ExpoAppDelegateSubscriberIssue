import ExpoModulesCore
import class CleverTapSDK.CleverTap
import class CleverTapReact.CleverTapReactManager

public class CleverTapAppDelegate: ExpoAppDelegateSubscriber {
  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    CleverTap.autoIntegrate() 
  	CleverTapReactManager.sharedInstance()?.applicationDidLaunch(options: launchOptions)
    return true
  }
}