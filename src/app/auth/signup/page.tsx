"use client";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
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
      // router.replace("/");
      toast.success("Account created successfully");
    } catch (error: AxiosError | any) {
      if (error.response && error.response.status === 401) {
        toast.success("New account created");
      } else {
        console.error(error.response.data);
        toast.error(`${error.response.data}`);
      }
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
          Create an account
        </h1>
        <p>Enter your details below</p>
        <p>Note there is no signup functionality</p>
      </div>
      <form
        className="flex flex-col gap-8"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignup(e)}
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
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <input
          className="border-b border-black p-2 outline-none"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <button className="bg-red-500 w-full p-4 text-white rounded-sm">
          Create an Account
        </button>
        <button className="border border-black border-opacity-40 rounded-sm gap-4 p-4 w-full flex flex-row justify-center items-center">
          <Image src="/google.png" alt="google" width={20} height={20} />
          Sign up with google
        </button>
      </form>
      <p className="w-full text-center">
        Already have an account?{" "}
        <a href="/auth/login" className="py-2 border-b-2">
          Log In
        </a>
      </p>
    </div>
  );
}
