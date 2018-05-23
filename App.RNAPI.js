import React, {Component} from 'react';
import {StyleSheet, Modal, Text, TouchableHighlight, View, Button} from 'react-native';


class ModalExample extends Component {

  constructor(props) {
    super(props);
    //
    this.state = {
      modalVisible: false
    };
    // 
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  componentDidMount() {
    this.setModalVisible(false);
  }

  setModalVisible(modalVisible) {
    modalVisible = (undefined === modalVisible) ? !this.state.modalVisible : modalVisible;
    this.setState({ modalVisible });
  }

  render() {
    return (
      <Modal
        style={styles.modal}
        animationType="fade"
        hardwareAccelerated={true}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={styles.modalOverlay} />
        <View style={styles.modalContent}>
          <View style={styles.modalContentBox}>
            <Text>My Modal!</Text>
            <Button
              title='Hide Modal'
              onPress={() => { this.setModalVisible(); }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.document}>
        <View style={styles.body}>
          <Button
            title='Show Modal'
            onPress={() => {
              this._refModal.setModalVisible();
            }}
          />
        </View>
        <ModalExample key={new Date().getTime()} ref={ref => { this._refModal = ref; }} />
      </View>
    );
  }
}

//
let styles = StyleSheet.create({
  document: {
    flex: 1,
    // borderWidth: 1, borderColor: 'green'
  },
  body: {
    flex: 1,
    // borderWidth: 1, borderColor: 'red'
  },
  modal: {
    // flex: 1
  },
  modalOverlay: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: 'grey',
    // borderWidth: 1, borderColor: 'yellow'
  },
  modalContent: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1, borderColor: 'red'
  },
  modalContentBox: {
    backgroundColor: 'white',
    width: '96%',
    // minHeight: 100,
    padding: 10,
    borderRadius: 10
  }
});