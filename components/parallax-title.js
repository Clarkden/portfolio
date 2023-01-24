/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";

export default function ParalaxTitle({ offsetY }) {
  const { ref } = useParallax({ speed: -40 });
  return (
    <div
      ref={ref}
      className="w-full h-[100vh] flex flex-col justify-center items-center"
    >
      <div className="relative w-fit h-fit">
        <h1
          className={`leading-[50px] text-5xl md:leading-[110px] md:text-8xl lg:10xl font-semibold text-center lg:mb-20  text-transparent bg-gradient-to-br from-pink-300 via-sky-300 to-green-300 saturate-200 bg-clip-text bg-[length:200px_200px] md:bg-[length:400px_400px] animate-flowing-gradient ease-in-out repeat-infinite`}
        >
          Stunning <br></br>
          Web <br></br>
          Development
          <span className="">.</span>{" "}
        </h1>
      </div>
    </div>
  );
}
