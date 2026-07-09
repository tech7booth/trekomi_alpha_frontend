import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { uiReducer } from "./slices/ui-slice";
import { api } from "./services/api";

import { newsletterApi } from "@/features/newsletter/newsletterApi";
import { coursesApi } from "@/features/courses/coursesApi";
import { userReducer } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user:userReducer,
    [api.reducerPath]: api.reducer,
    [newsletterApi.reducerPath]: newsletterApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, newsletterApi.middleware, coursesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;