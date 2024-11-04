"use client";

import pageNavigation from "@/components/pageNavigation";
import { useEffect, useState } from "react";
import { ProductResp } from "@/types/products";
import axios from "axios";
import Image from "next/image";
import { useLoadingStore } from "@/store/loading";
import { useSearchParams } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import CardsCarousel from "@/components/cardsCarousel";

let missingProductData = {
  images: [
    "https://picsum.photos/id/0/367/267",
    "https://picsum.photos/id/21/367/267",
    "https://picsum.photos/id/30/367/267",
    "https://picsum.photos/536/354",
  ],
  colorOptions: ["red", "blue", "green", "yellow"],
  sizes: ["S", "M", "L", "XL"],
};

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { startLoading, stopLoading } = useLoadingStore();

  const [data, setData] = useState<ProductResp>({} as ProductResp);
  const [similarItems, setSimilarItems] = useState<ProductResp[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<{
    color: string;
    size: string;
    quantity: number;
    favorite: boolean;
  }>({ color: "", size: "", quantity: 0, favorite: false });

  const [links, setLinks] = useState<{ name: string; url: string }[]>([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const itemData = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        const data: ProductResp = itemData.data;
        setData(data);
        if (data.category && data.title)
          setLinks([
            ...links,
            { name: data.category, url: `/products?category=${data.category}` },
            {
              name: data.title.slice(0, 10) + "...",
              url: `/productDetails?id=${data.id}`,
            },
          ]);
        if (!missingProductData.images.includes(data.image)) {
          missingProductData = {
            ...missingProductData,
            images: [data.image, ...missingProductData.images],
          };
        }
        stopLoading();
      } catch (error) {
        stopLoading();
        console.log(error);
        window.alert(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const fetchSimilarItems = async () => {
      try {
        startLoading();
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const itemData: ProductResp[] = res.data;
        setSimilarItems(itemData);
        stopLoading();
      } catch (error) {
        stopLoading();
        console.log(error);
        window.alert(error);
      }
    };
    data.category && fetchSimilarItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.category]);

  return (
    <div className="mb-8 flex flex-col p-4">
      {pageNavigation(links)}
      <div className=" flex flex-col md:flex-row items-start gap-12 justify-center">
        {data.image && (
          <div className="flex w-full min-w-fit gap-4 flex-col-reverse md:flex-row ">
            <div className="flex w-full min-w-[50px] flex-row md:h-[300px] gap-4  md:flex-col items-center justify-center md:justify-start">
              {missingProductData.images.map((link, index) => (
                <Image
                  key={index}
                  src={link}
                  alt={data.title}
                  width={30}
                  height={30}
                  onClick={() => setData({ ...data, image: link })}
                  className="rounded-md w-[50px] h-auto cursor-pointer"
                />
              ))}
            </div>
            <Image
              src={data.image}
              alt={data.title}
              width={600}
              height={600}
              className="rounded-md w-[400px] max-w-full h-auto self-center"
            />
          </div>
        )}
        <div className="flex flex-col min-w-[40vw] w-auto">
          <div className="flex flex-col w-full gap-4 border-b-2">
            <h1 className="text-2xl font-bold">{data?.title}</h1>
            <div className="text-[2rem] flex flex-row items-center">
              {Array.from(
                { length: Math.floor(data?.rating?.rate) },
                (_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                )
              )}
              {data?.rating?.rate % 1 !== 0 && (
                <span className="text-yellow-500">★</span>
              )}
              {Array.from(
                { length: 5 - Math.ceil(data?.rating?.rate) },
                (_, index) => (
                  <span key={index} className="text-gray-400">
                    ★
                  </span>
                )
              )}
              <p className="text-lg">({data?.rating?.count} reviews)</p>
            </div>
            <p className="text-2xl font-bold">${data?.price}</p>
            <p className="text-lg">{data?.description}</p>
            <div className="flex flex-row gap-4 items-center"></div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className=" flex flex-row gap-4 items-center">
              <label className="text-xl font-bold ">Colors : </label>
              <div className="flex flex-row gap-4">
                {missingProductData.colorOptions.map((color, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setSelectedProperties({ ...selectedProperties, color })
                    }
                    className={`w-5 h-5 rounded-full ${
                      selectedProperties.color === color
                        ? "border-4 border-black"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-xl font-bold">Sizes:</p>
              {missingProductData.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`text-lg m-2 px-2 border rounded-md border-black ${
                    selectedProperties.size === size
                      ? "bg-red-500 text-white"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedProperties({ ...selectedProperties, size })
                  }
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-row items-center justify-around border rounded-md border-black">
                <button
                  className={`border-r p-2 px-4 border-black hover:bg-red-500 hover:text-white ${
                    selectedProperties.quantity <= 0 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (selectedProperties.quantity > 0) {
                      setSelectedProperties({
                        ...selectedProperties,
                        quantity: selectedProperties.quantity - 1,
                      });
                    }
                  }}
                >
                  -
                </button>
                <p className="p-2 px-4 min-w-[50px] text-center">
                  {selectedProperties?.quantity || 0}
                </p>
                <button
                  className="border-l p-2 px-4 border-black hover:bg-red-500 hover:text-white"
                  onClick={() =>
                    setSelectedProperties({
                      ...selectedProperties,
                      quantity: selectedProperties.quantity + 1,
                    })
                  }
                >
                  +
                </button>
              </div>
              <button
                className={`p-2 border-red-500 border px-8 h-full rounded-md bg-red-500 text-white`}
              >
                Buy Now
              </button>
              <button
                className={`h-full p-1 border border-black rounded-md ${
                  selectedProperties.favorite
                    ? "bg-red-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() =>
                  setSelectedProperties({
                    ...selectedProperties,
                    favorite: !selectedProperties.favorite,
                  })
                }
              >
                <CiHeart className="text-[2rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-xl font-bold">Similar Items</p>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {similarItems.length > 0 && CardsCarousel(similarItems)}
      </div>
    </div>
  );
}
