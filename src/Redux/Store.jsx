import {  configureStore } from '@reduxjs/toolkit';
import userslice from "./component/user/UserSlice";
import Empslice from './component/Employee/Empslice';

export default configureStore({
    reducer:{
        user:userslice,
        emp:Empslice
    }
})