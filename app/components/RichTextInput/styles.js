import {
    StyleSheet,
    Animated
} from 'react-native';
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
        justifyContent: 'flex-start'
    },
    //
    // 
    richTextBox: {
        flex: 1,
        // borderWidth: 2, borderColor: 'red',
    },
    richTextInput: {
        // display: 'none',
        // flex: 1,
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
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 30,
        backgroundColor: '#FFF',
        marginLeft: 0
    },
    input: {
        height: 40,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    btnIcon: {
        height: 40
    },
    btnEmoji: {

    },
    icon: {
        marginLeft: 10,
        marginRight: 10
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
export default styles;
