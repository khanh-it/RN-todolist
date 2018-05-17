import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    // Animations
    Animated,
    Easing
    // #end
} from 'react-native';
import {
    View,
    Icon,
    Text,
    Button
} from 'native-base';

//
let styles = StyleSheet.create({
    // Menu
    box: {
        // flex: 1,
        // width: '100%',
        // position: 'absolute',
        // left: 0, bottom: 55,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // backgroundColor: 'red',
        borderWidth: 1, borderColor: '#F3F3F3'
    },
    wrap: {
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3'
    },
    scroll: {
        
    },
    scrollContent: {
        flexDirection: 'row'
    },
    feature: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        // borderWidth: 1, borderColor: 'blue'
    },
    icon: {
        fontSize: 56,
        color: 'white',
    },
    text: {
        color: 'white',
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
        // +++
        const show = (typeof props.show === 'boolean') ? props.show : false;
        this.state = { show };
        // animations
        this._animations = {
            boxTiming: {
                height: new Animated.Value(show ? 300 : 0)
            }
        };
        // Bind method(s)
        this.toggle = this.toggle.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.show !== nextProps.show) {
            return nextProps;
        }
        return null;
    }

    componentDidMount() {}

    componentDidUpdate() {
        // this.startAnimation();
    }

    startAnimation() {
        let { show } = this.state;
        //
        /* this.state.animations.boxTiming = {
            height: new Animated.Value(show ? 300 : 0)
        }; */
        let animationValue = this._animations.boxTiming.height;
        let animationOpts = {
            toValue: show ? 'auto' : 0,
            duration: 512,
            delay: 0,
            easing: Easing.inOut(Easing.ease)
        };
        // console.log('startAnimation#show: ', show, animationValue, animationOpts);
        // First set up animation 
        Animated.timing(animationValue, animationOpts).start();
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
        let { show } = this.state;
        //
        let features = (
            <View style={[styles.wrap]}>
                <ScrollView
                    style={[styles.scroll]}
                    contentContainerStyle={[styles.scrollContent]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} 
                    showsVerticalScrollIndicator={false}
                    ref={ref => {
                        this._refScrollView = ref;
                    }}
                >
                    <Button
                        style={[styles.feature]}
                        onPress={() => {
                            this._refScrollView.scrollToEnd();
                        }}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.1</Text>
                    </Button>
                    <Button
                        style={[styles.feature]}
                        onPress={() => alert('touched')}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.2</Text>
                    </Button>
                    <Button
                        style={[styles.feature]}
                        onPress={() => alert('touched')}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.3</Text>
                    </Button>
                    <Button
                        style={[styles.feature]}
                        onPress={() => alert('touched')}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.3</Text>
                    </Button>
                    <Button
                        style={[styles.feature]}
                        onPress={() => alert('touched')}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.3</Text>
                    </Button>
                    <Button
                        style={[styles.feature]}
                        onPress={() => alert('touched')}
                    >
                        <Icon style={[styles.icon]} ios="ios-add-circle" android="md-add-circle" />
                        <Text style={[styles.text]}>Item 1.3</Text>
                    </Button>
                </ScrollView>
            </View>
        );
        return (
            <Animated.View
                style={[styles.box, this._animations.boxTiming]}
                onLayout={event => {
                    console.log('layout: ', event.nativeEvent.layout);
                }}
            >
                {features}
                {/* features */}
            </Animated.View>
        );
    }
}