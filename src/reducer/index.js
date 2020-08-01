import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import patientReducer from './Patient';
import userReducer from './User';

export default function getRootReducer() {
  return combineReducers({
    patientReducer,
    userReducer,
    network,
  });
}