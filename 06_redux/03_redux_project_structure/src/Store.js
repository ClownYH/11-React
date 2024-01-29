import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./modules";

const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(ReduxThunk))
// );

export default store;
