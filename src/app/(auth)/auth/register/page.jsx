"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Drakoria Times - Login",
//   description: "Your source for the latest news in Drakoria",
// };

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto h-[80vh] flex items-center justify-center bg-slate-100 my-5">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Your name </legend>
            <input
              type="text"
              className="input bg-slate-100 rounded-sm border-none w-full"
              placeholder="Enter your name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <span className="text-red-700 font-semibold">
                {errors.name.message}
              </span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Photo url </legend>
            <input
              type="text"
              className="input bg-slate-100 rounded-sm border-none w-full"
              placeholder="Enter your photo URL"
              {...register("photoUrl", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photoUrl && (
              <span className="text-red-700 font-semibold">
                {errors.photoUrl.message}
              </span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email address </legend>
            <input
              type="email"
              className="input bg-slate-100 rounded-sm border-none w-full"
              placeholder="Enter your email address"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <span className="text-red-700 font-semibold">
                {errors.email.message}
              </span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Password </legend>
            <input
              type="password"
              className="input bg-slate-100 rounded-sm border-none  w-full"
              placeholder="Enter your password"
              {...register("password", {
                required: " Password field is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 Caracters",
                },
              })}
            />

            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-700 font-semibold">
                {errors.password.message}
              </span>
            )}
          </fieldset>
          <button className="btn btn-block btn-neutral my-4">Login</button>

          <p className="text-center">
            Already Have An Account ?
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
