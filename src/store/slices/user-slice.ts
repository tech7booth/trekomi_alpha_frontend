import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CurrentUser {
  id: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
}

interface UserState {
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    updateCurrentUser: (state, action: PayloadAction<Partial<CurrentUser>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCurrentUser, updateCurrentUser, clearCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;