"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navlinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <motion.div 
      className="sticky bg-dark w-full top-0 z-20 shadow-md"
      initial={{ y: -50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center h-[80px] px-8 xl:px-16 2xl:w-[96rem] 2xl:m-auto">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white cursor-pointer"
        >
          <Link href="/">
            <p className="text-2xl border border-blue p-1 px-3 tracking-widest shadow-effect">
              &lt;<span className="text-blue font-bold">A</span>/
              <span className="text-blue font-bold">R</span>&gt;
            </p>
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <IoMenu className="text-white h-[28px] w-[28px]" />
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.ul 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 right-0 h-screen w-full bg-dark text-white p-6 shadow-lg flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Link href="/">
                  <p className="text-2xl border border-blue p-1 px-3 tracking-widest shadow-effect cursor-pointer">
                    &lt;<span className="text-blue font-bold">A</span>/
                    <span className="text-blue font-bold">R</span>&gt;
                  </p>
                </Link>
                <motion.button 
                  onClick={() => setToggle(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white text-xl"
                >
                  ✕
                </motion.button>
              </div>

              {navlinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  className="my-4 hover:text-blue text-lg"
                >
                  <ScrollLink 
                    onClick={() => setToggle(false)} 
                    to={link.href} 
                    smooth={true} 
                    duration={500} 
                    className="text-md cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                  <hr className="bg-blue border-none my-2 h-[1px]" />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navlinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-white hover:text-blue transition duration-300"
              >
                <ScrollLink 
                  to={link.href} 
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  spy={true} 
                  activeClass="active"
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
