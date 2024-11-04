"use client";

import { useState } from "react";

interface statCardProps {
  image: any;
  value: string;
  desc: string;
  border?: boolean;
}

export default function StatCard(data: statCardProps) {
    const [hover, setHover] = useState(false);
    return (
      <div
        id="card"
        className={`w-[270px] h-[200px] ${
          data.border ? "border border-opacity-30 border-black" : ""
        } flex flex-col items-center justify-around hover:bg-red-500 hover:text-white rounded-md`}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <div
          className={`p-2 text-[2.5rem] z-2 border-8 rounded-full border-gray-400 ${
            hover
              ? "text-black bg-white border-[#e67c7c]"
              : "text-white bg-black border-[#c1c1c1]"
          }`}
        >
          <data.image />
        </div>
        <h1 className="font-bold text-[1.25rem]">{data.value}</h1>
        <p className="text-[1rem]">{data.desc}</p>
      </div>
    );
  }