import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.container}>
          <StatusBar barStyle={'default'} />
          <Text>Register</Text>
        </View>
      </SafeAreaView>
    );
  }
}