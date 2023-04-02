import { createSlice } from '@reduxjs/toolkit';
const initialAuthState = {
  isRegister: false,
  isLogin: false,
  isAdmin:false,
  loginvalue:0,
  setmobile:0
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    isRegister(state) {
      state.isRegister = true;
    },
    isnotRegister(state) {
        state.isRegister = false;
      },
    isLogin(state,action) { 
        state.loginvalue=action.payload 
        state.isLogin= true;
    },
    isAdmin(state) {
        state.isAdmin= true;
    },
    setmobile(state,action)
    {
      state.setmobile=action.payload 
    }
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
