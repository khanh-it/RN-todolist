import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Animated
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
        // borderWidth: 1, borderColor: 'red',
        height: undefined,
    },
    //
    // 
    richTextInput: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3
    },
    contentLeft: {},
    contentBody: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    contentRight: {},
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
    },

    // list item
    menu: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    menuList: {
        // flex: 1
        width: '100%'
    },
    menuListItem: {

    }
    // #end
});

//
const AnimatedList = Animated.createAnimatedComponent(List);

/**
 * 
 */
export default class RichTextInput extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        this.state = {
            menu: 0, // <-- show menu as default,
            menuList: true, // 
            height: new Animated.Value(0),
            // 
            commonFeatures: false,
            moreFeatures: false
        }
        //
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        const { height, menuList } = this.state

        // Reset the value if needed
        // height.setValue(0);

        // Start a spring animation
        Animated.spring(height, { toValue: menuList ? 220 : 0, friction: 7 }).start();
    }

    componentDidMount() {
        this.startAnimation();
    }

    _renderMenu() {
        const { height } = this.state;
        //
        let menuList = (
            <AnimatedList style={[styles.menuList, { height }]}>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 1</Text>
                </ListItem>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 2</Text>
                </ListItem>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 3</Text>
                </ListItem>
                <ListItem style={[styles.menuListItem]}>
                    <Text>Item 4</Text>
                </ListItem>
            </AnimatedList>
        );
        // #end

        return (
            <View style={[styles.menu]}>
                {(this.state.menuList) ? menuList : null}
                <Left style={[{ flex: 0 }]}>
                    <Button
                        onPress={() => this.setState(() => ({ menu: 0 }))}
                    >
                        <Icon ios='ios-keypad' android='md-keypad' />
                    </Button>
                </Left>
                <Body>
                    <Button
                        onPress={() => {
                            this.setState((state) => ({ menuList: !state.menuList }), this.startAnimation);
                        }}
                    >
                        <Text>Menu</Text>
                    </Button>
                </Body>
            </View>
        );
    }

    _rendeRichInpuText() {
        //
        let { commonFeatures, moreFeatures } = this.state;

        return (
            <View style={[styles.richTextInput]}>
                <Left style={[styles.noFlex]}>
                    <Button
                        onPress={() => this.setState(() => ({ menu: 1 }))}
                    >
                        <Icon ios='ios-list' android='md-list' />
                    </Button>
                    <Button
                        onPress={() => this.setState(() => ({ menu: 1 }))}
                    >
                        <Icon ios='ios-list' android='md-list' />
                    </Button>
                </Left>
                <Body style={[styles.contentBody]}>
                    <Left style={[styles.noFlex]}>
                        {!commonFeatures ? (
                                <Button
                                    onPress={() => this.setState(() => ({ commonFeatures: true }))}
                                >
                                    <Icon ios="ios-arrow-dropright-circle" android="md-arrow-dropright-circle" />
                                </Button>
                            ) : (
                                <Button
                                    onPress={() => this.setState(() => ({ commonFeatures: false }))}
                                >
                                    <Icon ios="ios-close-circle" android="md-close-circle" />
                                </Button>
                            )
                        }
                        {commonFeatures
                            ? ([
                                <Button
                                    key='btn-01'
                                >
                                    <Icon ios="ios-camera" android="md-camera" />
                                </Button>,
                                <Button
                                    key='btn-02'
                                >
                                    <Icon ios="ios-arrow-dropright-circle" android="md-arrow-dropright-circle" />
                                </Button>
                            ])
                            : null
                        }
                    </Left>
                    <Body style={[styles.contentBody]}>
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
        );
    }

    /**
     * 
     */
    render() {
        let { menu } = this.state;
        let html = null;
        if (menu) {
            html = this._renderMenu();
        } else {
            html = this._rendeRichInpuText();
        }
        return (
            <Footer style={[styles.box]}>
                {html}
            </Footer>
        );
    }
}