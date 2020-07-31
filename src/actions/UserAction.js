import Actions from '../Resource/Actions';

const getUserSuccess = (data) => {
  return {
    type: Actions.GET_USER_SUCCESS,
    data,
  };
};

const getUser = () => {
  return async (dispatch, getState) => {
    const user = await getState().userReducer.patient;
    dispatch(getUserSuccess(user));
  };
};

export default {
  getUser,
};
