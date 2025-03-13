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

export default function Projects() {
    const projects = [
        { id: 1, img: luxeurs, subtitle: "Ecommerce web", detail: "Luxeurs is a stylish e-commerce platform for men's and women's fashion, offering a sleek, user-friendly shopping experience.", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/903f4dbf1fbb4da8adf78873cbeecb21" },
        { id: 2, img: social, subtitle: "Social Media Web", detail: "Social media website is a dynamic platform for seamless user interaction, content sharing, and community engagement. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/2adf63f448f54ccabd61d0837972c4b0" },
        { id: 3, img: dine, subtitle: "Ecommerce web", detail: " Dine Market is an online shopping site offering a wide range of products with a seamless and user-friendly experience. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/cb4656a87dc54ec4839300c21104d0e8" },
        { id: 4, img: notes, subtitle: "Notes Taking App", detail: " Online notes-taking app is a fast and intuitive platform for creating, organizing, and managing notes efficiently. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/c38a512e988846698e9bf645bed68c01" },
        { id: 5, img: rmc1, subtitle: "AL Ain Raceway", detail: "Al Ain Raceway is a premier karting circuit in the UAE, known for its world-class track and thrilling racing experiences.  ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/22696088719f48899ce8026bd685b098" },
    ]

    return (
        <div id="portfolio" className='bg-dark'>

            <div  className="text-white h-fit text-center py-16 2xl:w-[96rem] 2xl:m-auto">
                <Title title1="Latest" title2="Projects" />
                <div className="flex justify-start flex-wrap  md:w-[95%] lg:w-[64rem] xl:w-[74rem] 2xl:w-[90rem] m-auto md:pl-7 lg:pl-3 mt-11 w-[90%]">
                    {projects.map((item, id) => (
                        <div key={id}
                            className="relative group md:m-3 xmd:m-4 bg-gray md:w-[45%] lg:w-[30%] md:h-[50%] rounded-lg shadow-effect overflow-hidden my-4  "
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt="project-logo"
                                className="h-full w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* show on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-1 xs:p-2  sm:px-5 md:p-2">
                                <h3 className="text-white text-lg lg:text-lg font-bold xs:text-3xl  2xl:text-3xl ">{item.subtitle}</h3>
                                <p className="text-white text-[11px] text-sm lg:mt-0 xs:text-[18px] my-1 xs:my-4 md:my-1 md:text-sm lg:my-0 lg:leading-4 xl:my-2 2xl:text-lg">{item.detail}</p>
                                <Link href={item.link} target="_blank">
                                    <IoMdOpen className="w-[36px] h-[36px] rounded-full p-2 bg-white text-black sm:mt-1 lg:mt-0 hover:bg-gray-200 transition" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
