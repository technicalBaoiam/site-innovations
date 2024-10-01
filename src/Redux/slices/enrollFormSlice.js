import { createSlice } from "@reduxjs/toolkit";

const enrollFormReducer = createSlice({
    name: "isFormOpen",
    initialState: false,
    reducers: {
        toggleEnrollForm(state) {
            return !state;
        },
    }
})
export const { toggleEnrollForm } = enrollFormReducer.actions;
export default enrollFormReducer.reducer;