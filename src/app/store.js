import { configureStore } from "@reduxjs/toolkit";
import quizPlaySlice from "../features/quizPlaySlice";
import loginSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    quizPlay: quizPlaySlice,
    login: loginSlice,
  },
});
