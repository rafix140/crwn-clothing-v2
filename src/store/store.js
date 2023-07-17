import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";

export const storeSlice = configureStore({
  reducer: rootReducer,
});
