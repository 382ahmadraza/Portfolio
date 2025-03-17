import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdOpen } from "react-icons/io";
import Title from '@/app/components/title/Title'
import luxeurs from "../../assets/lux.PNG"
import social from "../../assets/social.PNG"
import dine from "../../assets/dine.PNG"
import notes from "../../assets/notes.PNG"
import rmc1 from "../../assets/race.PNG"
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        { id: 1, img: luxeurs, subtitle: "Ecommerce web", detail: "Luxeurs is a stylish e-commerce platform for men's and women's fashion, offering a user-friendly shopping experience.", link: "https://www.loom.com/share/903f4dbf1fbb4da8adf78873cbeecb21" },
        { id: 2, img: social, subtitle: "Social Media Web", detail: "Social media website is a dynamic platform for seamless user interaction, content sharing, and community engagement.", link: "https://www.loom.com/share/2adf63f448f54ccabd61d0837972c4b0" },
        { id: 3, img: dine, subtitle: "Ecommerce web", detail: "Dine Market is an online shopping site offering a wide range of products with a seamless and user-friendly experience.", link: "https://www.loom.com/share/cb4656a87dc54ec4839300c21104d0e8" },
        { id: 4, img: notes, subtitle: "Notes Taking App", detail: "Online notes-taking app is a fast and intuitive platform for creating, organizing, and managing notes efficiently.", link: "https://www.loom.com/share/c38a512e988846698e9bf645bed68c01" },
        { id: 5, img: rmc1, subtitle: "AL Ain Raceway", detail: "Al Ain Raceway is a premier karting circuit in the UAE, known for its world-class track and thrilling racing experiences.", link: "https://www.loom.com/share/22696088719f48899ce8026bd685b098" },
    ];

    return (
        <div id="portfolio" className='bg-dark'>
            <div className="text-white h-fit text-center py-16 2xl:w-[96rem] 2xl:m-auto ">
                <Title title1="Latest" title2="Projects" />
                <motion.div 
                    className="flex justify-start flex-wrap md:w-[95%] lg:w-[64rem] xl:w-[74rem] 2xl:w-[90rem] m-auto md:pl-7 lg:pl-3 mt-11 w-[85%] "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }} // Smooth fade-in for the container
                >
                    {projects.map((item, id) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            className="relative border w-[100%] transition-transform duration-300 group md:m-3 xmd:m-4 bg-gray md:w-[45%] lg:w-[30%] md:h-[50%] rounded-lg overflow-hidden my-4 hover:shadow-effect"
                        >
                            <Link href={item.link} target="_blank">
                                {/* Image */}
                                <motion.div 
                                    whileHover={{ scale: 1.08 }} 
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <Image src={item.img} alt="project-logo" className="md:h-full w-full rounded-lg mb-2" />
                                </motion.div>

                                {/* Details */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="text-white bg-gradient-to-t from-blue duration-300 flex flex-col items-cente text-start p-2 xs:p-3 md:p-3 xl:p-4"
                                >
                                    <h3 className="text-2xl font-bold xs:text-4xl sm:text-5xl md:text-3xl 2xl:text-4xl">
                                        {item.subtitle}
                                    </h3>
                                    <p className="text-sm lg:mt-0 xs:text-[18px] my-2 xs:my-5 sm:text-xl sm:my-4 md:my-1 md:text-sm lg:my-0 xl:my-2 2xl:text-lg">
                                        {item.detail}
                                    </p>
                                    <motion.button 
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="bg-white text-blue p-2 px-4 rounded hover:bg-blue hover:text-white xl:my-2 w-fit"
                                    >
                                        Live Demo
                                    </motion.button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
