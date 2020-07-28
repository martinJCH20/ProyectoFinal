import FetchApi from './FetchApi';
//import LocalStorage from '../Resource/Functions/local'BORRAR

const UsuarioApi = {
  createUsuario: async (parameters) => {
    const params = new URLSearchParams({
      gradoAcademico: parameters.gradoAcademico,
      nombres: parameters.nombres,
      apellidos: parameters.apellidos,
      email: parameters.email,
      celular: parameters.celular,
      telefono: parameters.telefono,
      dni: parameters.dni,
      sexo: parameters.sexo,
      usuario: parameters.usuario,
      contrasena: parameters.contrasena,
    }).toString();
    console.warn(params);
    const data = await FetchApi.post('/api/UsuarioApi?' + params);
    return data;
  },
};

export default UsuarioApi;
