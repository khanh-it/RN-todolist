import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    View,
    Icon,
    Text,
    Button,
    List,
    ListItem,
} from 'native-base';

// 
// import Input from './Input';

//
let styles = StyleSheet.create({
    // Menu
    box: {
        // flex: 1,
        // width: '100%',
        // position: 'absolute',
        // left: 0, bottom: 55,
        backgroundColor: 'red',
        borderWidth: 1, borderColor: 'blue'
    },
    wrap: {
        height: 150
    }
    // #end.Menu
});

/**
 * 
 */
export default class RTIFeatures extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        this.state = {}
    }

    /**
     * 
     */
    render() {
        return (
            <List style={[styles.box]}>
                <ListItem style={[styles.wrap]}>
                    <ScrollView style={[styles.scroll]}>
                        <View>
                            <Text>Item 1.1</Text>
                        </View>
                        <View>
                            <Text>Item 1.2</Text>
                        </View>
                        <View>
                            <Text>Item 1.3</Text>
                        </View>
                    </ScrollView>
                </ListItem>
                <ListItem style={[styles.wrap]}>
                    <ScrollView>
                        <View>
                            <Text>Item 2.1</Text>
                        </View>
                        <View>
                            <Text>Item 2.2</Text>
                        </View>
                        <View>
                            <Text>Item 2.3</Text>
                        </View>
                    </ScrollView>
                </ListItem>
            </List>
        );
    }
}