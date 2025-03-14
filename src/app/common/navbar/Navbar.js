"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";


export default function Navbar() {
  const [toggle, setToggle] = useState("");

  const navlinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div className="bg-dark w-full sticky top-0  z-20">
      <div className=" flex justify-between items-center h-[80px] px-8 xl:px-16  2xl:w-[96rem] 2xl:m-auto">
        {/* Logo */}
        <div className="text-white cursor-pointer">
          <Link href="/">
            <p className="text-2xl border border-blue p-1 px-3 tracking-widest shadow-effect">
              &lt;<span className="text-blue font-bold">A</span>/
              <span className="text-blue font-bold">R</span>&gt;
            </p>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <IoMenu className="text-white h-[26px] w-[26px]" />
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <ul className="absolute top-0 right-0 w-full bg-dark text-white p-5">
            <div className="flex items-center justify-between">
              <div className="text-white cursor-pointer w-fit">
                <Link href="/">
                  <p className="text-2xl border border-blue p-1 px-3 tracking-widest shadow-effect">
                    &lt;<span className="text-blue font-bold">A</span>/
                    <span className="text-blue font-bold">R</span>&gt;
                  </p>
                </Link>
              </div>
              <button onClick={() => setToggle(false)} className=" text-end border-red-500 p-2 px-4 text-white" >
                X
              </button>
            </div>
            {navlinks.map((link, index) => (
              <li key={index} className="my-3 hover:text-blue " >
                <ScrollLink onClick={() => setToggle(false)} to={link.href} smooth={true} duration={500} className="text-md text-center">
                  {link.name}
                </ScrollLink>
                <hr className="bg-blue border-none my-2 h-[1px]"/>
              </li>

            ))}
          </ul>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navlinks.map((link, index) => (
              <li key={index}>
                <ScrollLink to={link.href} smooth={true} offset={-80} duration={500} spy={true} spyThrottle={200} activeClass="active"
                  className="cursor-pointer text-white hover:text-blue-400 transition my-3" >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
