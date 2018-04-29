package com.simpletodolist;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
// https://github.com/react-native-component/react-native-smart-splash-screen
import com.reactnativecomponent.splashscreen.RCTSplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SimpleTodoList";
    }

    /**
     * https://github.com/react-native-component/react-native-smart-splash-screen
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RCTSplashScreen.openSplashScreen(this);   //open splashscreen
        //RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);   //open splashscreen fullscreen
        super.onCreate(savedInstanceState);
    }
}
