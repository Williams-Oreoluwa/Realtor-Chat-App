import React from "react";
import home from "../assets/home.svg";
import google from "../assets/google.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const successNotify = () => {
    toast("Login Successful", { position: toast.POSITION.TOP_RIGHT });
  };

  const pushToLogin = () => {
    setTimeout(() => {
      navigate("/messages");
    }, 5000);
  };

  const onSubmit = (data) => {
    console.log(data);
    successNotify();
    pushToLogin();
  };
  return (
    <main className="font-inter pt-10 px-4">
      <div className="2xl:flex flex-col justify-center 2xl:h-screen items-center w-full md:w-3/5 max-w-[620px] 2xl:w-1/4 mx-auto pb-14 max-w-[14">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex gap-1">
            <img src={home} alt="home" />
            <h2 className="text-[#0B468C] mt-2 text-2xl leading-[29.05px] font-normal">
              Home
            </h2>
          </div>
        </div>
        <form
          className="mt-10 border border-[#E0E0E0] p-5 lg:p-10 rounded-lg w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-normal text-[32px] leading-[38.73px] text-black">
              👋Welcome back
            </h2>
            <h2 className="font-normal text-base leading-[19.36px]">
              Login to your account
            </h2>
            <button
              type="button"
              className=" flex justify-center gap-4 border border-[#EAEAEA] mt-5 w-full text-[#0B468C] p-2 rounded-lg text-base font-semibold leading-[19.36px]"
            >
              <img src={google} alt="google" />
              Continue with Google
            </button>
          </div>
          <div className="flex flex-col gap-1 mt-8">
            <label className="text-sm leading-[16.94px] text-[#4F4F4F]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="assessment@gmail.com"
              className="py-2 px-4 rounded-md bg-[#EAEAEA] border border-[#EAEAEA] outline-none"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label className="text-sm leading-[16.94px] text-[#4F4F4F]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="py-2 px-4 rounded-md bg-[#EAEAEA] border border-[#EAEAEA] outline-none"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <h2 className="text-[#F9A242] text-base font-semibold leading-[19.36px]">
            Forgot Password?
          </h2>
          <button
            type="submit"
            className="bg-[#0B468C] mt-5 w-full text-white p-2 rounded-md text-base font-semibold leading-[19.36px]"
          >
            Login
          </button>
          <div className="flex items-center justify-center pt-4">
            <h3 className="text-center">
              Don't have an account? <br /> Click{" "} 
              <Link className="text-[#F9A242] underline" to="/register">
                here  
              </Link> to register{" "}
            </h3>
          </div>
        </form>

        <ToastContainer />
      </div>
    </main>
  );
};

export default Login;
