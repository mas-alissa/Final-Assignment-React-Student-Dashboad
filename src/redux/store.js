import { configureStore } from "@reduxjs/toolkit";
import StudentsChart from "./StudentsChart";
export const store = configureStore({
  reducer: {
    students: StudentsChart,
  },
});
