import { combineReducers } from 'redux';
// Global Reducers
import authReducer from "./modules/authReducer";

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;
