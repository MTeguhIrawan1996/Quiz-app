import React from "react";
import { QuizImg } from "../assets";
import { Button, Navbar } from "../components";
import { NavLink, useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
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
          <div className="flex flex-col justify-center items-center mt-6">
            <Button
              text="🥇 Mulai Yaa"
              className="font-semibold text-base w-[371px]"
              onClick={() => navigate("/quiz-play")}
            />
            <NavLink
              to="/"
              className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-secondary-color"
            >
              Kembali
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
