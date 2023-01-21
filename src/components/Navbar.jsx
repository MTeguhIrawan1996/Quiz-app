import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="x__paddings py-6">
      <div className="in__width mx-auto flex justify-between items-center">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-secondary-color">
          ONEQUIZ
        </h2>
        <Button text="Login" onClick={() => {}} />
      </div>
    </nav>
  );
};

export default Navbar;
