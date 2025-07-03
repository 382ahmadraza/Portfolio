import React from "react";

const AboutHeaders = ({
  bgcolor,
  titleColor,
  headingColor,
  title,
  heading,
  className,
}) => {
  return (
    <>
      <div className={`flex items-center gap-4  ${className}`}>
        <div className={`line w-[3px] h-14 ${bgcolor} md:h-[68px]`}></div>
        <div className="flex flex-col justify-center space-y-1 md:space-y-2">
          <p className={`text-[13px] ${titleColor} font-semibold md:text-md`}>
            {title}
          </p>
          <h1 className={`text-2xl font-semibold ${headingColor} md:text-3xl`}>
            {heading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default AboutHeaders;
