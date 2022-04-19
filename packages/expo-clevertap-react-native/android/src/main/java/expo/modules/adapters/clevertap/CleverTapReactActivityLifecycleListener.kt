package expo.modules.adapters.clevertap

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener
import com.clevertap.react.CleverTapModule

class CleverTapReactActivityLifecycleListener(activityContext: Context) : ReactActivityLifecycleListener {
    override fun onCreate(activity: Activity, savedInstanceState: Bundle?) {
		  CleverTapModule.setInitialUri(activity.getIntent().getData())
    }
}