import {createSlice} from '@reduxjs/toolkit'
import MockImage from "../img/mockImage.png";

export const TOKEN_TIME_OUT = 600*1000;

interface AuthState {
    authenticated: boolean;
    accessToken: string;
    expireTime: number;
    username: string;
    profileImage: string;
    userIntroduce: string;
    likedPosts: number[];
}

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    // original code
    // authenticated : false,
    // accessToken : null,
    // expireTime: null as number | null,
    // username: null,
    // profileImage : null

    // mock data
    authenticated: true,
    accessToken: "mock-token",
    expireTime: new Date().getTime() + TOKEN_TIME_OUT,
    username: "홍길동",
    profileImage: MockImage,
    userIntroduce: "안녕하세요! 반려동물을 사랑하는 사람입니다.",
    likedPosts: [] as number[],
  } as AuthState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
      state.username = action.payload.username;
      state.profileImage = action.payload.profileImage;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = "";
      state.expireTime = 0;
      state.username = "";
      state.profileImage = "";
      state.userIntroduce = "";
    },
    UPDATE_INTRODUCE: (state, action) => {
      state.userIntroduce = action.payload;
    },
    TOGGLE_LIKE: (state, action) => {
      const postId = action.payload;
      const index = state.likedPosts.indexOf(postId);
      if (index === -1) {
        state.likedPosts.push(postId);
      } else {
        state.likedPosts.splice(index, 1);
      }
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN, UPDATE_INTRODUCE, TOGGLE_LIKE } = tokenSlice.actions;
export default tokenSlice.reducer;