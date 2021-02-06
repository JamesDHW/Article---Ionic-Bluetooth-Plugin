package io.ionic.starter;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class NearbyMessagesPlugin extends Plugin {

    @PluginMethod
    public void HelloWorld(PluginCall call){
        JSObject ret = new JSObject();
        ret.put("message", "Hello Android user!");
        call.success(ret);
    }
}
