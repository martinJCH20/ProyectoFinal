import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import Api from '../Api';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageLogin: {
    width: '30%',
    height: '20%'
  },
  containerTitle: {
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
    alignSelf: 'center'
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 5,
    color: '#212121',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  textLogin: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  register: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  textRegister: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  }
});
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingInputUsuario: false,
      usuario: '',
      contrasena: '',
      disabled: true,
      disabledButton: false,
    };
  }
  onChangeText = (value, type) => {
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
  };
  focus = (value) => {
    if (value === 'usuario') {
      this.setState({
        typingInputUsuario: true,
      });
    }
  };
  sendLogin = () => {
    let validacion = '';
    if (this.state.usuario === '') {
      validacion += 'Debe ingresar usuario \n';
    }
    if (this.state.contrasena === '') {
      validacion += 'Debe ingresar contraseña \n';
    }
    if (validacion !== '') {
      console.warn(validacion);
    } else {
      const parameters = {
        usuario: this.state.usuario,
        contrasena: this.state.contrasena,
      };
      Api.UsuarioApi.postLogin(parameters)
        .then((result) => {
          if (result.errors) {
            //console.warn('Error', result.errors);
            console.warn('Usuario y/o contraseña no son válidos');
          } else {
            this.props.navigation.navigate('Dashboard');
            //console.warn('iniciando', result);
          }
        })
        .catch((err) => {
          console.warn('Error de servicio', err);
        });
    }
  };
  goToRegister = (item, index) => {
    this.props.navigation.navigate('Register');
  };
  render() {
    const {
      typingInputUsuario,
      usuario,
      contrasena,
      disabled,
      disabledButton,
    } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/fondo.jpg')}
          style={styles.imageBackground}>
          <StatusBar barStyle={'default'} />
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Bienvenido,</Text>
            <Text style={styles.title}>Inicie sesión para continuar</Text>
          </View>
          <Image
            source={require('../../assets/vegetales2.png')}
            style={styles.imageLogin}></Image>
          <View style={styles.containerForm}>
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
              //editable={disabled}
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
            <Button
              onPressButton={() => this.sendLogin()}
              styleButton={[styles.buttonContainer, styles.animation]}
              styleText={styles.textLogin}
              title="Iniciar sesión"
              disabled={disabledButton}
            />
            <TouchableOpacity
              onPress={this.goToRegister}
              style={styles.register}>
              <Text style={styles.textRegister}>Regitrarse ></Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
