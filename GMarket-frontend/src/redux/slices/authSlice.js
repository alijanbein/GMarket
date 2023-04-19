import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: true,
  token: "",
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
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
