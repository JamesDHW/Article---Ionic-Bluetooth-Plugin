//
//  NearbyMessagesPlugin.swift
//  App
//
//  Created by James Haworth Wheatman on 31/01/2021.
//

import Capacitor

@objc(NearbyMessagesPlugin)
public class NearbyMessagesPlugin: CAPPlugin {
    
    private var messageManager = GNSMessageManager(apiKey: "API_KEY")
    private var publication: GNSPublication?
    private var subscription: GNSSubscription?
    
    
    @objc func Publish(_ call: CAPPluginCall) {
        let messageManager = self.messageManager
        var publication = self.publication
        DispatchQueue.main.async {
            let message : String = call.getString("message")!
            publication = messageManager!.publication(with: GNSMessage(content: message.data(using: .utf8)))
        }
    }
    
    @objc func Subscribe(_ call: CAPPluginCall) {
        let messageManager = self.messageManager
        var subscription = self.subscription
        DispatchQueue.main.async {
            subscription = messageManager?.subscription(
                messageFoundHandler: { (msg: GNSMessage?) in
                    let message = msg?.content
                    self.notifyListeners("onFound", data: ["message":message!])
                },
                messageLostHandler: { (msg: GNSMessage?) in
                    let message = msg?.content
                    self.notifyListeners("onLost", data: ["message":message!])
                }
            )
        }
        
    }
    
    @objc func Unpublish(_ call: CAPPluginCall) {
        publication = nil
    }
    
    @objc func Unubscribe(_ call: CAPPluginCall) {
        subscription = nil
    }
    
    @objc func HelloWorld(_ call: CAPPluginCall) {
        call.success([
            "message": "Hello iOS user!"
        ])
    }
    
}
