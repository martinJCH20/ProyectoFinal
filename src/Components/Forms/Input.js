import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Validator from '../../Resource/Functions/Validator';
import Label from './Label';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  helperTextStyle: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
  },
})

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      value: '',
      defaultValue: '',
      validate: false,
    };
  }

  ofRef = (ref) => {
    this.input = ref;
    this.props.textInputRef && this.props.textInputRef(ref);
  };
  blurInput = () => {
    this.props.onBlur && this.props.onBlur();
  };
  focusInput = () => {
    this.props.onFocusInput && this.props.onFocusInput();
  };
  onChangeInput = (value) => {
    const {type} = this.props;
    if (type) {
      if (value.trim() !== '') {
        if (Validator(type, value).error !== '') {
          this.state.value = value;
          this.state.error = Validator(type, value).error;
          this.state.validate = false;
        } else {
          this.state.value = value;
          (this.state.error = ''), (this.state.validate = true);
        }
      } else {
        this.state.value = value;
        this.state.error = '';
        this.state.validate = false;
      }
    }
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    const {
      editable,
      children,
      value,
      onChange,
      TextInputStyle,
      onFocusInput,
      maxLength,
      placeholder,
      placeholderTextColor,
      ...props
    } = this.props;
    return (
      <View
        pointerEvents={editable ? 'none' : 'auto'}
        styles={{opacity: editable ? 0.5 : 1}}>
        {/* <Label {...this.props}> */}
        <TextInput
          {...props}
          ref={this.ofRef}
          value={this.state.value}
          onChangeText={this.onChangeInput}
          onBlur={this.blurInput}
          editable={!editable}
          onFocus={this.focusInput}
          style={[TextInputStyle]}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
        {/* </Label> */}
        {this.state.error !== '' ? (
          <View style={{width: '100%', backgroundColor: 'white'}}>
            <Text style={styles.helperTextStyle}>{this.state.error}</Text>
          </View>
        ) : null}
      </View>
    )
  }
}
