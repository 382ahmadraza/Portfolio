import AboutHeaders from "./AboutHeaders";
import MissionCard from "./MissionCard";

const MissionVision = () => {
  return (
    <div className="max-w-7xl m-auto bg-[url('https://websitedemos.net/news-blog-04/wp-content/uploads/sites/1516/2025/02/about-hero.jpg')] object-cover">
        <div class="relative w-full   bg-black/70  bg-cover bg-center ">
          <div class="absolute inset-0 z-0"></div>
          <div class="relative z-10 flex flex-col md:flex-row justify-between flex-wrap p-5">
            
            <AboutHeaders
              title="OUR THOUGHTS"
              heading="The Mission & Vision"
              bgcolor="bg-[#CF412B]"
              titleColor="text-[#CF412B]"
              headingColor="text-white"
              className="items-start px-0 pt-10 pb-6 md:px-16 md:pt-28 md:pb-[20px]"
            />
            <div class="bg-[#CF412B] p-3 py-6 my-6 h-auto w-full md:w-[550px] md:px-10 md:mt-24 md:my-15 md:mx-6">
              <MissionCard
                heading="Mission: Informing Minds"
                desc="Our mission is to deliver accurate, comprehensive, and thought-provoking
        news that empowers our reader to make informed deciosions and engaged
        with the world around them."
              />
              <div class="border-b border-white my-5 mx-2"></div>

              <MissionCard
                heading="Vision: Empowering Change"
                desc="Our vision is to become a leading platform that connects
                  diverse communities through insightful journalism, fostering
                  understanding and driving positive change globally."
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default MissionVision;
