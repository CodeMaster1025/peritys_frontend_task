"use client";
import pageNavigation from "@/components/pageNavigation";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

interface QueryData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [queryData, setQueryData] = useState<QueryData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      queryData.name === "" ||
      queryData.email === "" ||
      queryData.phone === ""
    ) {
      alert("Please fill out all fields.");
      return ;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryData),
      });
      if (response.ok) {
        alert("Your message has been sent successfully.");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mb-8">
      {pageNavigation(links)}
      <div className="flex flex-col md:flex-row gap-8 mx-8 md:mx-16">
        <div className="flex flex-col items-center justify-center gap-4 border shadow-md w-full max-w-[300px] rounded-md p-4">
          <div className="border-b-2 border-red-500 w-full py-4 gap-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4 flex flex-row gap-4 items-center">
              <FiPhone className="p-2 bg-red-500 rounded-full text-[2.5rem] text-white" />
              Contact Us
            </h1>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +880161112222</p>
          </div>
          <div className="w-full gap-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4 flex flex-row gap-4 items-center">
              <CiMail className="p-2 bg-red-500 rounded-full text-[2.5rem] text-white" />
              Write To Us
            </h1>
            <p className="text-wrap">
              Fill out the form and we will contact you within 24 hours.
            </p>
            <p>Emails:customer@exclusive.com</p>
            <p>Emails:support@exclusive.com</p>
          </div>
        </div>
        <div className="flex flex-col w-full p-8 border shadow-md rounded-md">
          <form>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#F5F5F5] p-4 w-full rounded-md"
                onChange={(e) => {
                  setQueryData({ ...queryData, name: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#F5F5F5] p-4 w-full rounded-md"
                onChange={(e) => {
                  setQueryData({ ...queryData, email: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Your phone"
                className="bg-[#F5F5F5] p-4 w-full rounded-md"
                onChange={(e) => {
                  setQueryData({ ...queryData, phone: e.target.value });
                }}
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-[#F5F5F5] p-4 w-full rounded-md mt-4 h-full"
              onChange={(e) => {
                setQueryData({ ...queryData, message: e.target.value });
              }}
            />
            <div className="w-full flex flex-row items-center justify-end">
              <button
                className="bg-red-500 text-white p-4 w-full max-w-52 rounded-md mt-4"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  handleFormSubmit(e);
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
