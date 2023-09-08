import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="pl-7 mt-10 md:mt-32">
      <div className="flex w-60 md:w-[400px] xl:w-[800px]">
        <h1 className=" font-semibold md:text-2xl xl:text-5xl xl:leading-relaxed leading-none">
          Make Your Own<br></br> Website and Mobile Application With Nodewave
          <span>
            <Image
              src="/assets/icons/head-idea.svg"
              width={50}
              height={50}
              className="w-7 h-7 inline-block xl:w-10 xl:h-10"
            />
          </span>
        </h1>
        <div className="absolute left-4 top-16 md:top-[105px] md:left-3 xl:top-48">
          <Image
            src="/assets/icons/code-bold.svg"
            width={30}
            height={30}
            className="w-5 md:w-6 xl:w-8"
          />
        </div>
      </div>
      <div className="mt-2 pl-1">
        <button className="bg-[#00AD98] rounded-full p-2 font-semibold text-xs xl:text-base">
          Get Started Now
        </button>
      </div>
      <div className="w-72 mt-5 pl-1 md:w-[490px] xl:w-[600px]">
        <p className="text-xs md:text-sm xl:text-lg">
          Create Mobile Applications and Websites for Companies or Your Business
          Have a transparent pricing, easy and straightforward development
          process
        </p>
      </div>
    </section>
  );
}
