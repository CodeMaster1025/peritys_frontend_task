"use client";

import { IconType } from "react-icons";

interface category {
  id: number;
  item: string;
  image: IconType;
}

export default function CategoryCard({ item }: { item: category }) {
  return (
    <a
      className="border border-black rounded-md w-[170px] h-[145px] flex flex-col items-center justify-center text-2xl"
      href={`/products?category=${item.item}`.toLowerCase()}
    >
      <item.image size={100} />
      <h1 className="text-center">{item.item}</h1>
    </a>
  );
}
