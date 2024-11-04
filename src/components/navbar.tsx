"use client";
import { useEffect, useState } from "react";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useAuthStore } from "@/store/auth";
import { Menu, Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState("/home");
  const { isLoggedIn, logout } = useAuthStore();

  const [login, setLogin] = useState(isLoggedIn);

  useEffect(() => {
    setLogin(isLoggedIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="h-[64px] border-b-2 text-[0.5rem] md:text-[1rem] flex flex-row items-center justify-around p-4">
      <a
        href="/"
        className=" font-inter font-bold text-[.75rem] md:text-[1.5rem]"
      >
        Exclusive
      </a>
      <nav className="block">
        <ul className="flex flex-row items-center space-x-4">
          <li>
            <a
              href="/"
              onClick={() => setActive("home")}
              className={`${
                active === "/" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              onClick={() => setActive("about")}
              className={`${
                active === "/about" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={() => setActive("contact")}
              className={`${
                active === "/contact" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/auth/signup"
              onClick={() => setActive("signup")}
              className={`${
                active === "/signup" ? " border-b-2 border-black py-2" : ""
              }`}
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-around gap-4">
        <div className="flex-row hidden md:flex items-center bg-[#F5F5F5]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] p-2 rounded-md outline-none"
          />
          <button>
            <CiSearch className="m-2 text-[1rem] md:text-[1.5rem]" />
          </button>
        </div>
        <div className="flex flex-row gap-2 items-center text-[1rem] md:text-[1.5rem]">
          <a href="/profile/cart">
            <IoCartOutline />
          </a>
          <div className="relative ">
            {login ? (
              <Menu
                trigger="click-hover"
                // offset={100}
                position="bottom"
                withArrow
                openDelay={100}
                closeDelay={400}
              >
                <Menu.Target>
                  <Button
                    variant="transparent"
                    color="black"
                    radius="xl"
                    size="compact-xl"

                    // padding="xs"
                    // leftIcon={<CiUser />}
                  >
                    <CiUser />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component="a" href="/profile">
                    Profile
                  </Menu.Item>
                  <Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <a href="/auth/login">
                <CiUser />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
