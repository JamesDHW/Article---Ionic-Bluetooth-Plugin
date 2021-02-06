//
//  NearbyMessagesPlugin.swift
//  App
//
//  Created by James Haworth Wheatman on 31/01/2021.
//

import Capacitor

@objc(NearbyMessagesPlugin)
public class NearbyMessagesPlugin: CAPPlugin {
    
  @objc func HelloWorld(_ call: CAPPluginCall) {
    call.success([
        "message": "Hello iOS user!"
    ])
  }
    
}
