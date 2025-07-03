import React from "react";
import Logo from "../logo";
import Heading from "../common/heading";
import Button from "../common/button";
import { Facebook, Instagram, Linkdin, Twitter } from "../../../assets/svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const footerlinks = [
    { name: "Health", path: "/health" },
    { name: "Sports", path: "/sports" },
    { name: "Politics", path: "/politics" },
    { name: "Business", path: "/business" },
    { name: "Arts", path: "/arts" },
    { name: "Science", path: "/science" },
    { name: "World", path: "/world" },
  ];

  const Companylinks = ["Home", "About ", "Contact"];

  const socialMediaLinks = [
    {
      name: "Instagram",
      icon: <Instagram />,
      path: "https://www.instagram.com/",
    },
    { name: "Facebook", icon: <Facebook />, path: "https://www.facebook.com/" },
    { name: "LinkedIn", icon: <Linkdin />, path: "https://www.linkedin.com/" },
    { name: "Twitter", icon: <Twitter />, path: "https://twitter.com/" },
  ];

  return (
    <div className="border-t-8 border-primary bg-black/95 text-white">
     
      {/* footer top section  */}
      <div className="py-8 flex flex-col lg:flex-row justify-between items-center  px-4 md:px-8 lg:px-20 2xl:px-0 2xl:w-[92rem] m-auto ">
        
        {/* logo  */}
        <Logo className={"text-white mb-8 lg:mb-0 flex items-center"} />
       
        {/* footer top links  */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          {footerlinks.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  `font-semibold hover:text-primary text-center cursor-pointer ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* line  */}
      <hr />

      <div className="grid grid-cols-1 sm:grid-cols-3 justify-center   gap-10 py-8 px-4 md:px-8 lg:px-20 2xl:px-0 2xl:w-[92rem] m-auto">
        {/* subscribe today  */}
        <div>
          <Heading
            CustomHeading={"SUBSCRIBE TODAY!"}
            CustomHeadingStyle={"text-center md:text-start mb-8"}
          />

          <div className="flex flex-col items-center sm:items-start gap-4 ">
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className="bg-white text-black placeholder:text-zinc-500 placeholder:text-lg  px-4 py-3 rounded w-full invalid:border-primary valid:border-blue-500"
            />
            <Button btnText={"Subscribe"} />
          </div>
        </div>

        {/* company links  */}
        <div className="w-fit md:ml-20">
          <Heading CustomHeading={"Company"} CustomHeadingStyle={"mb-6"} />
          <ul>
            {Companylinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:text-primary text-white cursor-pointer font-semibold my-2"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* social media links  */}
        <div className="w-fit">
          <Heading CustomHeading={"Social Media"} CustomHeadingStyle={"mb-6"} />
          <ul className="">
            {socialMediaLinks.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  target="_blank"
                  key={index}
                  className="flex items-center gap-2 group my-2 font-semibold cursor-pointer"
                >
                  <span className="text-white group-hover:text-primary ">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-primary ">{item.name}</span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />

      {/* footer bottom section  */}
      <div className="bg-black/90">
        <p className="text-center text-white text-sm py-4">
          © 2025 WRETTO. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
