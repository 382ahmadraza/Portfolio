import JournalistCard from "./JournalistCard";
import AboutHeaders from "./AboutHeaders";
const Experience = () => {
  return (
    <div className="bg-black py-10">
      <div className=" text-white pb-20  max-w-7xl m-auto">
        <AboutHeaders
          title="OUR THOUGHTS"
          heading="Experienced Journalists"
          bgcolor="bg-[#CF412B]"
          titleColor="text-[#CF412B]"
          headingColor="text-white"
          className="px-6 pt-15 pb-12 "
        />
        <JournalistCard />
      </div>
    </div>
  );
};

export default Experience;
