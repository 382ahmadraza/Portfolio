import React from "react";
import AboutHeaders from "./AboutHeaders";
import StatisticsCard from "./StatisticsCard";

const Journey = () => {
  return (
    <>
    <div className="flex flex-col md:flex lg:flex-row px-5 md:py-9 max-w-7xl m-auto my-4">
        <div className="w-1/2 ">
      <AboutHeaders
        title="OUR JOURNEY"
        heading="From Vision to Voice"
        bgcolor="bg-primary"
        titleColor="text-primary"
        headingColor="text-black"
        className="px-6 pt-10 pb-6   md:pt-2 md:pb-[20px] w-fit"
      />
      </div>
      <div className="headings  px-6 text-gray-700 w-full lg:w-1/2 space-y-5 leading-relaxed md:text-[17px]">
        <p>In 2015, in a small coffee shop bustling with ideas and ambition, a group of passionate journalists and thought leaders came together with a singular vision: to create a news platform that would bridge the gap between breaking news and insightful analysis. We noticed a growing demand for quality journalism that not only reported facts but also provided context and depth.</p>
        <p>Driven by a commitment to transparency and diversity, we launched Nexus News as a digital haven for curious minds. Our founders, Alex Wood, believed in the power of storytelling to illuminate complex issues and spark meaningful conversations. From covering local community stories to global events, our journey has been about connecting people through the power of information.</p>
        <p>Today, Nexus News continues to evolve, driven by a passionate team and a supportive community. As we look to the future, we remain committed to elevating voices, uncovering truths, and inspiring change through our stories.</p>
      </div>
      
    </div>
    <StatisticsCard />
    </>
  );
};

export default Journey;
