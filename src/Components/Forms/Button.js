import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: '#dddddd',
    opacity: 0.5,
    width: '100%',
    height: width * 0.12,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff'
  },
  buyButton: {
    backgroundColor: '#93278f',
    height: width * 0.12,
    width: '100%',
    // paddingVertical: width * 0.01,
    paddingHorizontal: width * 0.1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  textBuyButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
})

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      onPressButton,
      styleButton,
      styleText,
      title,
      disabled,
      ...attributes
    } = this.props;
    return (
      <TouchableOpacity
        {...attributes}
        onPress={onPressButton}
        delayPressIn={0}
        delayPressOut={0}
        style={[
          !disabled ? styleButton || styles.buyButton : styles.disabled,
          {justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'white', height: '16%', borderRadius:8},
        ]}
        disabled={disabled}>
        <View pointerEvents={disabled ? 'none' : 'auto'}>
          <Text style={!styleText ? styles.textBuyButton : styleText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
