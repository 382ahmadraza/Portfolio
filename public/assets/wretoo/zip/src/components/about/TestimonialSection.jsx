import React from "react";
import AboutHeaders from "./AboutHeaders";

const TestimonialSection = () => {
  return (
    <div className="md:py-5 max-w-7xl mx-auto">
      <section className="bg-white py-14 px-6 lg:px-0">
        <div className=" flex flex-col justifty-between lg:flex-row items-center justify-center">
          {/* Text Content */}
          <div className="w-full lg:w-[60rem] pb-14 lg:pb-0">
            <AboutHeaders
              title="TESTIMONIALS"
              heading="What Readers Are Saying"
              bgcolor="bg-[#CF412B]"
              titleColor="text-[#CF412B]"
              headingColor="text-black"
              className="px-0 pb-9 md:px-9 "
            />
            <p className="text-gray-700 text-base px-0 sm:px-0 md:px-8 md:text-lg  ">
              “Discovering Nexus News has truly transformed how I keep up with
              current events. The depth and quality of their reporting are
              unmatched, offering a refreshing blend of hard-hitting journalism
              and insightful analysis. Whether it’s breaking news or in-depth
              features, Nexus News never fails to provide the context and
              clarity I need. The diverse range of topics and the commitment to
              unbiased reporting make it my go-to source for staying informed.
              Kudos to the team for maintaining such high standards!”
            </p>

            <div>
              <div className="flex items-center space-x-2 mt-4 px-0 sm:px-0 md:px-8">
                <span className="w-4 h-0.5 bg-[#CF412B]"></span>
                <h3 className="font-semibold text-[#CF412B]">
                  Jordan Mitchell
                </h3>
              </div>
              <p className="mt-1 text-gray-700 text-base inline-block px-0 sm:px-0 md:px-8 text-md rounded">
                Avid Reader
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center w-full lg:w-[60rem]  sm:px-4 lg:px-16 ">
            <img
              src="/images/testimonial.jpg"
              alt="Happy Reader"
              className="lg:pl-16 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
