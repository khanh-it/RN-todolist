import React, { PureComponent } from 'react';
import {
    StyleSheet,
    // Animations
    Animated,
    Easing
    // #end
} from 'react-native';
import {
    View,
    Button,
    Text
} from 'native-base';

//
import RTIGifs from './Gifs';

//
let styles = StyleSheet.create({
    box: {
        // borderWidth: 1, borderColor: 'white',
    },
    // tabs
    tabs: {
        // borderWidth: 1, borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 3,
    },
    tab: {
        borderWidth: 1, borderColor: 'white',
        borderRadius: 0
    },
    tabActive: {
        backgroundColor: '#F3F3F3'
    },
    tabGifs: {
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    tabEmojis: {
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    tabStickers: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },
    //.end#tabs
    // content
    content: {
        // borderWidth: 1, borderColor: 'white',
        minHeight: 150
    },
    contentItem: {
    },
    contentActive: {
    },
    contentGifs: {
        
    },
    contentEmojis: {
        
    },
    contentStickers: {
        
    },
    //.end#content
});

/**
 * 
 */
export default class RTIDynamicContent extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        const show = (typeof props.show === 'boolean') ? props.show : false;
        this.state = {
            show, tab: 'gifs' // gifs | emojis | stickers
        };

        // Animations
        this._animations = {
            boxTiming: {
                height: new Animated.Value(0),
                opacity: new Animated.Value(0)
            }
        };

        // Bind method(s)
        this.switchTab = this.switchTab.bind(this);
        this.toggle = this.toggle.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {}

    /**
     * 
     * @param {*} tab 
     */
    switchTab(tab) {
        this.setState({ tab });
    }

    startAnimation() {
        let { show } = this.state;
        let { boxTiming } = this._animations;
        // console.log('startAnimation#show: ', show, animationValue, animationOpts);
        // First set up animation 
        Animated.parallel([
            Animated.timing(boxTiming.opacity, {
                toValue: show ? 1 : 0,
                duration: 256, // delay: 0,
                // easing: Easing.inOut(Easing.ease)
            }),
            Animated.timing(boxTiming.height, {
                toValue: show ? 180 : 0,
                duration: 256, // delay: 0,
                // easing: Easing.inOut(Easing.ease)
            })
        ]).start();
    }

    toggle() {
        // let { show } = this.state;
        // this.setState({ show: !show });
        this.state.show = !this.state.show;
        this.startAnimation();
    }

    /**
     * 
     */
    render() {
        let { tab } = this.state;
        //
        let contentHtml = null;
        if (tab === 'gifs') {
            contentHtml = (
                <View style={[styles.contentItem, styles.contentGifs]}>
                    <RTIGifs />
                </View>
            );
        }
        if (tab === 'emojis') {
            contentHtml = (
                <View style={[styles.contentItem, styles.contentEmojis]}>
                    <Text>Emojis content</Text>
                </View>
            );
        }
        if (tab === 'stickers') {
            contentHtml = (
                <View style={[styles.contentItem, styles.contentStickers]}>
                    <Text>Stickers content</Text>
                </View>
            );
        }
        //
        return (
            <Animated.View
                style={[styles.box, this._animations.boxTiming]}
            >
                <View style={[styles.tabs]}>
                    <Button
                        transparent small bordered light dark={(tab === 'gifs')}
                        style={[styles.tab, styles.tabGifs, (tab === 'gifs') ? styles.tabActive : null]}
                        onPress={() => this.switchTab('gifs')}
                    >
                        <Text>Gifs</Text>
                    </Button>
                    <Button
                        transparent small bordered light dark={(tab === 'emojis')}
                        style={[styles.tab, styles.tabEmojis, (tab === 'emojis') ? styles.tabActive : null]}
                        onPress={() => this.switchTab('emojis')}
                    >
                        <Text>Emojis</Text>
                    </Button>
                    <Button
                        transparent small bordered light dark={(tab === 'stickers')}
                        style={[styles.tab, styles.tabStickers, (tab === 'stickers') ? styles.tabActive : null]}
                        onPress={() => this.switchTab('stickers')}
                    >
                        <Text>Stickers</Text>
                    </Button>
                </View>
                <View style={[styles.content]}>
                    {contentHtml}
                </View>
            </Animated.View>
        );
    }
}