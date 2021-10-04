import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "store/auth";
import generalReducer from "store/general";

const reducers = combineReducers({
    auth: authReducer,
    general: generalReducer,
});

export type RootStateReducer = ReturnType<typeof reducers>;
export default reducers;
