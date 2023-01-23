import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SoalList = () => {
  const { quiz, answersStatus, questionIndex } = useSelector(
    (state) => state.quizPlay
  );
  return (
    <div className="flex flex-col w-full mt-6 gap-3">
      <h1 className="text-lg font-bold text-white text-center">
        Soal
        <span> {questionIndex + 1}/10</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 w-full">
        {quiz?.results?.map((data, i) => (
          <div
            className={`flex items-center justify-center w-12 aspect-square bg-zinc-300 ${
              answersStatus.some((c) => c.key === i + 1) && "bg-green-400"
            }`}
            key={`${data.type}-${i}`}
            // onClick={() => {
            //   props.handleClick(i);
            // }}
          >
            <h1 className="text-2xl font-bold">{i + 1}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoalList;
