import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../actions/PatientAction';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import {Dropdown} from 'react-native-material-dropdown';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C',
  },
  containerTitle: {
    marginTop: '5%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  titleInput: {
    color: 'white',
    fontWeight: 'bold',
  },
  containerForm: {
    width: '90%',
    alignSelf: 'center',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 5,
    color: '#212121',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  register: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  textLink: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  diagnostic: {
    alignItems: 'flex-end',
    marginTop: 10,
  }
});
class RegisterPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: '',
      apellidos: '',
      edad: '',
      peso: '',
      talla: '',
      sexo: '',
      actividad: '',
      detailPatient: '',
      returnS: '<',
      disabledButton: false,
    };
  }
  async componentDidMount() {
    await this.props.getRegisterPatients();
    const result = this.props.data;
    this.setState({
      detailPatient: result.patient,
    });
  }
  onChangeText = (value, type) => {
    if (type === 'nombres') {
      this.setState({
        nombres: this.inputNombres.state.value,
      });
    }
    if (type === 'apellidos') {
      this.setState({
        apellidos: this.inputApellidos.state.value,
      });
    }
    if (type === 'edad') {
      this.setState({
        edad: this.inputEdad.state.value,
      });
    }
    if (type === 'peso') {
      this.setState({
        peso: this.inputPeso.state.value,
      });
    }
    if (type === 'talla') {
      this.setState({
        talla: this.inputTalla.state.value,
      });
    }
    if (type === 'sexo') {
      this.setState({
        sexo: value,
      });
    }
    if (type === 'actividad') {
      this.setState({
        actividad: value,
      });
    }
  };
  focus = (value) => {
    if (value === 'nombres') {
      this.setState({
        typingInputNombres: true,
      });
    }
    if (value === 'apellidos') {
      this.setState({
        typingInputApellidos: true,
      });
    }
  };
  sendRegister = async () => {
    let validacion = '';
    if (this.state.nombres === '') {
      validacion += 'Debe ingresar nombres \n';
    }
    if (this.state.apellidos === '') {
      validacion += 'Debe ingresar apellidos \n';
    }
    if (this.state.edad === '') {
      validacion += 'Debe ingresar edad \n';
    }
    if (this.state.peso === '') {
      validacion += 'Debe ingresar peso \n';
    }
    if (this.state.talla === '') {
      validacion += 'Debe ingresar talla \n';
    }
    if (this.state.sexo === '') {
      validacion += 'Debe seleccionar sexo \n';
    }
    if (this.state.actividad === '') {
      validacion += 'Debe seleccionar actividad \n';
    }
    if (validacion !== '') {
      console.warn(validacion);
    } else {
      const patient = {
        nombres: this.state.nombres,
        apellidos: this.state.apellidos,
        edad: this.state.edad,
        peso: this.state.peso,
        talla: this.state.talla,
        sexo: this.state.sexo,
        actividad: this.state.actividad,
      };
      await this.props.setRegisterPatients(patient);
      this.setState({detailPatient: patient})
      const pt = this.props.data;
      console.warn('Registrado', pt);
    }
  };
  goReturn = (item, index) => {
    this.props.navigation.navigate('Dashboard');
  };
  goDiagnostic = () => {
    //console.warn(this.state.detailPatient);
    if (this.state.detailPatient === '') {
      console.warn('Debe registrar paciente');
    } else {
      this.props.navigation.navigate('Diagnostic');
    }
  };
  render() {
    const {
      nombres,
      apellidos,
      edad,
      peso,
      talla,
      sexo,
      actividad,
      returnS,
      detailPatient,
      disabledButton,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle={'default'} />
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Registrar paciente</Text>
          </View>
          <View style={styles.containerForm}>
            <Input
              label="Nombres"
              labelStyle={styles.titleInput}
              value={nombres}
              ref={(ref) => (this.inputNombres = ref)}
              type="name"
              placeholder="Nombres"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
              onFocusInput={() => this.focus('nombres')}
              onChange={(value) => this.onChangeText(value, 'nombres')}
              TextInputStyle={styles.textInput}
              maxLength={40}
            />
            <Input
              label="Apellidos"
              labelStyle={styles.titleInput}
              value={apellidos}
              ref={(ref) => (this.inputApellidos = ref)}
              type="name"
              placeholder="Apellidos"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
              onFocusInput={() => this.focus('apellidos')}
              onChange={(value) => this.onChangeText(value, 'apellidos')}
              TextInputStyle={styles.textInput}
              maxLength={40}
            />
            <Input
              label="Edad"
              labelStyle={styles.titleInput}
              value={edad}
              ref={(ref) => (this.inputEdad = ref)}
              type="number"
              placeholder="Edad"
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric"
              onFocusInput={() => this.focus('edad')}
              onChange={(value) => this.onChangeText(value, 'edad')}
              TextInputStyle={styles.textInput}
              maxLength={2}
            />
            <Input
              label="Peso"
              labelStyle={styles.titleInput}
              value={peso}
              ref={(ref) => (this.inputPeso = ref)}
              type="decimalTwo"
              placeholder="Peso (kg.)"
              placeholderTextColor="#A9A9A9"
              keyboardType="decimal-pad"
              onFocusInput={() => this.focus('peso')}
              onChange={(value) => this.onChangeText(value, 'peso')}
              TextInputStyle={styles.textInput}
              maxLength={6}
            />
            <Input
              label="Talla"
              labelStyle={styles.titleInput}
              value={talla}
              ref={(ref) => (this.inputTalla = ref)}
              type="decimalTwo"
              placeholder="Talla (cm.)"
              placeholderTextColor="#A9A9A9"
              keyboardType="decimal-pad"
              onFocusInput={() => this.focus('talla')}
              onChange={(value) => this.onChangeText(value, 'talla')}
              TextInputStyle={styles.textInput}
              maxLength={6}
            />
            <Dropdown
              label={'Sexo'}
              value={sexo}
              containerStyle={{marginTop: 10}}
              inputContainerStyle={{
                backgroundColor: 'white',
                borderBottomWidth: 0,
                borderRadius: 8,
                paddingLeft: 2,
              }}
              labelTextStyle={{marginTop: -10, paddingLeft: 2}}
              data={[
                {
                  value: 'F',
                  label: 'Femenino',
                },
                {
                  value: 'M',
                  label: 'Masculino',
                },
              ]}
              onChangeText={(value) => this.onChangeText(value, 'sexo')}
            />
            <Dropdown
              label={'Actividad'}
              value={actividad}
              containerStyle={{marginTop: 10}}
              inputContainerStyle={{
                backgroundColor: 'white',
                borderBottomWidth: 0,
                borderRadius: 8,
                paddingLeft: 2,
              }}
              labelTextStyle={{marginTop: -10, paddingLeft: 2}}
              data={[
                {
                  value: 'a1',
                  label: 'Reposo',
                },
                {
                  value: 'a2',
                  label: 'Muy ligera',
                },
                {
                  value: 'a3',
                  label: 'Ligera',
                },
                {
                  value: 'a4',
                  label: 'Moderada',
                },
                {
                  value: 'a5',
                  label: 'Pesada',
                },
              ]}
              onChangeText={(value) => this.onChangeText(value, 'actividad')}
            />
            <Button
              onPressButton={() => this.sendRegister()}
              styleText={styles.textButton}
              title="Registrar"
              disabled={disabledButton}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={this.goReturn}
                  style={styles.register}>
                  <Text style={styles.textLink}>{returnS} Retornar</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={this.goDiagnostic}
                  style={styles.diagnostic}>
                  <Text style={styles.textLink}>Diagnóstico ></Text>
                </TouchableOpacity>
              </View>
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
    setRegisterPatients: (data) => dispatch(Actions.setPatients(data)),
    getRegisterPatients: () => dispatch(Actions.getPatients()),    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPatient);
