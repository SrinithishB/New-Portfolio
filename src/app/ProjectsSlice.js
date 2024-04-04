import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const PROJECT_URL="https://65fd2a759fc4425c653145d2.mockapi.io/projects"
export const fetchProjects=createAsyncThunk('projects/fetchProjects',async()=>{
    const response=await axios.get(PROJECT_URL);
    return response.data
},)

const initialState={
    projects:[],
    status:'idle',
    error:null
}

const ProjectsSlice=createSlice({
    name:'projects',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchProjects.pending,(state,action)=>{
            state.status='loding'
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.status='succeeded'
            const loadedProject=action.payload.map(project=>{
                return project;
            })
            state.projects=state.projects.concat(loadedProject)
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.status='failed'
            state.error=action.error.message
            console.log(state.error);
        })
        
    }
})

export const selectAllProjects=(state)=>state.project.projects;
export const getProjectsStatus=(state)=>state.project.status;
export const getProjectsError=(state)=>state.project.error;
export default ProjectsSlice.reducer