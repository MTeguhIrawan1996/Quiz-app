import { configureStore } from "@reduxjs/toolkit";
import quizPlaySlice from "../features/quizPlaySlice";

export const store = configureStore({
  reducer: {
    quizPlay: quizPlaySlice,
  },
});
