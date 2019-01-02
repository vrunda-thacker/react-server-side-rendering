import { combineReducers } from 'redux';
import UsersReducer from './usersReducer';
import AuthReducer from './authReducer';
import AdminsReducer from './adminsReducer';


export default combineReducers({
    users: UsersReducer,
    auth: AuthReducer,
    admins: AdminsReducer
});