import React from "react";
import Image from "next/image";

export default function WeWork() {
  return (
    <section className='bg-[url("/assets/images/bg-we-work.png")] mt-10 px-2 py-3 md:mt-15 xl:py-7 xl:px-72 2xl:px-[600px]'>
      <h3 className="text-center font-semibold pb-3 text-base md:text-xl xl:text-3xl">
        How We Work
      </h3>
      <div className='bg-[url("/assets/images/bg-we-work2.png")] py-7 px-6 flex flex-col rounded-lg gap-3 md:flex-row-reverse xl:mt-16 '>
        <div>
          <h4 className="font-semibold">Estimate</h4>
          <p className="text-sm mt-4">
            Estimate the cost of creating your application with us. Pricing is
            transparent at the start with a gradual payment method.
          </p>
        </div>
        <div className="bg-white py-7 px-4 rounded-lg flex flex-col gap-3 text-black">
          <div className="flex gap-2">
            <Image
              src="/assets/images/user1.png"
              width={34}
              height={34}
              className="h-8"
            />
            <div className="rounded-lg bg-[#D9D9D9] py-2 px-3">
              My name is Danny, I’m looking for profile website company
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-lg bg-[#D9D9D9] py-2 px-3">
              Hello Danny, thank to reaching out us. We are interested to your
              offer. Maybe we can set meeting
            </div>
            <Image
              src="/assets/images/user2.png"
              width={34}
              height={34}
              className="h-8"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/images/user1.png"
              width={34}
              height={34}
              className="h-8"
            />
            <div className="rounded-lg bg-[#D9D9D9] py-2 px-3">
              Sounds good, I have many desires to explain
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-lg bg-[#D9D9D9] py-2 px-3">
              How do I arrange our meeting on Monday at 10 WIB and my team will
              contact you again
            </div>
            <Image
              src="/assets/images/user2.png"
              width={34}
              height={34}
              className="h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
