import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerTitle: {
    marginTop: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  containerPatient: {
    width: '70%',
    height: 80,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  containerDiagnostic: {
    width: '44%',
    height: 300,
    backgroundColor: '#FFB6C1',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  containerDiet: {
    width: '44%',
    height: 300,
    backgroundColor: '#66CDAA',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  titleItems: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
});
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToRegisterPatient = (item, index) => {
    this.props.navigation.navigate('RegisterPatient');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Bienvenid@</Text>
            <TouchableOpacity
              onPress={this.goToRegisterPatient}
              style={styles.containerPatient}>
              <Text style={styles.titleItems}>Registra tu paciente</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.containerDiagnostic}>
              <Text style={styles.titleItems}>Diagnóstico</Text>
            </View>
            <View style={styles.containerDiet}>
              <Text style={styles.titleItems}>Dieta</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
