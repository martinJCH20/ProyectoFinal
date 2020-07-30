const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatPhone = /^\d{9}$/;
const cvv = 3;
const minCharacterCard = 15;
const minDNI = 8;
// const expireDate = /^\d(\/\d+)*$/;
const expireDate = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/;
const numbers = /^\d+$/;
const name = /^[a-zA-ZÀ-ú0-9]+( [a-zA-ZÀ-ú0-9]+)*$/;
const formatPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;

const Validator = (type, value) => {
  switch (type) {
    case 'email':
      if (formatEmail.test(value)) {
        return {error: ''};
      }
      return {
        error: 'Ingresa un formato válido. ej: usuario@dominio.com.',
        value,
      };
    case 'password':
      if (formatPassword.test(value)) {
        return {error: ''};
      }
      return {
        error:
          'Mínimo 8 caracteres, debe incluir como minimo caracteres especiales, numeros y una letra en mayuscula.',
        value,
      };
    case 'phoneNumber':
      if (formatPhone.test(value)) {
        return {error: ''};
      }
      return {
        error: 'Ingresa un número teléfonico valido.',
        value,
      };
    case 'cardNumber':
      if (value.length >= minCharacterCard) {
        return {error: ''};
      }
      return {
        error: 'Ingresa un número de tarjeta válida',
        value,
      };
    case 'name':
      if (name.test(value)) {
        return {error: ''};
      }
      return {
        error: 'formato incorrecto, ingrese números y letras',
        value,
      };
    case 'expireDate':
      if (expireDate.test(value)) {
        return {error: ''};
      }
      return {
        error: 'formato incorrecto',
        value,
      };
    case 'number':
      if (numbers.test(value)) {
        return {error: ''};
      }
      return {
        error: 'formato incorrecto',
        value,
      };
    case 'cvv':
      if (value.length === cvv && numbers.test(value)) {
        return {error: ''};
      }
      return {
        error: 'ccv incorrecto',
        value,
      };
    case 'dni':
      if (value.length == minDNI) {
        return {error: ''};
      }
      return {
        error: 'Ingresa un número de DNI correcto',
        value,
      };
    default:
      return {
        error: '',
      };
  }
}

export default Validator;
