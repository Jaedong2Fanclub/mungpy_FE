import {createSlice} from '@reduxjs/toolkit'

export const TOKEN_TIME_OUT = 600*1000;

export const tokenSlice = createSlice ({
  name : 'authToken',
  initialState:{
    authenticated : false,
    accessToken : null,
    expireTime: null as number | null,
    username: null,
    profileImage : null
  },
  reducers:{
    SET_TOKEN : (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
      state.username = action.payload.username;
      state.profileImage = action.payload.profileImage;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null
      state.username = null;
      state.profileImage = null;
    },
  }
})

export const { SET_TOKEN, DELETE_TOKEN} = tokenSlice.actions;
export default tokenSlice.reducer;