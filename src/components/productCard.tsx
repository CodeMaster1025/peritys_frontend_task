"use client";

import { useState } from "react";
import { ProductResp } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/types/products";

export default function Card({ item }: { item: ProductResp }) {
  const router = useRouter();

  const [hover, setHover] = useState(false);
  const { addProduct, inCart, removeProduct } = useCartStore();

  const handleAddCartItem = () => {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
      totalPrice: item.price,
    };
    addProduct(cartItem);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push(`/productDetails?id=${item.id}`);
      }}
      className="w-[270px] h-[350px] rounded-md relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={270}
        height={250}
        className="rounded-t-md w-[270px] h-[250px] object-cover"
      />
      <div className="flex flex-col p-2 text-left justify-start">
        <h1 className="line-clamp-1 text-ellipsis">{item.title}</h1>
        <p className="text-red-500">${item.price}</p>
        <div className="text-[2rem] flex flex-row items-center">
          {Array.from(
            { length: Math.floor(item?.rating?.rate) },
            (_, index) => (
              <span key={index} className="text-yellow-500">
                ★
              </span>
            )
          )}
          {item?.rating?.rate % 1 !== 0 && (
            <span className="text-yellow-500">★</span>
          )}
          {Array.from(
            { length: 5 - Math.ceil(item?.rating?.rate) },
            (_, index) => (
              <span key={index} className="text-gray-400">
                ★
              </span>
            )
          )}
          <p className="text-lg">({item?.rating?.count} reviews)</p>
        </div>
      </div>
      <div
        className={`w-full mt-max flex flex-col items-center bottom-0 justify-end ${
          hover ? "absolute" : "hidden"
        }`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddCartItem();
          }}
          className={`w-full mt-max flex flex-col items-center bottom-0 justify-end ${
            inCart(item.id) ? "hidden" : ""
          }`}
        >
          <p className={`w-full h-9 text-white rounded-b-md bg-black`}>
            Add to Cart
          </p>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeProduct(item.id);
          }}
          className={`w-full mt-max flex flex-col items-center bottom-0 justify-end ${
            inCart(item.id) ? "" : "hidden"
          }`}
        >
          <p className={`w-full h-9 text-white rounded-b-md bg-black`}>
            Remove from Cart
          </p>
        </button>
      </div>
    </div>
  );
}
