import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  token: "",
  phoneNumber: "70838043",
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
