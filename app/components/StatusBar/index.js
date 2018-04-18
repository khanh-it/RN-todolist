import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

// here, we add the spacing for iOS
// and pass the rest of the props to React Native's StatusBar

export default function (props) {
    const height = StatusBar.currentHeight || ((Platform.OS === 'ios') ? 20 : 24);
    const { backgroundColor } = props;

    return (
        <View style={{ height, backgroundColor }}>
            <StatusBar { ...props } />
        </View>
    );
}