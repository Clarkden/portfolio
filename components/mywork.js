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
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if(modal)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "auto";
  }, [modal])

  return (
    <section className="h-[100vh] flex flex-col md:flex-row">
      {modal && (
        <div className="w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center">
          <div className="bg-neutral-900 rounded-lg p-5 relative max-h-[70vh] max-w-[90vw] md:max-h-[90vh] md:max-w-[55vw] overflow-scroll border-[1px] border-gray-500">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-semibold">
                {modalData?.title}
              </h1>
              <button
                className="top-2 right-5"
                onClick={() => {
                  setModal(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-400 hover:scale-105 transition duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-neutral-400 text-lg leading-snug tracking-wide font mt-2">
              <h1>{modalData?.description}</h1>
            </div>
            {modalData?.images.map((image, index) => (
              <div className="w-full h-[400px] overflow-hidden rounded-lg mt-5">
                <img src={image} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-transparent w-full md:w-1/2 bg-purple-900 saturate-200 h-full flex flex-col justify-center items-center">
        <div className="w-11/12 mx-auto md:w-2/3 ">
          <h1 className="font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl text-red-400">
            SO...?
          </h1>
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
            That means from landing pages to ecommerce sites,{" "}
            <span className="text-red-400 font-extrabold drop-shadow-md">
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
              >
                <SwiperSlide>
                  <div
                    className="cursor-pointer h-full bg-orange-400 flex flex-col items-center justify-center"
                    onClick={() => {
                      setModal(true);
                      setModalData({
                        title: "Mad Vibes Ecommerce Website",
                        description:
                          "Complete ecommerce site built with Next.js and shopify headless backend for client. Complete custom css using tailwind css.",
                        images: [
                          "mad_vibes.png",
                          "mad_vibes2.png",
                        ]
                      });
                    }}
                  >
                    <img src="mad_vibes.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="cursor-pointer h-full flex items-center justify-center"
                    onClick={() => {
                      setModal(true);
                      setModalData({
                        title: "Digital Initiative Website",
                        description:
                          "Digital Marketing Agency Website built with Next.js and tailwind css.",
                        images: [
                          "digital_initiative.png",
                          "digital_initiative2.png",
                        ],
                      });
                    }}
                  >
                    <img src="digital_initiative.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setModal(true);
                      setModalData({
                        title: "Exposed",
                        description: "Project mockup for client made in figma.",
                        images: ["project4.png"]
                      });
                    }}
                  >
                    <img src="project4.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setModal(true);
                      setModalData({
                        title: "Entertainment Sports Agency",
                        description: "Website for emerging sports agency built with Next.js and tailwind css.",
                        images: ["project1.png"]
                      });
                    }}
                  >
                    <img src="project1.png"></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setModal(true);
                      setModalData({
                        title: "Soundman Productions",
                        description: "Audio and beat selling websites built with Next.js and tailwind css.",
                        images: ["project2.png"]
                      });
                    }}
                  >
                    <img src="project2.png"></img>
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
