/* eslint-disable */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ParalaxTitle from "../components/parallax-title";
import Navigation from "../components/navigations";
import WhoAmI from "../components/whoAmI";
import Mywork from "../components/mywork";
import Contact from "../components/contact";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [navbarcolor, setnavbarcolor] = useState("bg-transparent");
  const [favicon, setfavicon] = useState("favicon.png");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 680) {
      setnavbarcolor("bg-black/25 backdrop-blur");
      setfavicon("red-dot.png");
    } else if (scrollPosition > 700 && scrollPosition < 1400) {
      setfavicon("green-dot.png");
    } else {
      setnavbarcolor("bg-transparent backdrop-blur-none");
      setfavicon("pink-dot.png");
    }
  }, [scrollPosition]);

  return (
    <div className="relative">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" type="image/x-con" href={favicon}></link>
        <meta property="og:title" content="Let's Create"></meta>
        <meta
          property="og:description"
          content="Clark Holden's web developing portfolio."
        ></meta>
        <meta property="og:image" content="spaceship.png" />
      </Head>
      <Navigation navbarcolor={navbarcolor} offsetY={scrollPosition} />

      <main className="h-fit w-full ">
        <ParalaxTitle offsetY={scrollPosition} />
        <WhoAmI />

        <Mywork />

        <Contact />
      </main>
      <footer className="w-11/12 px-8 pb-4 text-base font-light text-white">
        Copyright © 2022
      </footer>
    </div>
  );
}
