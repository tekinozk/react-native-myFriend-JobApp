import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
name:"job",
initialState:{
    selectedJob:"",
    favouriteJobs:[],
    user:null,
},
reducers:{
    changeJob:(state,action) => {
        state.selectedJob = action.payload
    },
    addFavourite:(state,action)=> {
        state.favouriteJobs.push(action.payload)
    },
    removeFavourite:(state,action) => {
        state.favouriteJobs = state.favouriteJobs.filter(item => {
            return item.id !== action.payload
        })

    },

    setUser:(state,action) =>{
        const {user} = action.payload
        AsyncStorage.setItem("@User",JSON.stringify(user))
        return {...state,user}
    }
    
}

})
 
export const {changeJob,addFavourite,removeFavourite,setUser} =jobSlice.actions
export default jobSlice.reducer