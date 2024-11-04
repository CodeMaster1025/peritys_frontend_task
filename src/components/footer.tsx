"use client";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (email === "") {
      alert("Please fill out all fields.");
      return;
    }
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("You have successfully subscribed to our newsletter.");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="text-[0.5rem] md:text-[1rem] bg-black text-white flex flex-col items-center justify-around p-4">
      <div className="flex flex-col md:flex-row gap-8 mb-4">
        <div className="flex flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-bold text-[1.5rem]">Exclusive</h1>
            <p className="font-bold text-[1.2rem]">Subscribe</p>
            <p>Get 10% off on your first order</p>
            <div className="flex flex-row items-center justify-center border border-white">
              <input
                type="email"
                className="bg-black text-white p-2 outline-none"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  handleSubscribe();
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-bold text-[1.5rem]">Support</h1>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="font-bold text-[1.5rem]">Account</h1>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/profile">My Account</a>
                </li>
                <li>
                  <a href="/auth/login">Login / Register</a>
                </li>
                <li>
                  <a href="/">Cart</a>
                </li>
                <li>
                  <a href="/">Wishlist</a>
                </li>
                <li>
                  <a href="/">Shop</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="font-bold text-[1.5rem]">Quick Link</h1>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms Of Use</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="font-bold text-[1.5rem]">Download App</h1>
            <p>Save $3 with app, New user only</p>
            <div className="flex flex-row gap-2">
              <Image
                src="/DownloadQR.svg"
                alt="QR Code"
                className="w-[80px] h-[80px]"
                height={80}
                width={80}
              />
              <div className="flex flex-col gap-2">
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  className="w-[100px] h-[40px]"
                  height={40}
                  width={100}
                />
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  className="w-[100px] h-[40px]"
                  height={40}
                  width={100}
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="/facebook.png"
                alt="Facebook"
                className="w-[40px] h-[40px]"
                height={40}
                width={40}
              />
              <Image
                src="/twitter.png"
                alt="Twitter"
                className="w-[40px] h-[40px]"
                height={40}
                width={40}
              />
              <Image
                src="/instagram.png"
                alt="Instagram"
                className="w-[40px] h-[40px]"
                height={40}
                width={40}
              />
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-[40px] h-[40px]"
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-[50%] items-center flex flex-row justify-center border-t-2 w-full h-[48px]">
        &#169; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}
