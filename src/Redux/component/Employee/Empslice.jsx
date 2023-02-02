import { createSlice } from "@reduxjs/toolkit";

const Employee=createSlice({
    name:'emp',
    initialState:{empvalue:[]},
    reducers:{
         Addempdata(state,action){
            state.empvalue.push(action.payload)
            // console.log(state.empvalue);
         },
         DeletePost(state,action){
            console.log(action);
           state.empvalue=state.empvalue.filter((emp)=>emp.id !== action.payload.id)
         },
         Editemployoo(state,action){
            console.log(action);
         }
        
    }
})
export const {Addempdata,DeletePost,Editemployoo}=Employee.actions
export default Employee.reducer