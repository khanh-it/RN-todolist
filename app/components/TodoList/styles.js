import {
    StyleSheet
} from 'react-native';

/**
 * 
 */
const styles = StyleSheet.create({
    box: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        padding: 6
    },
    // header
    header: {
        fontSize: 48,
        textAlign: 'center',
        color: 'rgba(175, 47, 47, 0.15)'
    },
    // #end.header
    // input
    inputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(55, 55, 55, 0.5)',
        paddingLeft: 36
    },
    inputIcon: {
        width: 19,
        height: 11,
        // borderWidth: 1,
        // borderColor: 'blue',
        marginLeft: 9,
        marginTop: 12,
    },
    input: {
        // borderWidth: 1,
        // borderColor: 'red',
        fontSize: 18,
        lineHeight: 18
    },
    // #end.input
    // todo list + item(s)
    todolist: {
        flex: 1,
        borderColor: 'rgba(55, 55, 55, 0.5)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        padding: 3
    },
    todoitem: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(110, 110, 110, 0.2)',
        borderRadius: 2,
        borderStyle: 'dashed',
        marginBottom: 1
    },
    todoitemItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 2
    },
    todoitemText: {
        flex: 1,
        fontSize: 16,
    },
    todoitemIconText: {
        color: 'red',
        padding: 1
    },
    // #end.todo list + item(s)
    // Footer
    footer: {
        
    },
    footerBody: {
        borderColor: 'rgba(55, 55, 55, 0.5)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        padding: 6,
        flexDirection: 'row'
    },
    footerBodyL: {
        flex: 2
    },
    footerBodyR: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerLine: {
        height: 2,
        marginLeft: 1,
        marginRight: 1,
        borderColor: 'rgba(55, 55, 55, 0.5)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    footerL2: {
        marginLeft: 2,
        marginRight: 2,
    },
    footerL3: {
        marginLeft: 3,
        marginRight: 3,
    },
    footerSwitchMode: {
        borderWidth: 1,
        borderColor: 'transparent',
        paddingLeft: 2,
        paddingRight: 2,
    },
    footerSwitchModeActive: {
        borderColor: 'rgba(55, 55, 55, 0.5)',
        backgroundColor: 'rgba(110, 110, 110, 0.2)',
    }
    // #end.Footer
});

export default styles;
