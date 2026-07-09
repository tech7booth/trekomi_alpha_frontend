import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
}

const initialState: UiState = {
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebarCollapsed: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
    setMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileSidebarOpen = action.payload;
    },
  },
});

export const {
  toggleSidebarCollapsed,
  setSidebarCollapsed,
  toggleMobileSidebar,
  setMobileSidebarOpen,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;