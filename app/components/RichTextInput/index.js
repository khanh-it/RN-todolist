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
    //
    box: {
        // flex: 1,
        // borderWidth: 1, borderColor: 'red',
        marginTop: 3,
        marginBottom: 3
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        // borderWidth: 1, borderColor: 'blue',
    },
    wrapperLeft: {},
    wrapperBody: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    wrapperRight: {},
    inputWrap: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#FFF'
    },
    input: {
        // borderWidth: 1,
        // borderColor: 'red',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    }
});

/**
 * 
 */
export default class RichTextInput extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        this.state = {
            menu: 2 // <-- show menu as default
        }
    }


    _renderMenu() {
        return (
            <FooterTab style={[styles.box]}>
                { /*  */ }
                <View style={[styles.wrapper]}>
                    <Left>
                        <Button
                            onPress={() => this.setState(() => ({ menu: 0 }))}
                        >
                            <Icon ios='ios-keypad' android='md-keypad' />
                        </Button>
                    </Left>
                    <Body style={[styles.wrapperBody]}>
                        <Button
                            onPress={() => this.setState(() => ({ menu: 2 }))}
                        >
                            <Text>Menu</Text>
                        </Button>
                    </Body>
                </View>
                { /*  */ }
            </FooterTab>
        );
    }

    /**
     * 
     */
    render() {
        let { menu } = this.state;
        if (menu) {
            return this._renderMenu();
        }
        return (
            <FooterTab style={[styles.box]}>
                { /*  */ }
                <View style={[styles.wrapper]}>
                    <Left style={[styles.noFlex]}>
                        <Button
                            onPress={() => this.setState(() => ({ menu: 1 }))}
                        >
                            <Icon ios='ios-list' android='md-list' />
                        </Button>
                    </Left>
                    <Body style={[styles.wrapperBody]}>
                        <Left style={[styles.noFlex]}>
                            <Button>
                                <Icon ios="ios-arrow-dropright-circle" android="md-arrow-dropright-circle" />
                            </Button>
                        </Left>
                        <Body style={[styles.wrapperBody]}>
                            <Item regular style={[styles.inputWrap]}>
                                <Input
                                    style={[styles.input]}
                                />
                                <Button
                                    transparent
                                    dark
                                >
                                    <Icon ios="ios-happy" android="md-happy" />
                                </Button>
                            </Item>
                        </Body>
                    </Body>
                    <Right style={[styles.noFlex]}>
                        <Button>
                            <Icon ios="ios-more" android="md-more" />
                        </Button>
                    </Right>
                </View>
                { /*  */ }
            </FooterTab>
        );
    }
}