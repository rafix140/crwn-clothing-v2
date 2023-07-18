import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { loggerMiddleware } from "./middleware/logger";
import { rootReducer } from "./root-reducer";

const middlewares = [
  process.env.NODE_ENV !== "production" && logger && loggerMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
