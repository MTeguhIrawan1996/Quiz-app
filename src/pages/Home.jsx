import React from "react";
import { HomeImg, HomeImg02, HomeImg03 } from "../assets";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="paddings pt-8">
        <div className="in__width mx-auto flex flex-col">
          <h1 className="text-center mt-2 font-bold md:text-[54px] text-[42px] text-white">
            <span className="text-secondary-color">Q</span>uiz{" "}
            <span className="text-secondary-color">K</span>uyy
          </h1>
          <div className="flex w-full justify-center items-center relative">
            <img
              src={HomeImg}
              alt="Home Img"
              className="w-[420px] aspect-square object-contain"
            />
            <img
              src={HomeImg02}
              alt="Home Img"
              className="absolute sm:top-5 sm:left-[20%] top-3 left-5 w-[120px] h-[120px]"
            />
            <img
              src={HomeImg03}
              alt="Home Img"
              className="absolute sm:bottom-16 sm:right-[20%] right-5 bottom-10 w-[120px] h-[120px]"
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <Button text="Coba sini" onClick={() => navigate("/quiz")} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
