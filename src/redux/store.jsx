import {configureStore} from "@reduxjs/toolkit"
import jobSlice from "./job/jobSlice";

export  const Store = configureStore({
    reducer:{
        job:jobSlice
    }
})

