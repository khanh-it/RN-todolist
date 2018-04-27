import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
//
import styles from './styles';

/**
 * 
 */
export default class TodoFooter extends PureComponent {
    constructor(props) {
        super(props)

        // init state
        this.state = {
            count: isNaN(props.count) ? 0 : props.count,
            mode: isNaN(props.mode) ? 0 : props.mode // 0 | 1 | 2 | 3
        }
    }

    componentWillReceiveProps(props) {
        let state = {
            count: isNaN(props.count) ? 0 : props.count,
            mode: isNaN(props.mode) ? 0 : props.mode // 0 | 1 | 2 | 3
        }
        this.setState(state);
    }

    /**
     * 
     */
    handleSwitchMode(newMode) {
        let { mode } = this.state;
        if (mode === newMode) {
            mode = 0;
        } else {
            mode = newMode;
        }
        this.setState(() => ({ mode }));
        // Fire callback?
        if (this.props.onSwitchMode) {
            this.props.onSwitchMode(mode);
        }
    }
    
    /**
     * 
     */
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <View style={styles.footer}>
                <View style={styles.footerBody}>
                    <View style={styles.footerBodyL}>
                        <Text>{this.state.count} item(s) left</Text>
                    </View>
                    <View style={styles.footerBodyR}>
                        <TouchableOpacity
                            style={[styles.footerSwitchMode, (this.state.mode === 1) ? styles.footerSwitchModeActive : undefined]}
                            onPress={() => this.handleSwitchMode(1)}
                        >
                            <Text>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.footerSwitchMode, (this.state.mode === 2) ? styles.footerSwitchModeActive : undefined]}
                            onPress={() => this.handleSwitchMode(2)}
                        >
                            <Text>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.footerSwitchMode, (this.state.mode === 3) ? styles.footerSwitchModeActive : undefined]}
                            onPress={() => this.handleSwitchMode(3)}
                        >
                            <Text>Completed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerLine} />
                <View style={[styles.footerLine, styles.footerL2]} />
                <View style={[styles.footerLine, styles.footerL3]} />
            </View>
        );
    }
}