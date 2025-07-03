import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkdin,
  Twitter,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "../../../assets/svg";
import Logo from "../logo";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../common/button";
import { finalArticlesData } from "../../../data";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // apply filter
    const filtered = finalArticlesData.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleResultClick = (id) => {
    setQuery(""); // clear search
    setResults([]); // hide results
    setIsMobileMenuOpen(false); // close the menu when click on
    navigate(`/wretto-news/${id}`); // redirect to blog detail page
  };

  const navigationItems = [
    { label: "Health", href: "/health" },
    { label: "Sports", href: "/sports" },
    { label: "Politics", href: "/politics" },
    { label: "Business", href: "/business" },
    { label: "Arts", href: "/arts" },
    { label: "Science", href: "/science" },
    { label: "World", href: "/world" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      icon: <Instagram />,
      path: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      path: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      icon: <Linkdin />,
      path: "https://www.linkedin.com/",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      path: "https://twitter.com/",
    },
  ];

  return (
    <header className="sticky top-0 md:static w-full bg-white z-10">
      
      {/* Top bar */}
      <div className="flex items-center justify-between  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        
        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map(({ icon, path, name }, index) => (
            <Link
              key={index}
              to={path}
              className="text-black hover:text-primary"
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Subscribe & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            btnText={"Subscribe"}
            className={
              "hidden md:block !bg-darkGray text-white font-semibold !rounded-none !px-7 !py-3"
            }
          />
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <hr />

      {/* Navigation bar */}
      <nav className=" ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-3">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between  items-center  ">
            <div className="flex justify-between gap-3 w-[70%] lg:gap-7 xl:gap-12 py-4">
              {navigationItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-semibold text-sm lg:text-base ${
                      isActive
                        ? "text-[#CF412B]"
                        : "text-black hover:text-[#CF412B]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* serach bar to find blogs on title  */}
            <div className="hidden relative md:flex w-[25%] items-center border border-gray-400 focus-within:border-primary">
              <div className="relative w-full">
                <div className="flex items-center px-2 w-full justify-between">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                    className=" outline-none p-2 w-[90%]"
                  />
                  <SearchIcon size={16} />
                </div>

                {/* Search results dropdown shown on search*/}
                {query && results.length > 0 && (
                  <div className="absolute bg-white shadow-sm w-full max-h-60 overflow-y-auto z-10">
                    {results.map((blog) => (
                      <div
                        key={blog.id}
                        onClick={() => handleResultClick(blog.id)}
                        className="p-2 cursor-pointer font-medium leading-4 text-sm hover:bg-gray-100"
                      >
                        {blog.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div
              className={`  md:hidden transition-all duration-300 ease-in-out overflow-auto`}
            >
              <div className="absolute left-0 w-full z-50 pb-7 space-y-2 bg-white ">
                {/* serach bar to find blogs on title  */}
                <div className="bg-zinc-100 flex items-center border border-gray-400 focus-within:border-primary">
                  <div className="relative w-full px-7">
                    <div className="flex items-center px-2 w-full">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleChange}
                        className=" outline-none p-4 w-full"
                      />
                      <SearchIcon size={16} />
                    </div>

                    {/* Search results dropdown shown on search*/}
                    {query && results.length > 0 && (
                      <div className="absolute left-0 bg-white shadow-sm w-full max-h-60 overflow-y-auto z-10">
                        {results.map((blog) => (
                          <div
                            key={blog.id}
                            onClick={() => handleResultClick(blog.id)}
                            className="p-2 cursor-pointer font-medium leading-4 text-sm hover:bg-gray-100"
                          >
                            {blog.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* {isMobileMenuOpen && ( */}
                <Button
                  btnText={"Subscribe"}
                  className={
                    "  !bg-darkGray text-white font-semibold !rounded-none w-full !px-7 !py-3"
                  }
                />
                {/* )} */}

                <div className="flex justify-center space-x-6 py-4  mt-4">
                  {socialIcons.map(({ icon, path, name }, index) => (
                    <a
                      key={index}
                      href={path}
                      className="text-gray-600 hover:text-gray-900"
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className="hidden md:block" />
      </nav>
    </header>
  );
};

export default Header;
