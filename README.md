Cross-platform-app-for-Web-iOS-Android
A single codebase cross platform app written in React+React-Native+React-Native-Web ecosystem that renders a web browser version along with iOS/Android app versions and also connects to custom native functionality of mobile platform SDKs.

Installation instructions for this project

React Native project setup

Install yarn package manager
Type command “yarn” in root folder. This will install all required JS libraries
Change directory to packages/app/
Install library named wml with command “yarn global add wml”
Click “n” when you get command prompt to add node_modules of wml
Type command “wml add ../common ./node_modules/@cross-platform/common” to link common package and make it available in app package
Type command “wml start” to make the linking active (This should be active in background always)
iOS APP setup

Open another terminal window and change directory to packages/app/ios/
Type command “pod install” to install required iOS libraries
Open app.xcworkspace in packages/app/ios/ folder in Xcode and run
The app should open up with a sample counter and a play button
CODE ENTRY POINT: The callNative function in NativeSDK.swift file is the entry point where custom native functionality related code needs to be included
EXPECTED BEHAVIOR: When "click" button is clicked the Native function is called and you can see log in Xcode terminal
Android APP setup

Open Android Studio and click on “open existing android studio project”
Navigate to packages/app/android
Click on play and wait for app to open
The app should open up with a sample counter and a play button
CODE ENTRY POINT: The callNative function in NativeSDK.swift file is the entry point where custom native functionality related code needs to be included
EXPECTED BEHAVIOR: When "click" button is clicked the Native function is called and you can see log in Android studio terminal