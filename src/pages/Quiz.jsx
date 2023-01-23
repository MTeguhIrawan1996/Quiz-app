import React, { useEffect } from "react";
import { QuizImg } from "../assets";
import { Button, Navbar, Spinner } from "../components";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQuiz, startQuiz } from "../features/quizPlaySlice";
import useFetch from "../hooks/useFetch";

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const { data, loading, error } = useFetch(
    "api.php?amount=10&category=21&difficulty=easy&type=multiple"
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem("question", JSON.stringify(data));
    }
  }, [data]);

  const handleClick = () => {
    if (data) {
      localStorage.setItem("dateStart", Date.now() + 60 * 60 * 500);
      dispatch(startQuiz());
      dispatch(setQuiz());
      navigate("/quiz-play");
    }
  };
  return (
    <>
      <Navbar />
      <div className="paddings pt-8">
        <div className="in__width mx-auto flex flex-col justify-center items-center gap-3">
          <img
            src={QuizImg}
            alt="Home Img"
            className="w-[420px] aspect-square object-contain"
          />
          <h1 className="text-3xl font-bold text-white">Kuy Mulai Quiz</h1>
          {!user ? (
            <span className="text-2xl font-bold text-white">Login dulu ya</span>
          ) : (
            <div className="flex flex-col justify-center items-center mt-6">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <Button
                    text="🥇 Mulai Yaa"
                    className="font-semibold text-base w-[371px]"
                    onClick={() => {
                      handleClick();
                    }}
                  />
                  <NavLink
                    to="/"
                    className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-secondary-color"
                  >
                    Kembali
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
