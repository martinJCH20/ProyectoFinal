import Actions from '../Resource/Actions';

const setUserSuccess = (data) => {
  return {
    type: Actions.SET_USER_SUCCESS,
    data,
  };
};
const getUserSuccess = (data) => {
  return {
    type: Actions.GET_USER_SUCCESS,
    data,
  };
};

const setUser = (data) => {
  return async (dispatch, getState) => {
    const user = await getState().userReducer.user;
    if (user.length >= 0) {
      const registerUser = [...user, data];
      dispatch(setUserSuccess(registerUser));
    }
  };
};

const getUser = () => {
  return async (dispatch, getState) => {
    const userData = await getState().userReducer.user;
    dispatch(getUserSuccess(userData));
  };
};

export default {
  setUser,
  getUser,
};
