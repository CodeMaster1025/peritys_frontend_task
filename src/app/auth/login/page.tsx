"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";

export default function Login() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      const token: string = response.data.token;
      const user = {
        username: formData.username,
        token: token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      login(user);
      router.replace("/");
    } catch (error: AxiosError | any) {
      console.error(error.response.data);
      toast.error(`${error.response.data}`);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-[90%] max-w-[400px] text-[1rem] md:text-[1rem]">
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
      <div className="flex flex-col gap-2">
        <h1 className="w-full text-left text-[1rem] md:text-[2rem] font-bold">
          Login to Exclusive
        </h1>
        <p>Enter your details below</p>
        <p>username: mor_2314</p>
        <p>password: 83r5^_</p>
      </div>
      <form
        className="flex flex-col gap-8"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleLogin(e)}
      >
        <input
          className="border-b border-black p-2 outline-none"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <input
          className="border-b border-black p-2 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <div className="flex flex-row gap-4">
          <button
            className="bg-red-500 w-full p-2 text-white rounded-sm"
            type="submit"
          >
            Login
          </button>
          <button className="rounded-sm w-full text-red-500">
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
}
