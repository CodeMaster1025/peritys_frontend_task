"use client";

import { Carousel } from "@mantine/carousel";
import Card from "@/components/productCard";
import CategoryCard from "./categoryCard";
import { ProductResp } from "@/types/products";
import { IconType } from "react-icons";

interface category {
  id: number;
  item: string;
  image: IconType;
}

type DataItem = ProductResp | category;

export default function CardsCarousel(data: DataItem[]) {
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      {isProduct(item) ? (
        <Card item={item as ProductResp} />
      ) : (
        <CategoryCard item={item as category} />
      )}
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "33.33%", md: "20%" }}
      slideGap={{ base: "xs", sm: "xs" }}
      align="start"
      slidesToScroll={3}
      withControls={true}
      dragFree
      controlSize={50}
    >
      {slides}
    </Carousel>
  );
}

function isProduct(item: DataItem): item is ProductResp {
  return (item as ProductResp).price !== undefined;
}