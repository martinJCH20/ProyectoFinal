import Actions from '../Resource/Actions';

const setPatientSuccess = (data) => {
  return {
    type: Actions.SET_PATIENTS,
    data,
  };
};
const getPatientSuccess = (data) => {
  return {
    type: Actions.GET_PATIENTS,
    data,
  };
};

const setPatients = (data) => {
  return async (dispatch, getState) => {
    const patients = await getState().patientReducer.patient;
    if (patients.length >= 0) {
      const registerPatients = [...patients, data];
      dispatch(setPatientSuccess(registerPatients));
    }
  };
};

const getPatients = () => {
  return async (dispatch, getState) => {
    const patients = await getState().patientReducer.patient;
    dispatch(getPatientSuccess(patients));
  };
};

export default {
  setPatients,
  getPatients,
};
