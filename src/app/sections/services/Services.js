"use client"
import React from 'react'
import Button from '@/app/components/botton/Button'
import Subtitle from '@/app/components/subtitle/Subtitle'
import Title from '@/app/components/title/Title'
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
    const [more, setMore] = useState();

    const cards = [
        { id: 1, img: <FaCode className='h-full w-full p-3' />, heading: <Subtitle subtitle="Front-end Development" />, detail: "I develop fully responsive and dynamic websites using cutting-edge technologies such as React.js and Next.js. Whether it’s a single-page application (SPA) or a multi-page website, I ensure seamless navigation and smooth performance across all devices.", more: " My goal is to create web experiences that captivate users while maintaining clean and efficient code." },
        { id: 2, img: <MdOutlineDesignServices className='h-full w-full p-2' />, heading: <Subtitle subtitle="UI/UX Implementation" />, detail: "A great design deserves a flawless implementation. I specialize in converting Figma, Adobe XD, and Sketch designs into functional, pixel-perfect web applications. I focus on maintaining design integrity while ensuring usability and interactivity.", more: "Additionally, I integrate modern UI libraries and frameworks to enhance the user experience." },
    ]


    return (
        <div className=' bg-gray'>
            <div id='services' className=' text-white h-fit py-16  2xl:w-[96rem] 2xl:m-auto '>
                <div className='text-center'>
                    <Title title1="Our" title2="Services" />
                </div>
                <div className='md:flex justify-evenly mt-11'>
                    {cards.map((card, id) => {
                        return (
                            // <div key={id} className='    bg-dark  md:p-11 w-[40%]  '>
                               <div key={id} className='flex flex-col justify-evenly items-center shadow-effect lg:p-11 cursor-pointer rounded-xl w-[90%] m-auto sm:px-11 md:px-3 mb-6 md:w-[44%] md:m-0 lg:w-[38%] p-3 py-11'>
                               <div className='h-[70px] w-[70px] border md:my-3 text-blue rounded-lg'>
                                    {card.img}
                                </div>
                                <h1>{card.heading}</h1>
                                <p className='text-slate-200 text-center'>{card.detail}</p>
                                {more && (
                                    <p><br /> {card.more}</p>
                                )}
                                <button onClick={() => { setMore(!more) }} className='p-2 px-4 mt-7 hover:text-white shadow-blue shadow-effect bg-blue text-black rounded-full'>Read More</button>
                               </div>
                            // </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
