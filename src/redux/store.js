import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSelector/projectSlice.js";

export default configureStore({
  reducer: {
    projectReducer,
  },
});
