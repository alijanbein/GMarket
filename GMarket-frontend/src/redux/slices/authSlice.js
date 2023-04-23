import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: true,
  token: "",
  phoneNumber: "",
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
    setPhoneNumberSlice : (state,action) => {
      state.phoneNumber = action.payload
    }
  },
});

export const { login, logout,setPhoneNumberSlice } = authSlice.actions;

export default authSlice.reducer;
