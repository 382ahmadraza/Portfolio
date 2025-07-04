"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/app/components/title/Title';
import luxeurs from "../../assets/lux.PNG";
import social from "../../assets/social.PNG";
import dine from "../../assets/dine.PNG";
import notes from "../../assets/notes.PNG";
import rmc1 from "../../assets/race.PNG";
import { motion } from 'framer-motion';

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const projects = [
    { id: 1, buildin: 'next', img: '/assets/pr.avif', subtitle: "PR Flats", detail: "PR Flats is a modern real estate web app for exploring rental properties with a clean, responsive UI.It leverages Strapi CMS for dynamic content and PostgreSQL for efficient data management.", link: "https://pr-flats.vercel.app/" },
    { id: 3, buildin: 'next', img: '/assets/hospital.avif', subtitle: "Hospital System", detail: "Hospital Website is an informative and user-friendly platform for showcasing hospital services, departments, doctors, and management. It features a clean layout with structured sections and responsive design.", link: "https://ar-hospital-amber.vercel.app/" },
    { id: 2, buildin: 'ai', img:'/assets/finance.avif', subtitle: "Finance Ai Coach", detail: "Finance AI Coach is a smart financial management app that helps users track budgets, goals, and transactions.It features AI insights, OCR receipt scanning, and a clean, intuitive dashboard.", link: "https://euphonious-sunburst-7f01cd.netlify.app/" },
    { id: 4, buildin: 'next', img: luxeurs, subtitle: "Luxeurs", detail: "Luxeurs is a stylish e-commerce platform for men's and women's fashion, offering a user-friendly shopping experience.", link: "https://www.loom.com/share/903f4dbf1fbb4da8adf78873cbeecb21" },
    { id: 5, buildin: 'react', img: '/assets/wretoo.avif', subtitle: "Wretoo", detail: "Social media website is a dynamic platform for seamless user interaction, content sharing, and community engagement.", link: "https://wretto-51v5.vercel.app/" },
    { id: 6, buildin: 'react', img: social, subtitle: "Social Media Web", detail: "Social media website is a dynamic platform for seamless user interaction, content sharing, and community engagement.", link: "https://www.loom.com/share/2adf63f448f54ccabd61d0837972c4b0" },
    { id: 7, buildin: 'react', img: dine, subtitle: "Dine Market", detail: "Dine Market is an online shopping site offering a wide range of products with a seamless and user-friendly experience.", link: "https://www.loom.com/share/cb4656a87dc54ec4839300c21104d0e8" },
    { id: 8, buildin: 'react', img: notes, subtitle: "Notes Taking App", detail: "Online notes-taking app is a fast and intuitive platform for creating, organizing, and managing notes efficiently.", link: "https://www.loom.com/share/c38a512e988846698e9bf645bed68c01" },
    { id: 9, buildin: 'next', img: rmc1, subtitle: "AL Ain Raceway", detail: "Al Ain Raceway is a premier karting circuit in the UAE, known for its world-class track and thrilling racing experiences.", link: "https://www.loom.com/share/22696088719f48899ce8026bd685b098" },
    { id: 10, buildin: 'ai', img:'/assets/bp.avif' , subtitle: "BP Fuel", detail: "BP Fuel is a smart health monitoring app that predicts blood pressure using machine learning models.It offers a clean React-based frontend connected to a Python-powered AI backend via API.", link: "https://visionary-cobbler-dcc02a.netlify.app/" },
    { id: 11, buildin: 'ai', img:'/assets/polibot.avif', subtitle: "Polibot", detail: "PoliBot is an AI-powered chatbot designed to answer political queries and provide election-related insights.It uses natural language processing to deliver accurate, unbiased responses in real time.", link: "https://lablab.ai/event/execute-ai-genesis/tech-aspirant/polibot" },
  ];

  const tabs = [
    { label: "All Projects", value: "all" },
    { label: "Next.js", value: "next" },
    { label: "React.js", value: "react" },
    { label: "AI Hackathons", value: "ai" }, // Optional category
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((project) => project.buildin === activeTab);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div id="portfolio" className="bg-dark">
      <div className="text-white h-fit py-16 2xl:w-[96rem] 2xl:m-auto">
        <Title title1="Latest" title2="Projects" className="text-center" />

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-6 mt-4 text-sm sm:text-lg text-slate-300">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setVisibleCount(3); // Reset count when tab changes
              }}
              className={`pb-1 border-b-2 ${
                activeTab === tab.value
                  ? "text-blue border-blue"
                  : "border-transparent hover:text-white"
              } transition-colors duration-300`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="flex justify-start flex-wrap md:w-[95%] lg:w-[64rem] xl:w-[74rem] 2xl:w-[90rem] m-auto md:pl-7 lg:pl-3 w-[85%] mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {visibleProjects.length > 0 ? (
            visibleProjects.map((item, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="relative w-[100%] transition-transform duration-300 group md:m-3 xmd:m-4 bg-gray md:w-[45%] lg:w-[30%] md:h-[50%]  rounded-lg overflow-hidden my-4 hover:shadow-effect"
              >
                <Link href={item.link} target="_blank">
                  <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
                    <Image src={item.img} height={500} width={500} alt="project-logo" className="md:h-full w-full rounded-lg mb-2" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-white bg-gradient-to-t from-blue duration-300 flex flex-col items-start p-2 xs:p-3 md:p-3 xl:p-4"
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
            ))
          ) : (
            <div className="text-white text-center w-full py-10 text-xl">
              No projects found for this category.
            </div>
          )}
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-blue text-white rounded hover:bg-white hover:text-blue border border-blue transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
