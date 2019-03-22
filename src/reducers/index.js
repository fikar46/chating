import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import profileForm from './profileForm';
import photoList from './photoList';
import profileUser from './profileUser';
export default combineReducers({
   auth: AuthReducer,
   profileForm,
   photoList,
   profileUser
});