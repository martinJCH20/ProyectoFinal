import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import SuccessIcon from '../../../assets/Success.js';
import ErrorIcon from '../../../assets/Error.js';

const {height: viewPortHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewModal: {
    // flex: 0.35,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginHorizontal: 20,
    height: Platform.OS === 'ios' ? viewPortHeight * 0.3 : viewPortHeight * 0.4,
  },
  contentModal: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 16,
  },
  message: {
    textAlign: 'center',
    fontSize: 14,
  },
  icon: {
    alignSelf: 'center',
    height: 65,
    width: 65,
  },
});

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  onClose = () => {
    const {onClose} = this.props;
    this.setState({
      visible: false,
    });
    if (onClose) {
      onClose();
    }
  };
  render() {
    const {
      backdrop,
      title,
      message,
      children,
      icon,
      iconSuccess,
      iconError,
    } = this.props;
    const {visible} = this.state;
    return (
      <Modal
        isVisible={visible || this.props.visible}
        onBackdropPress={() => {
          if (!backdrop) {
            this.setState({
              visible: false,
            });
          } else {
            backdrop();
          }
        }}
        deviceHeight={viewPortHeight}>
        <View style={styles.viewModal}>
          <View style={styles.contentModal}>
            {icon && <Image source={icon} style={styles.icon} />}
            {iconError && (
              <View style={{alignSelf: 'center'}}>
                <ErrorIcon />
              </View>
            )}
            {iconSuccess && (
              <View style={{alignSelf: 'center'}}>
                <SuccessIcon />
              </View>
            )}
            {title && (
              <View>
                <Text style={styles.title}> {title}</Text>
              </View>
            )}
            {(message || children) && (
              <>
                <Text style={styles.message}>{message}</Text>
                {children}
              </>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}
