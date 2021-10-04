import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGeneral } from "./interface";

const initialState = {
    darkMode: "light",
} as IGeneral;

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.darkMode = action.payload;
        },
    },
});

export const { setDarkMode } = generalSlice.actions;
export default generalSlice.reducer;
