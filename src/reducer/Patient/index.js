import Actions from '../../Resource/Actions';

const initialState = {
  patient: '',
  success: false,
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_PATIENTS:
      return {
        ...state,
        patient: action.data,
        success: true,
      };
    case Actions.GET_PATIENTS:
      return {
        ...state,
        patient: action.data,
        success: true,
      };
    default:
      return state;
  }
};

export default patientReducer;
