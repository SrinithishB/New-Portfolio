import {configureStore} from "@reduxjs/toolkit"
import ThemeSlice from "./ThemeSlice"
import ProjectsSlice from "./ProjectsSlice"
export const store=configureStore({
    reducer:{
        theme:ThemeSlice,
        project:ProjectsSlice,
    }
})