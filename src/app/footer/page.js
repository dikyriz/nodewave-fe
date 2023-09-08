import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" mt-10 pb-3 flex flex-col items-center font-poppins xl:mt-15 xl:pb-6">
      <Image
        src="/assets/images/Logo1.png"
        width={226}
        height={44}
        className="w-32 xl:w-40"
      />

      <div className="text-center mt-4 xl:mt-7">
        <div className="font-semibold mb-4 xl:mb-7">
          PT NODEWAVE SOLUSI TEKNOLOGI
        </div>

        <p className="font-semibold">Graha Pena Surabaya</p>
        <p className="font-semibold">Jl. Ahmad Yani no. 88 Surabaya</p>
        <p className="font-semibold">Phone: +62811258280</p>
        <p className="font-semibold">Email: support@nodewave.id</p>
      </div>
      <div className="flex gap-5 mt-5 xl:mt-7">
        <div>
          <Image src="/assets/icons/sos-fb.svg" width={30} height={30} />
        </div>
        <div>
          <Image src="/assets/icons/sos-tw.svg" width={30} height={30} />
        </div>
        <div>
          <Image src="/assets/icons/sos-yt.svg" width={30} height={30} />
        </div>
        <div>
          <Image src="/assets/icons/sos-lk.svg" width={30} height={30} />
        </div>
        <div>
          <Image src="/assets/icons/sos-ig.svg" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}
