import { createSlice } from "@reduxjs/toolkit";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const initialState={
    theme:darkThemeMq.matches?"dark":"light"
}

const ThemeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        lightMode:(state)=>{
            state.theme="light"
        },
        darkMode:(state)=>{
            state.theme="dark"
        }
    }
})

export const {lightMode,darkMode}=ThemeSlice.actions;
export const  selectTheme= (state) => state.theme.theme;

export default ThemeSlice.reducer