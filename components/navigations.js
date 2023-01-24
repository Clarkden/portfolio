/* eslint-disable */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navigation({ navbarcolor, offsetY }) {

    const [menuheight, setmenuheight] = useState('scale-y-0')

    return (
        <div className={`${navbarcolor} duration-300 z-40 sticky top-0`}>
            <nav className={`flex flex-row items-center md:items-baseline justify-between w-11/12 h-[4vh] sm-h[8vh] md:h-[10vh] mx-auto py-8 md:py-5`}>
                <div className='relative group'>
                    <h1 className='font-semibold text-xl md:text-2xl text-white'>CLARK HOLDEN</h1>
                    {offsetY < 700 ? <div className='opacity-0 group-hover:opacity-100 top-10 absolute saturate-150 bg-green-300 p-2 transition-all w-[92vw] md:w-auto rounded-md md:rounded-full md:whitespace-nowrap'>
                        <p className='text-neutral-900 font-bold text-sm'>Stop looking at my name and check out my portfolio!</p>
                    </div> : null}
                </div>
                <div className='flex flex-row gap-2 items-center justify-between'>
                    <div className='flex flex-row gap-4 items-center ml-2'>
                        <a target="_blank" rel="noopener norefferer" href="https://twitter.com/clarkholden5?lang=en"><FontAwesomeIcon icon={faTwitter} className='text-white hover:scale-110 hover:text-green-300 saturate-200 transition hover:cursor-pointer text-2xl' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/clarkh_/'><FontAwesomeIcon icon={faInstagram} className='text-white hover:scale-110 hover:text-blue-300 hover:cursor-pointer text-2xl' /> </a>
                    </div>
                </div>
                
            </nav>
            
        </div>
    )
}
