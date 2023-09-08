import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 pt-4 md:pt-2 flex justify-between items-center font-poppins xl:py-6">
      <div>
        <Image
          src="/assets/images/Logo1.png"
          width={226}
          height={44}
          className="w-40"
        />
      </div>
      <div className="hidden md:block ">
        <ul className="text-white gap-5 flex flex-col pt-5 md:pt-0  md:flex-row md:items-center">
          <li>Website</li>
          <li>Mobile Apps</li>
          <li>Portfolio</li>
          <div className="bg-[#00AD98] rounded-full py-2 px-5 md:py-1">
            <li>Make an App</li>
          </div>
        </ul>
      </div>
      <div className="md:hidden block">
        <Image
          src="/assets/icons/burger.svg"
          width={30}
          height={40}
          className="text-white"
        />
      </div>
    </header>
  );
}
