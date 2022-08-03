/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCaretRight, faCaretLeft, faCircleDot } from '@fortawesome/free-solid-svg-icons'

const images = [{
    title: 'Title',
    description: 'Description',
    skills: 'skills',
    image: 'project1.png'
}, {
    title: 'Title',
    description: 'Description',
    skills: 'skills',
    image: 'project2.png'
}, {
    title: 'Title',
    description: 'Description',
    skills: 'skills',
    image: 'project3.png'
}]

export default function Mywork() {

    const [image, setImage] = useState(0)
    const [imageView, setImageView] = useState()
    // const [imageView, setImageView] = useState(images[image.image])

    const forward = () => {
        if (image < images.length - 1) {
            let count = image
            count += 1
            setImage(count)
        }
    }

    const backward = () => {
        if (image > 0) {
            let count = image
            count -= 1
            setImage(count)
        }
    }

    useEffect(() => {
        setImageView(<img src={images[image].image} className='max-h-[250px] animate-in fade-in animate-out fade-out duration-300'></img>)
    }, [image])

    return (

        <div  id='mywork' className='h-full flex flex-row relative w-full mx-auto items-center justify-center'>
            <FontAwesomeIcon icon={faCaretLeft} className=' text-4xl hover:cursor-pointer absolute left-0 text-black hover:scale-125 transition' onClick={() => backward()} />
            {/* <div className='h-[100%] mx-auto overflow-hidden'> */}
                {imageView}
            {/* </div> */}
            <div className='absolute bottom-5 flex flex-row gap-1'>

                {image === 0 ? <FontAwesomeIcon icon={faCircleDot} className='text-black' /> : <FontAwesomeIcon icon={faCircleDot} className='text-black/25' />}
                {image === 1 ? <FontAwesomeIcon icon={faCircleDot} className='text-black' /> : <FontAwesomeIcon icon={faCircleDot} className='text-black/25' />}
                {image === 2 ? <FontAwesomeIcon icon={faCircleDot} className='text-black' /> : <FontAwesomeIcon icon={faCircleDot} className='text-black/25' />}
            </div>
            <FontAwesomeIcon icon={faCaretRight} className='text-4xl hover:cursor-pointer absolute right-0 text-black hover:scale-125 transition' onClick={() => forward()} />
        </div>

    )
}
