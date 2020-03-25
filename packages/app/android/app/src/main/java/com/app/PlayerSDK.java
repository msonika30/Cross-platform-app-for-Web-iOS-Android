package com.app;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PlayerSDK extends ReactContextBaseJavaModule {
    //constructor
    public PlayerSDK(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "PlayerSDK";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
    public void openPlayer() {
        try{
            Log.d("myTag", "THE PLAYER OPENING CODE GOES HERE");
        }catch (Exception e){
            Log.d("myTag", "There was an error!");
        }
    }
}
