import React, { useEffect } from "react";
import moment from "moment";
import { AnswersItem, Button, Timer, SoalList } from "../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeScore,
  endQuiz,
  endScore,
  startQuiz,
} from "../features/quizPlaySlice";
import { useNavigate } from "react-router-dom";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const QuizPlay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dateStart, currentState, quiz } = useSelector(
    (state) => state.quizPlay
  );
  const [end, setEnd] = useState(Date.now() + 60 * 60 * 500);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Logic Jawaban
    if (quiz) {
      const question = quiz.results[questionIndex];
      let answers = [...question.incorrect_answers];
      // mengembalikan nilai array beserta jawaban benar dengan posisi acak
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      const optionsWithObject = answers.map((option, i) => {
        return {
          choice: String.fromCharCode(65 + i),
          text: option,
          isCorrect: option === question.correct_answer,
        };
      });
      setOptions(optionsWithObject);
    }
  }, [questionIndex]);

  useEffect(() => {
    if (quiz) {
      if (currentState === "END_QUIZ") {
        return;
      }
      setEnd(parseInt(dateStart));
      const endDate = moment(new Date(parseInt(dateStart)));
      const interval = setInterval(async () => {
        const now = moment();
        if (now.isBefore(endDate)) {
          dispatch(startQuiz());
        } else if (now.isAfter(endDate)) {
          dispatch(endQuiz());
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    if (currentState === "NOT_STARTED") {
      navigate("/quiz");
    }
  }, [currentState]);

  const checkAnswer = (selectedOption) => {
    setSelected(selectedOption);
    if (questionIndex + 1 < quiz.results.length) {
      if (selectedOption.isCorrect) {
        dispatch(changeScore({ score: 10 }));
      }
      setQuestionIndex(questionIndex + 1);
    } else {
      if (selectedOption.isCorrect) {
        dispatch(changeScore({ score: 10 }));
      }
      dispatch(endQuiz());
    }
  };

  const handleSelesai = () => {
    dispatch(endScore());
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="paddings pt-16 min-h-screen">
      <div className="in__width mx-auto flex flex-col justify-center items-center gap-3">
        <Timer end={end} />
        {currentState === "STARTED_QUIZ" && (
          <>
            <h1 className="text-3xl font-semibold max-[450px]:text-2xl text-white text-center mt-6">
              {quiz && quiz.results[questionIndex].question}
            </h1>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {options.map((option, i) => (
                <AnswersItem
                  {...option}
                  key={i}
                  selected={option === selected}
                  onClick={() => {
                    checkAnswer(option);
                  }}
                />
              ))}
            </div>
            <SoalList questionIndex={questionIndex} />
          </>
        )}
        <div className="flex w-full justify-center items-center px-10 pt-8">
          {currentState === "END_QUIZ" && (
            <Button
              text="Selesai"
              className="font-semibold text-base w-[190px]"
              onClick={() => {
                handleSelesai();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPlay;
