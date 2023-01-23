import { createSlice } from "@reduxjs/toolkit";

const quizPlay = createSlice({
  name: "quizPlay",
  initialState: {
    dateStart: localStorage.getItem("dateStart") || null,
    score: parseInt(localStorage.getItem("score")) || 0,
    currentState: "NOT_STARTED",
    quiz: JSON.parse(localStorage.getItem("question")) || [],
  },
  reducers: {
    startQuiz: (state) => {
      state.currentState = "STARTED_QUIZ";
    },
    endQuiz: (state) => {
      state.currentState = "END_QUIZ";
      state.dateStart = null;
    },
    setQuiz: (state) => {
      state.quiz = JSON.parse(localStorage.getItem("question"));
      state.dateStart = localStorage.getItem("dateStart");
    },
    endScore: (state) => {
      state.score = 0;
      state.quiz = [];
    },
    changeScore: (state, action) => {
      state.score = state.score + action.payload.score;
      localStorage.setItem("score", state.score);
    },
    // decreaseScore: (state, action) => {
    //   if (state.score - action.payload.score >= 0) {
    //     state.score = state.score - action.payload.score;
    //   }
    // },
  },
});

export const { changeScore, startQuiz, endQuiz, setQuiz, endScore } =
  quizPlay.actions;
export default quizPlay.reducer;
