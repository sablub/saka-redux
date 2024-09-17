import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  password: string;
}
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedInUser: null,
    status: "",
  },
  reducers: {
    register: (
      state,
      action: { payload: User }
    ) => {
      state.users.push(action.payload as never);
      state.status = "registered";
    },
    login: (state, action) => {
      const user = state.users.find(
        (user: User) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.loggedInUser = user;
        state.status = "loggedIn";
      }
      else{
        state.status = 'loginFailed'
      }
    },
    logout: (state) => {
      state.status = "loggedOut";
    },
  },  
});


export const { login, logout, register } = userSlice.actions;

export const selectUser = (state: any) => state.user.loggedInUser;
export const selectUserStatus = (state: any) => {
  return state.user.status;
}
export const selectUsertById = (state: any, userId: number) =>
  state.user.find((user: any) => user.id === userId);

export default userSlice.reducer;
