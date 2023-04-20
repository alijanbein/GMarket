import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
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
    setPhoneNumber : (state,action) => {
      state.phoneNumber = action.payload.phoneNumber
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
