import React, { PureComponent } from 'react';
import {
    StyleSheet,
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
    Button,
    Item
} from 'native-base';

// 
import RTIFeatures from './Features';
import RTIGifs from './Gifs';
import RTIDynamicContent from './DynamicContent';
//
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
        this.state = {};
        // Bind method(s)
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
        // this.startAnimation();
    }

    _rendeRichInpuText() {
        //
        let { moreFeatures } = this.state;

        return (
            <View style={[styles.richTextBox]}>
                <RTIFeatures ref={ref => { this._refRTIFeatures = ref; }} />
                <View style={[styles.richTextInput]}>
                    <Button
                        transparent light style={[styles.btnIcon /*, { transform: [{ rotate: spin }] } */]}
                        onPress={() => this._refRTIFeatures.toggle() /* this.setState((state) => ({
                            moreFeatures: !state.moreFeatures,
                            count: (state.count + 1)
                        }))*/ }
                    >
                        {moreFeatures ?
                            (<Icon style={[styles.icon]} ios="ios-close-circle" android="md-close-circle" />)
                            : (<Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />)
                        }
                    </Button>
                    <Button
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
                            ref={ref => { this._refNBInput = ref; }}
                        />
                        <Button
                            transparent dark
                            style={[styles.btnIcon, styles.btnEmoji]}
                            onPress={() => {
                                this._refNBInput._root.blur();
                                this._refRTIDynamicContent.toggle()
                            }}
                        >
                            <Icon style={[styles.icon]} ios="ios-happy" android="md-happy" />
                        </Button>
                    </Item>
                    <Button
                        transparent light style={[styles.btnIcon]}
                    >
                        <Icon style={[styles.icon]} ios="ios-thumbs-up" android="md-thumbs-up" />
                    </Button>
                </View>
                <RTIDynamicContent ref={ref => { this._refRTIDynamicContent = ref; }} />
            </View>
        );
    }

    /**
     * 
     */
    render() {
        return (
            <Footer style={[styles.box]}>
                {this._rendeRichInpuText()}
            </Footer>
        );
    }
}