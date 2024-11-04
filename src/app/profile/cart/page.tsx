"use client";
import pageNavigation from "@/components/pageNavigation";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/types/products";

const links = [
  { name: "Home", url: "/" },
  { name: "Cart", url: "/profile/cart" },
];

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { changeQuantity } = useCartStore();
  return (
    <div className="grid grid-cols-4 max-h-[120px] items-center text-center border border-sm rounded-md px-4 w-full max-w-[1000px]">
      <div className="col-span-1 text-left flex flex-row items-center justify-end">
        <Image
          src={item.image}
          height={50}
          width={70}
          alt={item.title}
          className="max-w-[50px] h-full hidden md:block"
        />
        <p className="line-clamp-3">{item.title}</p>
      </div>
      <div className="col-span-1">{item.price}</div>
      <div className="col-span-1 border items-center px-2 gap-4 border-black rounded-md flex flex-row w-fit place-self-center">
        {item.quantity}
        <div className="flex flex-col">
          <button
            onClick={() => {
              changeQuantity(item.id, item.quantity + 1);
            }}
          >
            △
          </button>
          <button
            onClick={() => {
              changeQuantity(item.id, item.quantity - 1);
            }}
          >
            ▽
          </button>
        </div>
      </div>
      <div className="col-span-1 text-right">{item.price * item.quantity}</div>
    </div>
  );
};

export default function Cart() {
  const { cart } = useCartStore();

  const cartTotal = () => {
    let total = 0;
    cart.products.map((product, index) => {
      total = total + product.price * product.quantity;
    });
    return total;
  };

  return (
    <div className="flex flex-col mb-6 p-4">
      {pageNavigation(links)}
      <div className="flex flex-col items-center justify-center gap-12 mb-12">
        <h1 className="text-4xl w-full text-center font-bold">
          Your Cart Items
        </h1>
        <div className="grid grid-cols-4 text-center shadow-orange-500 border border-sm rounded-md p-4 w-full max-w-[1000px]">
          <div className="col-span-1 text-left">Product</div>
          <div className="col-span-1">Price</div>
          <div className="col-span-1">Quantity</div>
          <div className="col-span-1 text-right">Total</div>
        </div>
        <div className="flex flex-wrap mt-8 items-center justify-center gap-4">
          {cart.products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <CartItemCard item={product} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center self-center justify-between">
        <button className="border border-black rounded-md p-4 text-center">
          Return to Shop
        </button>
        <div className="flex flex-col gap-4 w-full max-w-[500px] border border-black rounded-md p-4 items-center">
          <h1 className="text-[1rem] font-bold mb-4 text-left w-full">
            Cart Total
          </h1>
          <div className="flex w-full flex-row border-b border-black items-center justify-between">
            <p>Subtotal</p>
            {cartTotal()}
          </div>
          <div className="flex w-full flex-row border-b border-black items-center justify-between">
            <p>Shipping</p>
            Free
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <p>Total</p>
            {cartTotal()}
          </div>
        </div>
      </div>
    </div>
  );
}
