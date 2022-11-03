/* eslint-disable */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehanceSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCaretRight,
  faCaretLeft,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Mywork() {
  return (
    <section className='h-[100vh] flex flex-col md:flex-row'>
      <div className="bg-transparent w-full md:w-1/2 bg-purple-900 saturate-200 h-full flex flex-col justify-center items-center">
        <div className="w-11/12 mx-auto md:w-2/3 ">
          <h1 className="font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl text-red-400">
            SO...?
          </h1>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
            That means{" "}
            from landing pages to ecommerce sites, <span className="text-red-400 font-extrabold drop-shadow-md">
               I can get it done.
            </span>{" "}
    
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[50vw] h-full bg-orange-400">
        <div className="w-11/12 mx-auto md:w-full h-full md:px-5">
          <div
            id="mywork"
            className="h-full flex flex-row w-full mx-auto items-center justify-center"
          >
            <div className="bottom-5 flex flex-row gap-1">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                direction="horizontal"
                className="w-[95vw] md:w-[48vw]"
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="">
                    <img src="mad_vibes.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src="mad_vibes2.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src="digital_initiative.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <img src="digital_initiative2.png"></img>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
