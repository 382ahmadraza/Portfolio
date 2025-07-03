import React from "react";

const CommunitySection = () => {
  return (
    <div className=" px-4 sm:px-8 md:px-5 2xl:px-0 py-8 max-w-7xl m-auto">
      {/* Full-width Content Section with Centered Red Background */}
      <div className="relative flex flex-col items-center justify-between gap-6 p-4 sm:p-6 overflow-hidden">
        {/* Red Background Layer - adjusted for responsiveness */}
        <div className="absolute inset-y-0 left-0 lg:left-1/4 w-full   lg:w-[950px] bg-primary z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          {/* Image - full width on mobile, half on larger screens */}
          <div className="w-full lg:w-1/2 relative z-0">
            <img
              loading="lazy"
              decoding="async"
              width="589"
              height="371"
              src="/images/cta1.jpg"
              className="w-full h-auto max-w-full object-cover"
              alt="Innovator"
              // sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Content - full width on mobile, half on larger screens */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Join Our Community of Innovators
            </h2>
            <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Share your insights and expertise on various topics with our global
              audience.
            </p>
            <button
              className="bg-white text-black hover:bg-black hover:text-white font-semibold rounded-none w-full sm:w-[250px] cursor-pointer px-4 sm:px-7 py-2 sm:py-3 transition-colors duration-300"
            >
              Contribute Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;