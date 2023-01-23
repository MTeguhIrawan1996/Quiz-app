import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { logout } from "../features/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  return (
    <nav className="x__paddings py-6">
      <div className="in__width mx-auto flex justify-between items-center">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-secondary-color">
          ONEQUIZ
        </h2>
        {user ? (
          <>
            <div className="flex justify-center items-center gap-6">
              <span className="font-semibold text-lg text-secondary-color">
                {user.name}
              </span>
              <Button
                text="Logout"
                onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  dispatch(logout());
                }}
              />
            </div>
          </>
        ) : (
          <Button
            text="Login"
            onClick={() => {
              navigate("/login");
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
