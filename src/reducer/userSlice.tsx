import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  username : "",
  password : "",
  isLoding : false,
  isLogin : false,
  token : null,
}

export const userSlice = createSlice({
  name : "user",
  initialState,
  reducers: {
    //login Success
    loginUser : (state, action) => {
      const {id, password} = action.payload;
      //name, id에 API 값 받아오기
      state.username = id;
      state.password = password;
      state.isLoding = true;
      state.isLogin = true;
      //state 변화 알림
      return state;
    },
    //login Fail
    clearUser : (state) => {
      //name, id null
      state.username = "";
      state.password = "";
      state.isLoding = false;
      state.isLogin = false;
      return state;
    },
    SET_TOKEN : (state, action) => {
      state.isLogin = true;
      state.isLoding = false;
      state.token = action.payload;
    },
    DELETE_TOKEN: (state) => {
      state.isLogin = false;
      state.isLoding = false;
      state.token = null;
    },
  },
});


export const {loginUser, clearUser, SET_TOKEN, DELETE_TOKEN} = userSlice.actions;

export default userSlice.reducer;