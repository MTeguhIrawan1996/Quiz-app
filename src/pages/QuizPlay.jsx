import React from "react";
import { AnswersItem, Button } from "../components";
import Timer from "../components/Timer";
import { useState } from "react";

const QuizPlay = () => {
  const [end, setEnd] = useState(Date.now() + 60 * 60 * 500);
  return (
    <div className="paddings pt-16 min-h-screen">
      <div className="in__width mx-auto flex flex-col justify-center items-center gap-3">
        <Timer start={new Date()} end={end} />

        <h1 className="text-3xl font-semibold max-[450px]:text-2xl text-white text-center mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          velit ullam ratione illum magnam voluptate ex tempore qui nobis
          commodi ipsa modi ipsum facere possimus aut dolorem cum dicta
          doloremque!
        </h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <AnswersItem />
          <AnswersItem />
          <AnswersItem />
          <AnswersItem />
        </div>
        <div className="flex w-full justify-between items-center px-10 pt-8">
          <Button
            text="Prev"
            className="font-semibold text-base w-[190px]"
            onClick={() => handleSubmit()}
          />
          <Button
            text="Next"
            className="font-semibold text-base w-[190px]"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPlay;
