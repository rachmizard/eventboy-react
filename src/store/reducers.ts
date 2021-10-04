import { combineReducers } from "redux";
import authReducer from "store/auth";

const reducers = combineReducers({
    auth: authReducer,
});

export type RootStateReducer = ReturnType<typeof reducers>;
export default reducers;
