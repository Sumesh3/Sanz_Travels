import { configureStore } from "@reduxjs/toolkit";
import BusidReducer from "../Slice/BusidSlice";

export const store = configureStore({
    reducer:{
        Busid:BusidReducer
    }
})