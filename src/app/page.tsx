"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "react-dom";
import { ProductResp } from "@/types/products";
import CardsCarousel from "@/components/cardsCarousel";
import CountDownTimer from "@/components/countdownTimer";
import { IconType } from "react-icons";
import { CiMobile1, CiLaptop, CiCamera, CiHeadphones } from "react-icons/ci";
import {
  IoWatchOutline,
  IoGameControllerOutline,
  IoDiamondOutline,
} from "react-icons/io5";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { Container, Grid, SimpleGrid } from "@mantine/core";
import StatCard from "@/components/statCard";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

interface category {
  id: number;
  item: string;
  image: IconType;
}

const categories: category[] = [
  { id: 1, item: "Men's Clothing", image: FcBusinessman },
  { id: 2, item: "Women's Clothing", image: FcBusinesswoman },
  { id: 3, item: "Jewelery", image: IoDiamondOutline },
  { id: 4, item: "Electronics", image: CiMobile1 },
  { id: 5, item: "Computers", image: CiLaptop },
  { id: 6, item: "Smart Watch", image: IoWatchOutline },
  { id: 7, item: "Camera", image: CiCamera },
  { id: 8, item: "HeadPhones", image: CiHeadphones },
  { id: 9, item: "Gaming", image: IoGameControllerOutline },
];

const heroCarousel = [
  "/heroImage.png",
  "/heroImage.png",
  "/heroImage.png",
  "/heroImage.png",
];

export default function Home() {
  const [flashSaleItems, setFlashSaleItems] = useState<ProductResp[]>([]);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const getItems = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=8");
      const itemData: ProductResp[] = res.data;
      setFlashSaleItems(itemData);
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="flex flex-col mb-12 gap-12 items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full">
        <nav className="border-r-2 hidden md:flex flex-col items-center justify-center p-4 px-8 w-full h-full max-w-[300px]">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/products?category=women's clothing">
                Women&apos;s Fashion
              </a>
            </li>
            <li>
              <a href="/products?category=men's clothing">
                Mens&apos;s Fashion
              </a>
            </li>
            <li>
              <a href="/products?category=jewelery">Jewelery</a>
            </li>
            <li>
              <a href="/products?category=electronics">Electronics</a>
            </li>
            <li>
              <a href="/products">Home & Lifestyle</a>
            </li>
            <li>
              <a href="/products">Sports & Outdoors</a>
            </li>
            <li>
              <a href="/products">Baby&apos;s & Toys</a>
            </li>
            <li>
              <a href="/products">Groceries & Pets</a>
            </li>
            <li>
              <a href="/products">Health & Beauty</a>
            </li>
          </ul>
        </nav>
        <div className="w-full m-4">
          <Carousel
            slideSize="100%"
            slideGap="xs"
            loop
            draggable={false}
            withControls={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {heroCarousel.map((data, index) => (
              <Image
                src={data}
                alt="hero image"
                className="w-full"
                height={400}
                key={index}
                width={1200}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-red-500">Today&apos;s</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">FLASH SALES</h1>
            {CountDownTimer()}
          </div>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {CardsCarousel(flashSaleItems)}
        <div className="w-full flex flex-row border-b-2 pb-12 border-black items-center justify-center">
          <a
            href="/products"
            className="bg-red-500 text-white text-center p-4 w-full max-w-52 rounded-md mt-4"
          >
            View all Products
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-red-500">Categories</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">Browse By Category</h1>
          </div>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {CardsCarousel(categories as category[])}
        <div className="w-full flex flex-row border-b-2 pb-12 border-black items-center justify-center">
          <a
            href="/products"
            className="bg-red-500 text-white text-center p-4 w-full max-w-52 rounded-md mt-4"
          >
            View all Products
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-red-500">This Month</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">Best Selling Items</h1>
          </div>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {CardsCarousel(flashSaleItems)}
        <div className="w-full flex flex-row border-b-2 pb-12 border-black items-center justify-center">
          <a
            href="/products"
            className="bg-red-500 text-white text-center p-4 w-full max-w-52 rounded-md mt-4"
          >
            View all Products
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/exploreProducts.png"
          alt="Explore Our Products"
          className="w-full h-auto"
          height={500}
          width={1200}
        />
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-red-500">Our Products</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">Explore Our Products</h1>
          </div>
        </div>
      </div>
      <div className=" max-w-full pl-4 md:pl-28 ">
        {CardsCarousel(flashSaleItems)}
        <div className="w-full flex flex-row border-b-2 pb-12 border-black items-center justify-center">
          <a
            href="/products"
            className="bg-red-500 text-white text-center p-4 w-full max-w-52 rounded-md mt-4"
          >
            View all Products
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 py-4 pl-4 items-center md:pl-28 justify-center">
        <div className="flex flex-row items-center gap-2 w-full place-self-start">
          <pre className="bg-red-500 leading-[200%] rounded-md">{"  "}</pre>
          <p className="text-red-500">Featured</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:pr-28">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-[2rem] font-bold">New Arrivals</h1>
          </div>
        </div>
      </div>
      <Container my="sm">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Image
            src="/grid1.png"
            alt="Hero"
            className="w-full h-auto"
            height={500}
            width={500}
          />
          <Grid gutter="md">
            <Grid.Col>
              <Image
                src="/grid2.png"
                alt="Hero"
                className="w-full h-auto"
                height={250}
                width={500}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="/grid3.png"
                alt="Hero"
                className="w-full h-auto"
                height={250}
                width={250}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="/grid4.png"
                alt="Hero"
                className="w-full h-auto"
                height={250}
                width={250}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      <div className="flex flex-wrap items-center justify-center gap-8 my-[5rem]">
        {StatCard({
          image: LiaShippingFastSolid,
          value: "FREE AND FAST DELIVERY",
          desc: "Free delivery on all orders over $140",
          border: false,
        })}
        {StatCard({
          image: RiCustomerServiceLine,
          value: "24/7 CUSTOMER SERVICE",
          desc: "Friendly 24/7 customer service",
          border: false,
        })}
        {StatCard({
          image: GoShieldCheck,
          value: "MONEY BACK GUARANTEE",
          desc: "We return money within 30 days",
          border: false,
        })}
      </div>
    </div>
  );
}
