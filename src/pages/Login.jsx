import React, { useEffect } from "react";
import axios from "axios";
import { GoogleImg } from "../assets";
import { Navigate, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { loginFailure, loginStart, loginSuccess } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.login);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginStart());
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        dispatch(loginSuccess({ user: res.data }));
        navigate("/quiz");
      } catch (err) {
        dispatch(loginFailure({ error: err.response }));
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mx-auto h-screen w-full px-14 flex flex-col justify-center items-center gap-6">
      <button
        className="flex justify-center items-center px-8 py-2 gap-2 bg-white border-solid border-2 border-zinc-700 rounded-none hover:bg-zinc-700 hover:text-white transition-all duration-300 delay-0 ease-cubic-bezier"
        onClick={() => login()}
      >
        <img alt="Google" src={GoogleImg} className="w-5 aspect-square" />
        <span className="text-sm font-medium">Login dengan Google</span>
      </button>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
         
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      /> */}
    </div>
  );
};

export default Login;
