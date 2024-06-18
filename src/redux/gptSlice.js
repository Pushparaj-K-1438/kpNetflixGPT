import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isgptPage:false
    },

    reducers: {
        togglePage: (state) => {
            state.isgptPage = !state.isgptPage;
        }
    }
});
export const {togglePage} = gptSlice.actions;
export default gptSlice.reducer;