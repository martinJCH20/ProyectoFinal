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
import {connect} from 'react-redux';
import Actions from '../actions/PatientAction';

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
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPatient: '',
    };
  }
  componentDidMount() {
    this.props.getRegisterPatients();
    const result = this.props.data;
    this.setState({
      detailPatient: result.patient,
    });
  }
  goToRegisterPatient = () => {
    this.props.navigation.navigate('RegisterPatient');
  };
  goToDiagnostic = () => {
    if (this.state.detailPatient === '') {
      console.warn('Debe registrar paciente');
    } else {
      this.props.navigation.navigate('Diagnostic');
    }
  };
  render() {
    const {detailPatient} = this.state;
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
            <TouchableOpacity
              onPress={this.goToDiagnostic}
              style={styles.containerDiagnostic}>
              <Text style={styles.titleItems}>Diagnóstico</Text>
            </TouchableOpacity>
            <View style={styles.containerDiet}>
              <Text style={styles.titleItems}>Dieta</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.patientReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRegisterPatients: () => dispatch(Actions.getPatients()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
