"use client";

export default function Header() {
  return (
    <div className="h-[48px] text-[0.5rem] md:text-[1rem] bg-black text-white flex flex-row items-center justify-around p-4">
      <div></div>
      <h1 className="text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        {"  "}
        <a className="underline" href="#">
          Shop Now
        </a>
      </h1>
      <select className="bg-black text-white p-2 rounded-md active:border-none focus:border-none">
        <option>English</option>
        <option>Tamil</option>
        <option>Hindi</option>
      </select>
    </div>
  );
}
