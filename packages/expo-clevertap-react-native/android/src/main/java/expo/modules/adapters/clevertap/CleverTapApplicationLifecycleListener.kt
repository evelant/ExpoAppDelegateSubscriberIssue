package expo.modules.adapters.clevertap

import android.app.Application
import android.content.Context
import expo.modules.core.interfaces.ApplicationLifecycleListener
import com.clevertap.android.sdk.ActivityLifecycleCallback
import com.clevertap.react.CleverTapPackage
import com.clevertap.android.sdk.CleverTapAPI

class CleverTapApplicationLifecycleListener(context: Context?) : ApplicationLifecycleListener {
    var context = context

    override fun onCreate(application: Application) {
		ActivityLifecycleCallback.register(application)
        super.onCreate(application)
    }
}