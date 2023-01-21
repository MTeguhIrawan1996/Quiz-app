import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="text-[17px] font-bold border-none rounded-xl bg-white max-w-full"
      disabled={props.isLoading}
    >
      <span
        className={`block box-border border-solid border-2 border-white rounded-[0.75em] bg-secondary-color px-6 py-2 text-white -translate-y-1 -translate-x-1 hover:-translate-y-[0.35rem] hover:-translate-x-[0.35rem] active:translate-y-0 active:translate-x-0 transition-transform ease-in duration-[0.1s] max-w-full ${props.className}`}
      >
        {props.isLoading ? "Loading...." : props.text}
      </span>
    </button>
  );
};

export default Button;
