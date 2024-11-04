"use client";
import React from "react";

interface links {
  name: string;
  url: string;
}

export default function pageNavigation(data: links[]) {
  return (
    <nav className="flex flex-row w-fit p-2 md:ml-12 items-center justify-between gap-2 md:gap-4 my-8">
      {data.map((link, index) => (
        <React.Fragment key={link.name}>
          <a
            href={link.url}
            className={`${index === data.length - 1 ? "font-bold" : ""} `}
          >
            {link.name}
          </a>
          {index !== data.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
