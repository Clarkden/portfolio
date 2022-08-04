/* eslint-disable */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navigation({ navbarcolor, offsetY }) {

    const [menuheight, setmenuheight] = useState('scale-y-0')

    return (
        <div className={`${navbarcolor} transition-all duration-300 z-40 sticky top-0`}>
            <nav className={`flex flex-row items-center md:items-baseline justify-between w-11/12 h-[4vh] sm-h[8vh] md:h-[10vh] mx-auto py-8 md:py-5`}>
                <div className='relative group'>
                    <h1 className='font-semibold text-base small:text-lg md:text-xl text-white'>CLARK HOLDEN</h1>
                    {offsetY < 700 ? <div className='opacity-0 group-hover:opacity-100 top-10 absolute saturate-150 bg-green-300 p-2 transition-all w-[92vw] md:w-auto rounded-md md:rounded-full md:whitespace-nowrap'>
                        <p className='text-neutral-900 font-bold text-sm'>Stop looking at my name and check out my portfolio!</p>
                    </div> : null}
                </div>
                <div className='hidden md:flex md:flex-row md:gap-2 transition'>
                    <a href='#whoAmI' className='font-light text-base text-white hover:text-pink-300'>ABOUT</a>
                    <a href='#mywork' className='font-light text-white hover:text-sky-300'>WORK</a>
                    <a href='#contact' contact className='font-light text-white hover:text-green-300'>CONTACT</a>
                    <div className='flex flex-row gap-2 items-center ml-2'>
                        <FontAwesomeIcon icon={faTwitter} className='text-white hover:scale-110 hover:cursor-pointer' />
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/clarkh_development/'><FontAwesomeIcon icon={faInstagram} className='text-white hover:scale-110 hover:cursor-pointer' /> </a>
                    </div>
                </div>
                <div className='block md:hidden'>
                    <FontAwesomeIcon icon={faBars} className='text-white' onClick={() => { menuheight === 'scale-y-100' ? setmenuheight('scale-y-0') : setmenuheight('scale-y-100') }} />
                </div>
            </nav>
            <div className={`flex flex-col md:hidden ${menuheight} absolute left-4 transition origin-top-left duration-500 py-2`}>
                <a href='#whoAmI' className='font-light text-base text-white hover:text-pink-300'>ABOUT</a>
                <a href='#mywork' className='font-light text-white hover:text-sky-300'>WORK</a>
                <a href='#contact' className='font-light text-white hover:text-green-300'>CONTACT</a>
                <div className='flex flex-row gap-2 mt-1 items-center'>
                    <FontAwesomeIcon icon={faTwitter} className='text-white hover:scale-110 hover:cursor-pointer' />
                    <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/clarkh_development/'><FontAwesomeIcon icon={faInstagram} className='text-white hover:scale-110 hover:cursor-pointer' /></a>
                </div>
            </div>
        </div>
    )
}
