import Image from "next/image";
import Header from "./header/page";
import Landing from "./landing/page";
import Product from "./product/page";
import Testimony from "./testimony/page";
import Works from "./works/page";
import WeWork from "./wework/page";
import Applications from "./applications/page";
import ForYou from "./foryou/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-poppins">
        <Landing />
        <Product />
        <Testimony />
        <Works />
        <WeWork />
        <Applications />
        <ForYou />
      </main>
      <Image
        src="/assets/images/bg.png"
        width={300}
        height={800}
        className="w-full absolute -z-10 top-0 h-[293px] md:h-[350px] xl:h-[620px]"
      />
      <Footer />
    </>
  );
}
