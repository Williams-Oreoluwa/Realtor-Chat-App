import React from "react";
import home from "../assets/home.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const successNotify = () => {
    toast("Sign up Successful", { position: toast.POSITION.TOP_RIGHT });
  };

  const onSubmit = (data) => {
    console.log(data);
    successNotify();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <main className="font-inter pt-10 px-4">
      <div className="2xl:flex flex-col justify-center h-screen items-center w-full md:w-3/5 max-w-[620px] 2xl:w-1/4 mx-auto pb-10">
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
              Sign Up
            </h2>
            <h2 className="font-normal text-base leading-[19.36px]">
              Create an account
            </h2>
          </div>
          <div className="flex flex-col gap-1 mt-8">
            <label
              htmlFor="Username"
              className="text-sm leading-[16.94px] text-[#4F4F4F]"
            >
              Username
            </label>
            <input
              type="email"
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
            <label
              htmlFor="Password"
              className="text-sm leading-[16.94px] text-[#4F4F4F]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="......"
              className="py-2 px-4 rounded-md border bg-[#EAEAEA] border-[#EAEAEA] outline-none"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 my-4">
            <label
              htmlFor="Password"
              name="password"
              className="text-sm leading-[16.94px] text-[#4F4F4F]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="......"
              className="py-2 px-4 rounded-md border bg-[#EAEAEA] border-[#EAEAEA] outline-none"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#0B468C] mt-5 w-full text-white p-2 rounded-md text-base font-semibold leading-[19.36px]"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center pt-4">
            <h3>
              Back to{" "}
              <a className="text-[#F9A242]" href="/">
                Login
              </a>
            </h3>
          </div>
        </form>
        <ToastContainer />
      </div>
    </main>
  );
};

export default Register;
