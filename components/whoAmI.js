/* eslint-disable */
import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax'
import Typewriter from 'typewriter-effect';

export default function WhoAmI() {

    return (
        <>

            <section id='whoAmI' className='h-[100vh] w-full bg-red-500 saturate-150'>
                <Parallax translateY={['200px', '-200px']} speed={-20} >
                    <img src='spaceship.png' className='md:w-[400px] absolute'></img>
                </Parallax>
                {/* <Parallax speed={-10} translateY={['400px', '200px']}> */}
                    <div className='bg-transparent flex flex-col justify-around md:flex-row md:justify-between md:items-center h-full md:h-[80%] w-11/12 md:w-2/3 mx-auto py-20 md:py-0'>
                        <div className='flex flex-col md:w-1/2'>
                            <h1 className='font-bold tracking-tighter text-lg sm:text-2xl md:text-3xl text-yellow-300  transition '>WHO AM I?</h1>
                            <h1 id='content'></h1>
                            <h1 className='font-bold text-3xl sm:text-4xl md:text-6xl'>
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Freelancer', 'Visionary'],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 1500
                                    }}
                                /></h1>
                        </div>
                        <div className='md:w-1/2 saturate-150'>
                            
                            <p className='font-semibold text-lg sm:text-xl md:text-2xl'>Hi, I'm <span className='text-yellow-400 font-bold drop-shadow-lg'>Clark</span>! I'm the one that's going to take your idea and <span className='text-yellow-400'>send it to the moon.</span> I'm a web developer working with frameworks like <span className='text-green-400'>React and Next Js</span>.</p>
                        </div>
                    </div>
                {/* </Parallax> */}
            </section>


        </>
    )
}
