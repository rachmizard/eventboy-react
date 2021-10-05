import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "services/auth.service";
import { IAuthState } from "./interface";

const initialState = {
    token: null,
    isLoggedIn: false,
    user: {},
} as IAuthState;

export const signInAsyncThunk = createAsyncThunk(
    "auth/signIn",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await signIn(payload);
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

export const signUpAsyncThunk = createAsyncThunk(
    "auth/signUp",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await signUp(payload);
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedOut: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInAsyncThunk.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = !!action.payload.token;
            state.user = action.payload.user;
        });
        builder.addCase(signUpAsyncThunk.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = !!action.payload.token;
            state.user = action.payload.user;
        });
    },
});

export const { setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
