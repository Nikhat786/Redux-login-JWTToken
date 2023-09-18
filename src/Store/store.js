
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Reducer/userSlice';
import loginSlice from '../Reducer/loginSlice';

const store =configureStore({
    reducer:{
     users : userSlice,
     login:loginSlice,
     
    }
  })
  export default store