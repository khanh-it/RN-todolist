import React, { PureComponent } from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Container,
    Head,
    Content,
    Footer,
    Left,
    Right,
    Body,
    View,
    Input,
    Icon,
    Text,
    FooterTab,
    Button,
    Item,
    List,
    ListItem,
} from 'native-base';

// 
// import Input from './Input';

//
let styles = StyleSheet.create({
    //
    noFlex: {
        flex: 0
    },
    // Menu
    menuList: {
        // flex: 1,
        position: 'absolute',
        width: '100%',
        left: 0, bottom: 55,
        backgroundColor: 'red',
        // borderWidth: 1, borderColor: 'red'
    },
    menuListItem: {
        
    }
    // #end.Menu
});

/**
 * 
 */
export default class RichTextInputMenu extends PureComponent {

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
            <List style={[styles.menuList]}>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 1</Text>
                </ListItem>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 2</Text>
                </ListItem>
            </List>
        );
    }
}