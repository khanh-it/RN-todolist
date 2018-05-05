import React, { PureComponent } from 'react';
//
import {
    Footer,
    FooterTab,
    Text,
    Button,
    Icon
} from "native-base";

//
import styles from './styles';

/**
 * @class TodoFooterComp
 */
export default class TodoFooterComp extends PureComponent {
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
        return (
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button>
                        <Text>{this.state.count} item(s) left</Text>
                    </Button>
                    <Button
                        active={(this.state.mode === 1)}
                        onPress={() => this.handleSwitchMode(1)}
                    >
                        <Text>All</Text>
                    </Button>
                    <Button
                        active={(this.state.mode === 2)}
                        onPress={() => this.handleSwitchMode(2)}
                    >
                        <Text>Active</Text>
                    </Button>
                    <Button
                        active={(this.state.mode === 3)}
                        onPress={() => this.handleSwitchMode(3)}
                    >
                        <Text>Completed</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}