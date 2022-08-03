/* eslint-disable */
import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        // <Parallax speed={20} >
        <div className='h-fit gap-5 md:gap-0 py-10 md:py-0 md:h-[70vh] w-11/12 mx-auto flex flex-col md:flex-row md:justify-around items-center saturate-150'>
            <div className='w-11/12 mx-auto md:w-1/2 md:pr-14 flex flex-col gap-3'>
                <h3 className='font-semibold text-xl text-green-400 mb-2'>CONTACT</h3>
                <h1 className='font-extrabold text-3xl md:text-4xl text-white'>Got an idea you <br></br>you're ready to see made?</h1>
                <p className='md:text-xl font-light text-gray-400'>Buckle up, this ride to your finished product is going to be a fun one. Start by telling me your idea!</p>
                <div className='flex flex-row gap-2 items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='text-green-400 text-xl'/>
                <a href='mailto:clark_holden@icloud.com' className='text-green-400 text-base font-light'>clark_holden@icloud.com</a>
                </div>
            </div>
            <form className='flex flex-col gap-5 w-11/12 mx-auto md:w-1/2'>
                <input id='name' name='name' type='text' placeholder='Your Name' className=' placeholder:text-neutral-400 md:placeholder:text-lg md:w-11/12 bg-black/25 p-2 rounded-md outline-none border-2 border-black/0 ] border-l-green-400 focus:border-green-400/75 transition'></input>
                <input id='email' name='email' type='email' placeholder='Your Email' className='placeholder:text-neutral-400 md:placeholder:text-lg md:w-11/12 bg-black/25 p-2 rounded-md outline-none border-2 border-black/0 ] border-l-green-400 focus:border-green-400/75 transition'></input>
                <textarea placeholder='Message' className='placeholder:text-neutral-400 md:placeholder:text-lg md:w-11/12 bg-black/25 p-2 rounded-md outline-none border-2 border-black/0 ] border-l-green-400 focus:border-green-400/75 transition h-36 resize-none'></textarea>
                <button className='p-2 bg-neutral-700 rounded-lg drop-shadow-lg font-bold text-lg text-white md:w-11/12'>GO!</button>
            </form>
        </div>
        // </Parallax>
    )
}
