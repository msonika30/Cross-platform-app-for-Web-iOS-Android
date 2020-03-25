# branded-apps

React Native project setup
1. Install yarn package manager 
2. Type command “yarn” in root folder. This will install all required JS libraries
3. Change directory to packages/app/
4. Install library named wml with command “yarn global add wml”
5. Click “n” when you get command prompt to add node_modules of wml
6. Type command “wml add ../common ./node_modules/@adoribranded/common” to link common package and make it available in app package
7. Type command “wml start” to make the linking active (This should be active in background always)

iOS APP setup
1. Open another terminal window and change directory to packages/app/ios/
2. Type command “pod install” to install required iOS libraries
3. Open app.xcworkspace in packages/app/ios/ folder in Xcode and run 
4. The app should open up with a sample counter and a play button
5. CODE ENTRY POINT: The openPlayer function in PlayerSDK.swift file is the entry point where player related code needs to be included
6. EXPECTED BEHAVIOR: When play button is clicked the Adori Player opens

Android APP setup
1. Open Android Studio and click on “open existing android studio project”
2. Navigate to packages/app/android
3. Click on play and wait for app to open
4. The app should open up with a sample counter and a play button
5. CODE ENTRY POINT: The openPlayer function in PlayerSDK.java file inside com.app package is the entry point where player related code needs to be included
6. EXPECTED BEHAVIOR: When play button is clicked the Adori Player opens

