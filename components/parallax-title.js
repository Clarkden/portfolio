/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useParallax } from 'react-scroll-parallax'


export default function ParalaxTitle({ offsetY }) {
    const { ref } = useParallax({ speed: -40 });
    return (
        <div ref={ref} className='w-full h-[90vh] flex flex-col justify-center items-center'>
            <div className='relative w-fit h-fit'>
                <h1 className={`leading-[50px] text-5xl md:leading-[110px] md:text-8xl lg:10xl font-semibold text-white saturate-200 text-center  lg:mb-20 transform `}><span className={`text-pink-300`}>Stunning</span> <br></br><span className='text-sky-300'>Web</span> <br></br><span className='text-green-300'>Development</span><span className='text-yellow-300'>.</span> </h1>
                {/* <div className='absolute bottom-[0] right-[0]'>
                    <p className='text-sm font-extralight text-white translate-x-10 bottom-[70%] right-[5%]  md:bottom-[40%] md:right-[23%]'>Period</p>
                    <img src="arrow.png" className='w-16'></img>
                </div> */}
            </div>
        </div>
    )
}
