import React from "react";
import { useSelector } from "react-redux";

const SoalList = (props) => {
  const { quiz } = useSelector((state) => state.quizPlay);
  return (
    <div className="flex flex-col w-full mt-6 gap-3">
      <h1 className="text-lg font-bold text-white">
        Soal
        <span> {props.questionIndex + 1}/10</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-2 w-full">
        {quiz?.results?.map((data, i) => (
          <div
            className="flex items-center justify-center w-12 aspect-square bg-zinc-300 cursor-pointer"
            key={i}
          >
            <h1 className="text-2xl font-bold">{i + 1}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoalList;
