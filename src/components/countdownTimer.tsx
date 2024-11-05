"use client";

import { useEffect, useState } from "react";

export default function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-29 20:00:00") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-row gap-4 mr-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Days</p>
        <p className="font-bold">{timeLeft.days}</p>
      </div>
      <p className="text-[2rem] text-red-500 font-bold">:</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Hours</p>
        <p className="font-bold">{timeLeft.hours}</p>
      </div>
      <p className="text-[2rem] text-red-500 font-bold">:</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[.75rem]">Minutes</p>
        <p className="font-bold">{timeLeft.minutes}</p>
      </div>
      <p className="text-[2rem] hidden md:block text-red-500 font-bold">:</p>
      <div className="flex-col hidden md:flex items-center justify-center gap-2">
        <p className="text-[.75rem]">Seconds</p>
        <p className="font-bold">{timeLeft.seconds}</p>
      </div>
    </div>
  );
}
