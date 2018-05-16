import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Button as RNButton,
    // Animations
    Animated,
    Easing
    // #end
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
import RTIFeatures from './Features';
import RTIGifs from './Gifs';
//
const AnimatedList = Animated.createAnimatedComponent(List);
const AnimatedButton = Animated.createAnimatedComponent(Button);

//
import styles from './styles';

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
            moreFeatures: false,
            count: 0
        }
        //
        this.spinValue = new Animated.Value(0);
        let spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'] 
        });
        //
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        // First set up animation 
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start();
        return;
        const { height, menuList } = this.state

        // Reset the value if needed
        // height.setValue(0);

        // Start a spring animation
        Animated.spring(height, { toValue: menuList ? 220 : 0, friction: 7 }).start();
    }

    componentDidMount() {
        // this.startAnimation();
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
                        <Icon style={[styles.icon]} ios='ios-keypad' android='md-keypad' />
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
        let { moreFeatures } = this.state;

        return (
            <View style={[styles.richTextBox]}>
                <RTIFeatures key={new Date().getTime()} show={moreFeatures} />
                <Text>{this.state.count}</Text>
                <View style={[styles.richTextInput]}>
                    <Button
                        transparent light style={[styles.btnIcon /*, { transform: [{ rotate: spin }] } */]}
                        onPress={() => this.setState((state) => ({
                            moreFeatures: !state.moreFeatures,
                            count: (state.count + 1)
                        }))}
                    >
                        {moreFeatures ?
                            (<Icon style={[styles.icon]} ios="ios-close-circle" android="md-close-circle" />)
                            : (<Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />)
                        }
                    </Button>
                    <RNButton
                        title='(C)'
                        onPress={() => this.setState((state) => ({
                            moreFeatures: !state.moreFeatures,
                            count: (state.count + 1)
                        }))}
                    >
                        <Icon name='home' /><Text>Count me</Text>
                    </RNButton>
                    {/* <Button
                        transparent light style={[styles.btnIcon]}
                    >
                        <Icon style={[styles.icon]} ios="ios-camera" android="md-camera" />
                    </Button>
                    <Button
                        transparent light style={[styles.btnIcon]}
                    >
                        <Icon style={[styles.icon]} ios="ios-images" android="md-images" />
                    </Button>
                    <Button
                        transparent light style={[styles.btnIcon]}
                    >
                        <Icon style={[styles.icon]} ios="ios-mic" android="md-mic" />
                    </Button>
                    <Item regular style={[styles.inputWrap]}>
                        <Input
                            style={[styles.input]}
                        />
                        <Button
                            transparent dark
                            style={[styles.btnIcon, styles.btnEmoji]}
                        >
                            <Icon style={[styles.icon]} ios="ios-happy" android="md-happy" />
                        </Button>
                    </Item>
                    <Button
                        transparent light style={[styles.btnIcon]}
                    >
                        <Icon style={[styles.icon]} ios="ios-thumbs-up" android="md-thumbs-up" />
                    </Button> */}
                </View>
            </View>
        );
    }

    /**
     * 
     */
    render() {
        let { menu, moreFeatures, count } = this.state;
        let html = menu ? this._renderMenu() : this._rendeRichInpuText();
        return (
            <Footer style={[styles.box]}>{html}</Footer>
        );
    }
}