import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducers } from "./slices/DashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducers,
  },
});
