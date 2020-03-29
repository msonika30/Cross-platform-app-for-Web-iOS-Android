# cross-platform-apps-for-web-ios-android

A single codebase cross platform app written in React+React-Native+React-Native-Web ecosystem that renders a web browser version along with iOS/Android app versions and also connects to custom native functionality of mobile platform SDKs.

Installation instructions for this project

React Native project setup
1. Install yarn package manager 
2. Type command “yarn” in root folder. This will install all required JS libraries
3. Change directory to packages/app/
4. Install library named wml with command “yarn global add wml”
5. Click “n” when you get command prompt to add node_modules of wml
6. Type command “wml add ../common ./node_modules/@cross-platform/common” to link common package and make it available in app package
7. Type command “wml start” to make the linking active (This should be active in background always)

iOS APP setup
1. Open another terminal window and change directory to packages/app/ios/
2. Type command “pod install” to install required iOS libraries
3. Open app.xcworkspace in packages/app/ios/ folder in Xcode and run 
4. The app should open up with a sample counter and a play button
5. CODE ENTRY POINT: The callNative function in NativeSDK.swift file is the entry point where custom native functionality related code needs to be included
6. EXPECTED BEHAVIOR: When "click" button is clicked the Native function is called and you can see log in Xcode terminal

Android APP setup
1. Open Android Studio and click on “open existing android studio project”
2. Navigate to packages/app/android
3. Click on play and wait for app to open
4. The app should open up with a sample counter and a play button
5. CODE ENTRY POINT: The callNative function in NativeSDK.swift file is the entry point where custom native functionality related code needs to be included
6. EXPECTED BEHAVIOR: When "click" button is clicked the Native function is called and you can see log in Android studio terminal

