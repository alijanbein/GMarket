import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedin: false,
  token: "",
  phoneNumber: "",
  userData: {},
  token:""
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    logout: (state) => {
      AsyncStorage.clear().catch(err => {console.log(err);})
      state.isLoggedin = false;
    },
    setPhoneNumberSlice: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUserData:(state,action) =>{
      state.userData = action.payload
    },
    setToken :(state,action) =>{
      state.token = action.payload;
    }
  },
});

export const { login, logout, setPhoneNumberSlice,setUserData,setToken } = authSlice.actions;

export default authSlice.reducer;
