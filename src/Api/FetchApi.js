import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.16.104:9095',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
const parseBody = async (res) => {
  //console.warn('res.status parseBody', res);
  if (res.status) {
    try {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else {
        return parseError(res, res.status);
      }
    } catch (e) {
      return parseError(res, res.status);
    }
  }
  return parseError(res, res.status);
}

const parseError = async (error, status) => {
  console.warn('error parseError', error, status);
  switch (status) {
    case undefined:
      return error
        .text()
        .then((result) => {
          console.warn(result);
          return {
            errors:
              'Probablemente tenemos inconvenientes con nuestro servicio, intentelo mas tarde',
            status: error.data.status,
          };
        })
        .catch((error) => {
          if (error.data.status === 1000) {
            return {
              errors: 'Error de red',
              status: error.data.status,
            };
          }
        });
    case 400:
      return {
        errors: error.data.message,
        status,
      };
    case 401:
      return {
        errors: error.data.message,
        status,
      };
    case 403:
      return {
        errors: error.data.message,
        status,
      };
    case 404:
      return {
        errors: error.data.message,
        status,
      };
    case 500:
      return {
        errors: 'Servicio no disponible',
        status,
      };
    case 503:
      return {
        errors: 'Intentelo mas tarde',
        status,
      };
    default:
      return {
        errors:
          'Probablemente tenemos inconvenientes con nuestro servicio, intentelo mas tarde',
        status,
      };
  }
}

const FetchApi = {
  get: async (url, config) => {
    return instance
      .get(url, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        console.warn('FetchApi get error', error.message);
        try {
          if (error.message) {
            return {
              errors: 'Error de red',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          console.warn('e', e);
          return parseError(e.response, e.response.status);
        }
      });
  },
  post: async (url, parameters, config) => {
    return instance
      .post(url, parameters, config)
      .then((result) => {
        return parseBody(result);
      })
      .catch((error) => {
        try {
          if (error.message) {
            return {
              errors: 'Error de red',
              status: 1000,
            };
          }
          return parseError(error.response, error.response.status);
        } catch (e) {
          return parseError(e.response, e.response.status);
        }
      });
  },
  put: async (url, parameters, config) => {},
  patch: async (url, parameters, config) => {},
}

export default FetchApi