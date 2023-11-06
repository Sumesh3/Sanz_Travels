import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UpdateBusid:""
}

export const BusidSlice = createSlice({
    name : "Busid",
    initialState,
    reducers:{
        Busid:(state,action)=>{
            state.UpdateBusid = action.payload
            
        }
    }
})

export const {Busid} = BusidSlice.actions
export default BusidSlice.reducer