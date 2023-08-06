import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { gitApi } from "./appApi";
import commonReducer from "./commonReducer/slice";

const globalErrorHandlerMiddleware = () => (next) => async (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401 || action.payload.status === 403) {
      console.log("Apis are Unauthorized");
      window.location.reload();
    }
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    commonSlice: commonReducer,
    [gitApi.reducerPath]: gitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(gitApi.middleware)
      .concat(globalErrorHandlerMiddleware),
});

export { store };
