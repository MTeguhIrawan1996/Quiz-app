import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const AnswersItem = () => {
  return (
    <div className="p-6 sm:w-[45%] w-[70%] bg-white rounded-xl shadow-lg flex items-center gap-4 mt-6">
      <div className="w-10 bg-zinc-300 aspect-square font-bold flex justify-center items-center">
        <h1 className="text-lg">A</h1>
      </div>
      <h2 className="text-lg font-semibold text-black w-full">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
        explicabo. z
      </h2>
      <div
        onClick={() => {}}
        className={`${"bg-green-400 text-zinc-300"} w-16 aspect-square flex justify-center items-center cursor-pointer rounded-md`}
      >
        <CheckIcon className="h-7 w-7 transition-color duration-300 delay-0 ease-cubic-bezier" />
      </div>
    </div>
  );
};

export default AnswersItem;
