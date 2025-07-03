export default function NewsLayout() {
  return (
    <div className=" p-2 md:p-6 lg:p-8 ">
      <div className="block *:m-2 *:md:m-0 lg:flex  gap-5 lg:h-[70vh] max-w-7xl mx-auto">
        {/* Main Featured Article - Left Side */}
        <div className="lg:w-1/2   ">
          <article className="  h-full mb-5 lg:mb-0 bg-white">
            <div className="relative h-full">
              <img
                src="/images/home1.jpg"
                alt="Woman eating healthy food"
                className="object-cover w-full h-full"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}
              <div className="absolute bottom-0 left-0 p-4 lg:p-8 text-white">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                  HEALTH
                </span>
                <h1 className="text-base sm:text-xl md:text-2xl font-bold leading-tight sm:mb-3">
                  Exploring the Connection Between Gut Health and Mental
                  Well-being
                </h1>
                <p className="text-gray-300 text-sm">February 24, 2025</p>
              </div>
            </div>
          </article>
        </div>

        {/* Right Side Articles */}
        <div className=" lg:flex  lg:flex-col gap-5  h-1/2 lg:h-full lg:w-1/2">
          {/* Sports Article */}
          <article className="bg-white flex h-1/2    *:w-1/2">
            <div className="">
              <img
                src="/images/home2.jpg"
                alt="Olympic swimmer in action"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 md:p-5 md:space-y-3 flex flex-col justify-center">
              <span className="inline-block bg-primary text-white w-fit text-xs font-semibold px-2 py-1 uppercase tracking-wide">
                SPORTS
              </span>
              <h2 className="text-base sm:text-2xl font-bold text-darkGray ">
                Olympics 2025: The Athletes to Watch
              </h2>
              <p className="text-gray-500 text-xs">February 24, 2025</p>
            </div>
          </article>

          {/* Politics Article */}
          <article className="bg-white flex h-1/2 *:w-1/2">
            <div className=" ">
              <img
                src="/images/p1.jpg"
                alt="Political protesters with signs"
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" p-2 sm:p-5 space-y-3 flex flex-col justify-center">
              <span className="inline-block bg-primary text-white w-fit text-xs font-semibold px-2 py-1 uppercase tracking-wide">
                POLITICS
              </span>
              <h2 className="text-base md:text-2xl font-bold text-darkGray ">
                Election 2025: Key Issues Shaping the Campaign Trail
              </h2>
              <p className="text-gray-500 text-xs">February 24, 2025</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
