import React, { PureComponent } from 'react';
import {
    ImageBackground,
    TextInput
} from 'react-native';
//
import styles from './styles';

/**
 * 
 */
export default class TodoInput extends PureComponent {
    constructor(props) {
        super(props)

        // init state
        this.state = {}
    }
    /**
     * 
     */
    render() {
        const props = this.props;
        // +++
        const ImgBgProps = Object.assign({
            style: styles.inputWrapper,
            source: require('./TextInputArrow.png'),
            resizeMode: 'center',
            imageStyle: styles.inputIcon
        }, props.ImgBgProps);
        delete props['ImgBgProps'];
        // +++ 
        const TextInputProps = Object.assign({
            style: styles.input,
            underlineColorAndroid: 'transparent',
            // autoFocus: false,
            // placeholder: props.placeholder,
            // defaultValue: props.defaultValue,
            // editable: true,
            maxLength: 255,
            // contextMenuHidden: true
        }, props);

        return (
            <ImageBackground {...ImgBgProps}>
                <TextInput
                    {...TextInputProps}
                    ref={TextInputProps.refTextInput}
                />
            </ImageBackground>
        );
    }
}