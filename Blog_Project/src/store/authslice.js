import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starus: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.starus = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.starus = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
