import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
//
import {
    View, Header, Title, Left, Icon, Right, Button, Body, Text, Item, Input, CheckBox
} from "native-base";

//
import styles from './styles';

/**
 * @class TodoFooterComp
 */
class TodoHeaderComp extends PureComponent {
    constructor(props) {
        super(props)
        // init state
        this.state = {
            searching: false
        }
    }

    /**
     * 
     * 
     * @memberof TodoHeaderComp
     */
    _inputs = {}
    
    /**
     * 
     */
    render() {
        let { navigation } = this.props;
        return (
            <View>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{global.Lang._('todos')}</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.setState((state) => ({ searching: !state.searching }))}
                        >
                            {this.state.searching ? <Icon name="close-circle" /> : <Icon name="search" />}
                        </Button>
                    </Right>
                </Header>
                {this.state.searching && (
                    <Header searchBar rounded >
                        <Item>
                            <Icon name="search" />
                            <Input
                                placeholder="Search"
                                blurOnSubmit={true}
                                maxLength={255}
                                onChangeText={text => {
                                    return this.props.onChangeTextSearch(text, this._refInputSearch);
                                }}
                                ref={(nbRef) => { this._refInputSearch = nbRef; }}
                            />
                            <Button
                                transparent
                                style={[styles.btnSearchBar]}
                                onPress={() => { this._refInputSearch._root.clear(); }}
                            >
                                <Icon name="backspace" />
                            </Button>
                        </Item>
                    </Header>
                )}
                <Header searchBar rounded>
                    <Item style={[styles.form]}>
                        {/* <View style={{ width: 35 }}>
                            <CheckBox
                                checked={false}
                            />
                        </View> */ }
                        <Input
                            blurOnSubmit={true}
                            maxLength={255}
                            placeholder={global.Lang._('What needs to be done?')}
                            onChangeText={(text => { this._inputs.todoText = text; })}
                            ref={(nbRef) => { this._refInputTodo = nbRef; }}
                            onSubmitEditing={evt => {
                                return this.props.onSubmitInputTodo(this._inputs.todoText, this._refInputTodo);
                            }}
                        />
                        <Button
                            transparent
                            style={[styles.btnSearchBar]}
                            onPress={() => { this._refInputTodo._root.clear(); }}
                        >
                            <Icon name="backspace" />
                        </Button>
                    </Item>
                </Header>
            </View>
        );
    }
}
export default withNavigation(TodoHeaderComp);
