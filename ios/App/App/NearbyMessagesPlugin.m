//
//  NearbyMessagesPlugin.m
//  App
//
//  Created by James Haworth Wheatman on 31/01/2021.
//

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(NearbyMessagesPlugin, "NearbyMessagesPlugin",
           CAP_PLUGIN_METHOD(HelloWorld, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(Publish, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(Subscribe, CAPPluginReturnPromise);
)
