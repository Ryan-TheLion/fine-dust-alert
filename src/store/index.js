import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appStore from "./slices/appStoreSlice";

const rootReducer = combineReducers({
  appStore,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
