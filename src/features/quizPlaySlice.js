import { createSlice } from "@reduxjs/toolkit";

const quizPlay = createSlice({
  name: "quizPlay",
  initialState: {
    dateStart: localStorage.getItem("dateStart") || null,
    score: parseInt(localStorage.getItem("score")) || 0,
    currentState: "NOT_STARTED",
    quiz: JSON.parse(localStorage.getItem("question")) || [],
    answersStatus: JSON.parse(localStorage.getItem("answersStatus")) || [],
    questionIndex: parseInt(localStorage.getItem("questionIndex")) || 0,
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
      state.answersStatus = [];
      state.questionIndex = 0;
    },
    changeScore: (state, action) => {
      state.score = state.score + action.payload.score;
      localStorage.setItem("score", state.score);
    },
    changeQuestionIndex: (state, action) => {
      state.questionIndex = state.questionIndex + action.payload.questionIndex;
      localStorage.setItem("questionIndex", state.questionIndex);
    },
    changeAnswersStatus: (state, action) => {
      state.answersStatus = action.payload.answersStatus;
      localStorage.setItem(
        "answersStatus",
        JSON.stringify(state.answersStatus)
      );
    },
    // decreaseScore: (state, action) => {
    //   if (state.score - action.payload.score >= 0) {
    //     state.score = state.score - action.payload.score;
    //   }
    // },
  },
});

export const {
  changeScore,
  startQuiz,
  endQuiz,
  setQuiz,
  endScore,
  changeAnswersStatus,
  changeQuestionIndex,
} = quizPlay.actions;
export default quizPlay.reducer;
