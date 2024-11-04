"use client";
import pageNavigation from "@/components/pageNavigation";
import { CiShop, CiDollar, CiShoppingBasket, CiBag1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import Image from "next/image";
import StatCard from "@/components/statCard";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

interface PersonCardProps {
  name: string;
  image: string;
  desc: string;
}

function PersonCard(data: PersonCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[360px]">
      <Image src={data.image} alt="About Image" width={370} height={430} />
      <div className="flex flex-col gap-2 w-full max-w-[400px] py-4">
        <h1 className="font-500 mb-4 text-[2rem] md:text-[2rem]">
          {data.name}
        </h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col w-full gap-4">
      {pageNavigation(links)}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center text-[1rem] w-full">
          <div className="flex flex-col gap-2 w-full max-w-[400px] p-4">
            <h1 className="font-bold mb-4 text-[2rem] md:text-[3.5rem]">
              Our Story
            </h1>
            <p>
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <Image
          src="/aboutImage.png"
          alt="About Image"
          width={700}
          height={500}
          className="w-full hidden md:block max-w-[40%]"
        />
      </div>
      <div className="mt-[5rem]">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {StatCard({
            image: CiShop,
            value: "10.5k",
            desc: "Sellers active on our site",
            border: true,
          })}
          {StatCard({
            image: CiDollar,
            value: "33k",
            desc: "Monthly product sale",
            border: true,
          })}
          {StatCard({
            image: CiShoppingBasket,
            value: "45.5k",
            desc: "Customer active in our site",
            border: true,
          })}
          {StatCard({
            image: CiBag1,
            value: "25k",
            desc: "Annual gross sale in our site",
            border: true,
          })}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 my-[5rem]">
        {PersonCard({
          name: "Tom Cruise",
          image: "/person1.png",
          desc: "Founder & Chairman",
        })}
        {PersonCard({
          name: "Emma Watson",
          image: "/person2.png",
          desc: "Managing Director",
        })}
        {PersonCard({
          name: "Will Smith",
          image: "/person3.png",
          desc: "Product Designer",
        })}
      </div>
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
