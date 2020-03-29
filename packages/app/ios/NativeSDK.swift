//
//  ShowLog.swift
//  app
//
//  Created by Sonika Malloth on 20/03/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(NativeSDK)
class NativeSDK: NSObject {
  @objc
  func callNative() {
    print("THE NATIVE FUNCTION IN IOS IS CALLED!")
  }
}
