import React from 'react';
import AboutHeaders from '../about/AboutHeaders' 
import { PrayingHand, HandShake, UsersIcon, MagicWand } from '../../assets/svg';

const OurValues = () => {
  const values = [
    {
      icon: <PrayingHand />,
      title: "Integrity",
      description: "We uphold the highest standards of journalistic ethics and integrity.",
    },
    {
      icon: <HandShake />,
      title: "Transparency",
      description: "We are committed to transparency in our reporting processes.",
    },
    {
      icon: <UsersIcon />,
      title: "Inclusivity",
      description: "We believe in amplifying diverse voices and fostering an inclusive community.",
    },
    {
      icon: <MagicWand />,
      title: "Innovation",
      description: "We embrace new tech and storytelling to enhance our readers' experience.",
    },
  ];

  return (
    <section className="flex flex-col md:flex md:flex-row pt-7 pb-16 md:pt-28 max-w-7xl m-auto">
      <div className="w-full">
        
        <AboutHeaders title="WHAT WE BELIEVE"
        heading="Our Values"
        bgcolor="bg-[#CF412B]"
        titleColor="text-[#CF412B]"
        headingColor="text-black"
        className="px-6 pt-10 pb-8  md:pt-3 md:pb-[200px]" />
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-5 mx-6  ">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-black px-6 py-6 md:px-8 md:py-10 "
            >
              <div className="mb-6">
                <div className="w-8 h-8 flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default OurValues;
