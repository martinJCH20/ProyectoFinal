import Actions from '../../Resource/Actions';

const initialState = {
  user: '',
  success: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        success: true,
      };
    default:
      return state;
  }
};

export default userReducer;
