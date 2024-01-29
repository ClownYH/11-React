import { combineReducers } from "redux";
import userReducer from "./userModule";
import menuReducer from "./MenuModules";


const rootReducer = combineReducers({
    userReducer,
    menuReducer
});

export default rootReducer;