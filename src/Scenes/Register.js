import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import Input from '../Components/Forms/Input';
//import Button from '../Components/Forms/Button';
import {Dropdown} from 'react-native-material-dropdown';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C'
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
  Label: {
    color: '#A9A9A9',
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 14,
    backgroundColor: 'white'
  },
});
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingInputNombres: false,
      typingInputApellidos: false,
      typingInputEmail: false,
      typingInputCelular: false,
      typingInputTelefono: false,
      typingInputUsuario: false,
      nombres: '',
      apellidos: '',
      email: '',
      celular: '',
      telefono: '',
      dni: '',
      gradoAcademico: '',
      sexo: '',
      usuario: '',
      contrasena: '',
    }
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
    if (type === 'email') {
      this.setState({
        email: this.inputEmail.state.value,
      });
    }
    if (type === 'celular') {
      this.setState({
        celular: this.inputCelular.state.value,
      });
    }
    if (type === 'telefono') {
      this.setState({
        telefono: this.inputTelefono.state.value,
      });
    }
    if (type === 'dni') {
      this.setState({
        dni: this.inputDni.state.value,
      });
    }
    if (type === 'usuario') {
      this.setState({
        usuario: this.inputUsuario.state.value,
      });
    }
    if (type === 'contrasena') {
      this.setState({
        contrasena: this.inputContrasena.state.value,
      });
    }
    if (type === 'grado') {
      this.setState({
        gradoAcademico: value,
      });
    }
    if (type === 'sexo') {
      this.setState({
        sexo: value,
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
  render() {
    const {
      nombres,
      apellidos,
      email,
      celular,
      telefono,
      dni,
      usuario,
      contrasena,
      gradoAcademico,
      sexo,
    } = this.state;
    //console.warn('sexo', sexo);
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle={'default'} />
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Cree su cuenta</Text>
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
              label="Email"
              labelStyle={styles.titleInput}
              value={email}
              ref={(ref) => (this.inputEmail = ref)}
              type="email"
              placeholder="Email"
              placeholderTextColor="#A9A9A9"
              keyboardType="email-address"
              onFocusInput={() => this.focus('email')}
              onChange={(value) => this.onChangeText(value, 'email')}
              TextInputStyle={styles.textInput}
              maxLength={40}
            />
            <Input
              label="Celular"
              labelStyle={styles.titleInput}
              value={celular}
              ref={(ref) => (this.inputCelular = ref)}
              type="phoneNumber"
              placeholder="Celular"
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric"
              onFocusInput={() => this.focus('celular')}
              onChange={(value) => this.onChangeText(value, 'celular')}
              TextInputStyle={styles.textInput}
              maxLength={9}
            />
            <Input
              label="Teléfono"
              labelStyle={styles.titleInput}
              value={telefono}
              ref={(ref) => (this.inputTelefono = ref)}
              type="number"
              placeholder="Teléfono"
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric"
              onFocusInput={() => this.focus('telefono')}
              onChange={(value) => this.onChangeText(value, 'telefono')}
              TextInputStyle={styles.textInput}
              maxLength={10}
            />
            <Input
              label="DNI"
              labelStyle={styles.titleInput}
              value={dni}
              ref={(ref) => (this.inputDni = ref)}
              type="number"
              placeholder="DNI"
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric"
              onFocusInput={() => this.focus('dni')}
              onChange={(value) => this.onChangeText(value, 'dni')}
              TextInputStyle={styles.textInput}
              maxLength={8}
            />
            {/* <Text style={styles.Label}>Grado académico</Text> */}
            <Dropdown
              label={'Grado académico'}
              value={gradoAcademico}
              containerStyle={{ marginTop: 10}}
              inputContainerStyle={{ backgroundColor:'white', borderRadius:8, paddingLeft: 2}}
              labelTextStyle={{marginTop:-10, paddingLeft: 2}}
              data={[
                {
                  value: 'Banana2',
                  label: 'Banana 2',
                },
                {
                  value: 'Mango',
                  label: 'Mango 1',
                },
                {
                  value: 'Pear',
                  label: 'Pear 1',
                },
              ]}
              onChangeText={(value) => this.onChangeText(value, 'grado')}
            />
            {/* <Text style={styles.Label}>Sexo</Text> */}
            <Dropdown
              label={'Sexo'}
              value={sexo}
              containerStyle={{ marginTop: 10}}
              inputContainerStyle={{backgroundColor:'white', borderBottomWidth:0, borderRadius:8, paddingLeft: 2}}
              labelTextStyle={{marginTop:-10, paddingLeft: 2}}
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
            <Input
              label="Usuario"
              labelStyle={styles.titleInput}
              value={usuario}
              ref={(ref) => (this.inputUsuario = ref)}
              type="name"
              placeholder="Usuario"
              placeholderTextColor="#A9A9A9"
              keyboardType="default"
              onFocusInput={() => this.focus('usuario')}
              onChange={(value) => this.onChangeText(value, 'usuario')}
              TextInputStyle={styles.textInput}
              maxLength={15}
            />
            <Input
              label="Contraseña"
              labelStyle={styles.titleInput}
              value={contrasena}
              ref={(ref) => (this.inputContrasena = ref)}
              type="password"
              placeholder="Contraseña"
              placeholderTextColor="#A9A9A9"
              secureTextEntry
              onFocusInput={() => this.focus('contrasena')}
              onChange={(value) => this.onChangeText(value, 'contrasena')}
              TextInputStyle={styles.textInput}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
