import React, { PureComponent } from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    Text
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
    // Text,
    FooterTab,
    Button,
    Item,
    List,
    ListItem,
} from 'native-base';

/**
 * 
 * @param {*} cb 
 */
function fetchGifs(cb) {
    return fetch(fetchGifs.url, {
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
fetchGifs.url = 'http://10.11.8.92/RN/API/';

//
let styles = StyleSheet.create({
    box: {
        borderWidth: 1, borderColor: 'red',
        height: 120,
        padding: 10
    },
    scroll: {
        // flex: 1,
        // flexDirection: 'row',
        borderWidth: 1, borderColor: 'green'
    },
    wrapper: {
        // flex: 1,
        flexDirection: 'row',
        borderWidth: 1, borderColor: 'yellow'
    },
    imgItem: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderWidth: 2, borderColor: 'red',
    },
    img: {
        height: 100,
        width: 100,
        marginRight: 10
    }
});

/**
 * 
 */
export default class RTIGifs extends PureComponent {

    constructor(props) {
        super(props);
        // Init state
        this.state = {
            gifs: []
        }
        //
        fetchGifs(gifs => {
            this.setState(() => ({ gifs }));
        });
    }

    componentDidMount() {}

    /**
     * 
     */
    render() {
        let { gifs } = this.state;
        console.log('gifs: ', gifs);
        let imgs = [];
        if (gifs.length) {
            gifs.forEach((uri, idx) => {
                // imgs.push(<Text key={`img-${idx}`}>{idx}:{uri}</Text>);
                if (idx <= 6) {
                    imgs.push(<Image key={`img-${idx}`} source={{ uri }} style={[styles.img]} />);
                }
                /* return (idx <= 10) ? (
                    <Image key={`img-${idx}`} source={{ uri }} height={100} width={100} style={[styles.imgg]} />
                ) : null */
            })
        }
        return (
            <View style={[styles.box]}>
                <ScrollView
                    style={[styles.scroll]}
                    contentContainerStyle={[styles.wrapper]}
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {/* <View style={[styles.wrapper]}> */}
                    {imgs.length ? imgs : (<Text>Loading...</Text>)}
                    {/* </View> */}
                </ScrollView>
            </View>
        );
    }
}