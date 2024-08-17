import { createSlice } from "@reduxjs/toolkit";

const themeslice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggleTheme: (state) => {
            return state === 'light' ? 'dark' : 'light'
        }
    }
});

export default themeslice;
export const themesliceAction = themeslice.actions;