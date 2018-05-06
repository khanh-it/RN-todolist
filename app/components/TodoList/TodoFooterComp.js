import React, { PureComponent } from 'react';
//
import {
    Footer,
    FooterTab,
    Text,
    Button,
    Icon,
    Badge
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
        this.state = {}
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
        let { counts, filter } = this.props;
        return (
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button
                        badge
                        vertical
                        active={(filter === 1)}
                        onPress={() => this.handleSwitchMode(1)}
                    >
                        <Badge><Text>{counts[1]}</Text></Badge>
                        <Icon name="apps" />
                        <Text>All</Text>
                    </Button>
                    <Button
                        badge
                        vertical
                        active={(filter === 2)}
                        onPress={() => this.handleSwitchMode(2)}
                    >
                        <Badge><Text>{counts[2]}</Text></Badge>
                        <Icon name="apps" />
                        <Text>Active</Text>
                    </Button>
                    <Button
                        badge
                        vertical
                        active={(filter === 3)}
                        onPress={() => this.handleSwitchMode(3)}
                    >
                        <Badge><Text>{counts[3]}</Text></Badge>
                        <Icon name="apps" />
                        <Text>Completed</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}