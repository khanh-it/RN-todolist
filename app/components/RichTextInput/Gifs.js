import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Text,
    ActivityIndicator
} from 'react-native';
// import {} from 'native-base';

/**
 * 
 * @param {*} cb 
 */
function fetchGifs(cb, options = {}) {
    let url = fetchGifs.url
        + ('?limit=' + (options.limit || '').toString().trim())
        + ('&page=' + (options.page || '').toString().trim())
    ;
    return fetch(url, {
            method: 'GET',
            // mode: "no-cors",
            headers: {
              'user-agent': navigator.userAgent,
              // 'content-type': 'text/plain'
            }
        })
        .then(res => {
            return res.json().then(json => {
                cb && cb(json);
                return json;
            });
        })
        // .catch(err => { console.log('err: ', err); return err; })
    ;
}
fetchGifs.url = 'http://10.11.8.92/RN/rn_TodoList/API/';

//
let styles = StyleSheet.create({
    box: {
        borderWidth: 1, borderColor: 'red',
        height: 130,
        padding: 10
    },
    scroll: {
        // flex: 1,
        // flexDirection: 'row',
        borderWidth: 1, borderColor: 'green',
    },
    scrollContent: {
        // flex: 1,
        // flexDirection: 'row',
        borderWidth: 2, borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgItem: {
        height: '100%',
        width: 128,
        marginRight: 8,
        borderWidth: 1, borderColor: 'red',
    },
    img: {
        height: '100%', width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Gif extends PureComponent {

    componentDidMount() {
        // console.log('componentDidMount');
    }

    render() {
        let { dI } = this.props;
        return (
            <View style={[styles.imgItem]}>
                <TouchableOpacity
                    onPress={() => alert(dI.item)}
                >
                    <ImageBackground
                        source={{ uri: dI.item }}
                        style={[styles.img]}
                        onLoad={(event) => {
                            this._refActivityIndicator.setNativeProps({ display: 'none' });
                            delete this._refActivityIndicator;
                        }}
                    >
                        <ActivityIndicator large color={'pink'} ref={ref => { this._refActivityIndicator = ref; }} />
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
}

/**
 * 
 */
export default class RTIGifs extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        this.state = {
            limit: '', // items count per page (uses server's default);
            page: 1, // current page
            gifs: [],
            fetchEnd: false
        };
    }

    /**
     * 
     */
    _fetchGifs() {
        let { limit, page, fetchEnd } = this.state;
        //
        fetchGifs((gifs) => {
                fetchEnd = (gifs.length <= 0);
                gifs = this.state.gifs.concat(gifs);
                ++page;
                //
                this.setState({ gifs, page, fetchEnd });
            }
            , { limit, page }
        );
    }

    componentDidMount() {
        this._fetchGifs();
    }

    /**
     * 
     */
    render() {
        let { gifs, fetchEnd } = this.state;
        console.log('render: ', fetchEnd);
        return (
            <View style={[styles.box]}>
                <FlatList
                    ref={ref => { this._refFlatList = ref; }}
                    style={[styles.scroll]}
                    contentContainerStyle={[styles.scrollContent]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} 
                    showsVerticalScrollIndicator={false}
                    // pagingEnabled={true}
                    // ListHeaderComponent={(<ActivityIndicator size="large" color="#00ff00" />)}
                    ListFooterComponent={fetchEnd ? null : (<ActivityIndicator size="large" color="#00ff00" />)}
                    // ListEmptyComponent={(<ActivityIndicator size="large" color="#0000ff" />)}
                    data={gifs}
                    extraData={this.state}
                    keyExtractor={(item, index) => {
                        return `FlatItem-${index}`;
                    }}
                    renderItem={(dI) => {
                        let ele = (<Gif dI={dI} />);
                        return ele;
                    }}
                    onEndReached={(info) => {
                        this._onEndReachedInfo = info; console.log('onEndReached: ', info);
                    }}
                    /* onScroll={(event) => {
                        console.log('onScroll: ', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                    }}
                    onMomentumScrollBegin={(event) => {
                        console.log('onMomentumScrollBegin: ', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                    }}
                    onMomentumScrollEnd={(event) => {
                        console.log('onMomentumScrollEnd: ', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                    }} */
                    /* onScrollBeginDrag={(event) => {
                        console.log('onScrollBeginDrag: ', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                    }} */
                    onScrollEndDrag={(event) => {
                        let { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
                        let distanceFromEnd = contentSize.width - layoutMeasurement.width;
                        // Scroll to end?
                        // console.log('onScrollEndDrag:', event.nativeEvent);
                        if (!fetchEnd && (distanceFromEnd - contentOffset.x) <= 10) {
                            // console.log('onScrollDrag End:', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                            this._fetchGifs();
                        }
                        // Scroll to start?
                        if (contentOffset.x  <= 10) {
                            console.log('onScrollDrag Start:', event.nativeEvent.contentOffset, event.nativeEvent.layoutMeasurement);
                        }
                    }}
                    // onEndReachedThreshold={10}
                />
            </View>
        );
    }
}