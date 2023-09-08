import React from "react";
import Image from "next/image";

export default function Works() {
  return (
    <section className="mt-10 md:mt-15">
      <h3 className="font-semibold text-center text-base md:text-xl xl:text-3xl">
        Our Works
      </h3>
      <div className="mt-7 flex flex-col gap-4 pl-8 xl:flex-row">
        <div className="rounded-xl bg-[url('/assets/images/bg-works1.png')] pb-2 xl:bg-white xl:bg-cover">
          <div className=" flex flex-col md:flex-row md:items-center">
            <div className="md:p-5 p-0">
              <Image
                src="/assets/images/tm-works1.png"
                width={557}
                height={329}
                className="xl:h-64 h-full"
              />
            </div>
            <div className="text-center mt-2 md:mt-0 md:pr-2 pr-0">
              <h4 className="font-semibold">Rayu Motor</h4>
              <p className="mt-2 md:w-56 w-full xl:w-60">
                AC Service Workshop that has implemented online registration to
                make it easier for consumers, mechanics, and sales
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[url('/assets/images/bg-works2.png')] pb-2">
          <div className=" flex flex-col md:flex-row md:items-center">
            <div className="md:p-5 p-0">
              <Image
                src="/assets/images/tm-works2.png"
                width={557}
                height={329}
              />
            </div>
            <div className="text-center mt-2 md:mt-0 md:pr-2 pr-0">
              <h4 className="font-semibold">Work 2</h4>
              <p className="mt-2 md:w-56 w-full">Penjelasan</p>
              <button className="bg-[#00AD98] rounded-full py-2 px-4 font-semibold text-xs mt-3 md:text-sm">
                visit web
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
