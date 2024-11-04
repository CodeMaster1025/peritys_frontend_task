"use client";

import pageNavigation from "@/components/pageNavigation";
import axios from "axios";
import { ProductResp } from "@/types/products";
import { useState, useEffect } from "react";
import Card from "@/components/productCard";
import { useLoadingStore } from "@/store/loading";
import { useSearchParams } from "next/navigation";

const links = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
];

export default function Products() {
  const [products, setProducts] = useState<ProductResp[]>([]);
  const { startLoading, stopLoading } = useLoadingStore();

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const getProducts = async () => {
    try {
      startLoading();
      const res = await axios.get(
        `https://fakestoreapi.com/products${
          category ? `/category/${category}` : ""
        }`
      );
      const productData: ProductResp[] = res.data;
      setProducts(productData);
      stopLoading();
    } catch (error) {
      stopLoading();
      console.log(error);
      window.alert(error);
    }
  };

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-8 p-4 flex flex-col">
      {pageNavigation(links)}
      <div>
        <h1 className="text-4xl w-full text-center font-bold">Products</h1>
        <div className="flex flex-wrap mt-8 items-center justify-center gap-4">
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Card item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
