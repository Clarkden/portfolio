/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import ParalaxTitle from '../components/parallax-title';
import Navigation from '../components/navigations';
import WhoAmI from '../components/whoAmI';
import Mywork from '../components/mywork';
import Contact from '../components/contact';



export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  const [navbarcolor, setnavbarcolor] = useState('bg-transparent')
  const [favicon, setfavicon] = useState('favicon.png')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 680) {
      setnavbarcolor('bg-black/25 backdrop-blur')
      setfavicon('red-dot.png')
    }
    else if (scrollPosition > 700 && scrollPosition < 1400) {
      setfavicon('green-dot.png')
    }
    else {
      setnavbarcolor('bg-transparent backdrop-blur-none')
      setfavicon('pink-dot.png')
    }
  }, [scrollPosition])

  return (
    <div className='relative'>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' type="image/x-con" href={favicon}></link>
        <meta property="og:title" content="Let's Create"></meta>
        <meta property="og:description" content="Clark Holden's web developing portfolio."></meta>
        <meta property="og:image" content="spaceship.png"/>
      </Head>
      <Navigation navbarcolor={navbarcolor} offsetY={scrollPosition} />

      <main className='h-fit w-full '>

        <ParalaxTitle offsetY={scrollPosition} />
        <WhoAmI />
        <section className='h-fit flex flex-col md:flex-row'>
          <div className='bg-transparent w-full md:w-1/2 bg-purple-900 saturate-200 h-[50vh] flex flex-col justify-center items-center'>
            <div className='w-11/12 mx-auto md:w-2/3 '>
              <h1 className='font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl text-red-400'>SO...?</h1>
              <h1 className='font-semibold text-lg sm:text-xl md:text-2xl text-white'>That means <span className='text-red-400 font-extrabold drop-shadow-md'>no matter</span> if the project is a simple one page site or a complex web app, I can get it done.</h1>
            </div>

          </div>
          <div className='w-full md:w-1/2 h-[50vh] bg-orange-400'>
            <div className='w-11/12 mx-auto md:w-full h-full md:px-5'>
              <Mywork />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className='w-11/12 px-8 pb-4 text-base font-light text-white'>
        Copyright © 2022
      </footer>
    </div>
  )
}
