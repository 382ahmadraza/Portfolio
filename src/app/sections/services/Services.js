"use client"
import React, { useState } from 'react'
import Button from '@/app/components/botton/Button'
import Subtitle from '@/app/components/subtitle/Subtitle'
import Title from '@/app/components/title/Title'
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Services() {
    const [more, setMore] = useState(false);

    const cards = [
        {
            id: 1,
            img: <FaCode className='h-full w-full p-3' />,
            heading: <Subtitle subtitle="Front-end Development" />,
            detail: "I develop fully responsive and dynamic websites using cutting-edge technologies such as React.js and Next.js. Whether it’s a single-page application (SPA) or a multi-page website, I ensure seamless navigation and smooth performance across all devices.",
            more: " My goal is to create web experiences that captivate users while maintaining clean and efficient code."
        },
        {
            id: 2,
            img: <MdOutlineDesignServices className='h-full w-full p-2' />,
            heading: <Subtitle subtitle="UI/UX Implementation" />,
            detail: "A great design deserves a flawless implementation. I specialize in converting Figma, Adobe XD, and Sketch designs into functional, pixel-perfect web applications. I focus on maintaining design integrity while ensuring usability and interactivity.",
            more: "Additionally, I integrate modern UI libraries and frameworks to enhance the user experience."
        },
    ];

    return (
        <div className='bg-gray'>
            <motion.div
                id='services'
                className='text-white h-fit py-16 2xl:w-[96rem] 2xl:m-auto'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className='text-center'>
                    <Title title1="Our" title2="Services" />
                </div>

                <motion.div
                    className='md:flex justify-evenly mt-11'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                        hidden: {}
                    }}
                >
                    {cards.map((card, id) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className='flex flex-col justify-evenly items-center shadow-effect lg:p-11 cursor-pointer rounded-xl w-[90%] m-auto sm:px-11 md:px-3 mb-6 md:w-[44%] md:m-0 lg:w-[38%] p-3 py-11'
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className='h-[70px] w-[70px] border md:my-3 text-blue rounded-lg'
                            >
                                {card.img}
                            </motion.div>

                            <h1>{card.heading}</h1>
                            <p className='text-slate-200 text-center'>{card.detail}</p>

                            {more && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <br /> {card.more}
                                </motion.p>
                            )}

                            {/* Animated "Read More" Button */}
                            <motion.button
                                onClick={() => setMore(!more)}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className='p-2 px-4 mt-7 hover:text-white shadow-blue shadow-effect bg-blue text-black rounded-full'
                            >
                                Read More
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
