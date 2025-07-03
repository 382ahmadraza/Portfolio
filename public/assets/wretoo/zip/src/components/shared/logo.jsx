import React from "react";

const Logo = ({className}) => {
  return (
    <div className="w-fit h-fit ">
      <p className={`tracking-widest text-3xl cursor-pointer font-extrabold ${className}`}>
        WRE<span className=" text-primary">TTO</span>
      </p>
    </div>
  );
};

export default Logo;
