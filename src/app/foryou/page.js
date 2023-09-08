import React from "react";
import Image from "next/image";

export default function ForYou() {
  return (
    <section>
      <h3 className="text-center font-semibold text-lg px-2 xl:text-3xl xl:mt-16">
        Start Creating Websites or Mobile Apps For You Now
      </h3>
      <div className="text-black px-3 mt-3 pb-2 flex flex-col gap-4 md:mt-5 md:flex-row xl:justify-center xl:mt-10">
        <div className="bg-white rounded-lg flex">
          <div className="text-center py-2 w-44 xl:w-52  xl:my-auto">
            <h4 className="font-semibold text-xl xl:text-2xl">Website</h4>
            <h5 className="font-semibold mt-2">Start From</h5>
            <span className="text-[#717171] relative line-through decoration-red-600 block">
              Rp,1.000.000
              <span className="absolute right-4 -top-1 xl:right-12 md:right-6">
                <Image
                  src="/assets/icons/shopping-sale.svg"
                  width={20}
                  height={20}
                />
              </span>
            </span>
            <span className="block">Rp.500.000</span>
            <button className="bg-[#00AD98] rounded-full px-4 mt-5 text-white text-sm xl:py-2 xl:px-6">
              Order Now
            </button>
          </div>
          <Image
            src="/assets/images/img-create2.png"
            width={242}
            height={338}
            className="h-44 xl:h-80"
          />
        </div>
        <div className="bg-white rounded-lg flex">
          <div className="text-center py-2 w-44 xl:w-52  xl:my-auto">
            <h4 className="font-semibold text-xl xl:text-2xl">Mobile Apps</h4>
            <h5 className="font-semibold mt-2">Start From</h5>
            <span className="text-[#717171] relative  block">
              Rp,999.000
              <span className="absolute right-4 -top-1 hidden">
                <Image
                  src="/assets/icons/shopping-sale.svg"
                  width={20}
                  height={20}
                />
              </span>
            </span>
            <span className=" hidden">Rp.500.000</span>
            <button className="bg-[#00AD98] rounded-full px-4 mt-5 text-white text-sm xl:py-2 xl:px-6">
              Order Now
            </button>
          </div>
          <Image
            src="/assets/images/img-create1.png"
            width={242}
            height={338}
            className="h-44 xl:h-80"
          />
        </div>
      </div>
    </section>
  );
}
