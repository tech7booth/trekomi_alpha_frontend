import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./slices/ui-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // theme, user, notifications slices will be added here as we build them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;