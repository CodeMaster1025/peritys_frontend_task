"use client";

import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row items-center justify-between gap-4 my-8">
      <Image
        src="/authImage.png"
        alt="Auth Side Image"
        className="h-auto w-[40%] hidden md:block"
        width={500}
        height={500}
      />
      <div className="h-full w-full flex flex-col items-center gap-8 justify-center md:w-[50%]">
        {children}
      </div>
    </div>
  );
}
