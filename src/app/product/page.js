import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <section className="mt-10 md:mt-14 xl:mt-40">
      <h3 className="font-semibold text-center text-base md:text-xl xl:text-3xl">
        Our Product
      </h3>
      <div className="text-black mt-5 gap-4 flex flex-col px-9 md:flex-row-reverse xl:mt-10 xl:px-72 2xl:px-[600px]">
        <div className="bg-white rounded-2xl mx-auto text-center p-6 md:p-3">
          <Image
            src="/assets/images/product-mobile.png"
            width={225}
            height={120}
            className="inline-block w-44 md:w-48"
          />
          <h4 className="font-semibold font-rubik mt-6 md:text-lg md:mt-2">
            Mobile Apps
          </h4>
          <p className="text-xs mt-3 md:px-6 px-0 xl:px-16">
            Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur
            sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi
            kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.
          </p>
          <button className="bg-[#00AD98] rounded-lg py-2 px-4 font-semibold text-xs mt-7 text-white">
            Pelajari Selengkapnya
          </button>
        </div>
        <div className="gap-2 flex flex-col items-center md:gap-4 md:justify-evenly">
          <div className="bg-white rounded-xl flex px-6 py-7 items-center gap-2 md:w-72">
            <div className="shrink-0">
              <Image
                src="/assets/icons/ui-design.svg"
                width={60}
                height={60}
                className="w-10 xl:w-16"
              />
            </div>
            <div className="">
              <h4 className="font-semibold font-rubik">Mobile Apps</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="relative -bottom-5">
              <Image
                src="/assets/icons/arrow-right.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="bg-black border border-white rounded-xl flex px-3 py-4 items-center gap-2 text-white w-72 md:w-64">
            <div className="shrink-0">
              <Image
                src="/assets/icons/web-design.svg"
                width={60}
                height={60}
                className="w-10"
              />
            </div>
            <div className="">
              <h4 className="font-semibold font-rubik">Website</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="relative -bottom-5">
              <Image
                src="/assets/icons/arrow-right.svg"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
