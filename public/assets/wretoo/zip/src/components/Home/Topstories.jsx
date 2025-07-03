
export default function Topstories() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-6 2xl:p-0">
      {/* Top Stories Header */}
      <div className="mb-6">
        <h1 className="text-sm lg:text-xl flex items-center justify-between font-bold text-gray-900 border-l-4 border-red-500 pl-1 sm:pl-4">
          <p className="w-40 sm:w-32">Top Stories</p>
          <hr className="w-[90%]"/>
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
       
        {/* Featured Article */}
        <div className="lg:col-span-2 relative group cursor-pointer h-full overflow-hidden">
              <img
                src="/images/sci2.jpg"
                alt="Understanding the human brain"
                className="w-full h-full object-cover brightness-50 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-7 text-white">
                <div className=" sm:mb-3">
                  <span className="inline-block  backdrop-blur-sm  py-1 rounded text-sm font-medium uppercase tracking-wide">
                    SCIENCE
                  </span>
                </div>
                <h2 className=" sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  Understanding the Human Brain: New Insights from <br className="hidden md:block"/> Neuroscience
                </h2>
                <p className="text-gray-200 text-xs md:text-base">February 24, 2025</p>
              </div>
        </div>

        {/* Newsletter Subscription Panel */}
        <div className="lg:col-span-1">
          <div className="bg-primary text-white p-6 lg:p-8   h-full flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-sm font-medium uppercase tracking-wide mb-2 opacity-90">
                NEVER MISS A HEADLINE!
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                Subscribe to our newsletter for daily updates.
              </h3>
              <p className="text-red-100 mb-6">
                Get the latest stories delivered straight to your inbox.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-darkGray hover:bg-white hover:text-darkGray cursor-pointer text-white font-semibold py-3 px-6 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Articles Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Article */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden mb-4">
            <img
              src="/images/tops1.jpg"
              alt="People crossing a busy street intersection with Subway sign visible"
              className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-3">
            <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wide">WORLD</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
              Global Migration Trends: Causes and Consequences
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">February 24, 2025</p>
          </div>
        </article>

        {/* Right Article (Fixed ARTS Image) */}
        <article className="group cursor-pointer">
          <div className="relative overflow-hidden  mb-4">
            <img
              src="/images/a4.jpg"
              alt="Painter in studio working on an abstract canvas"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-3">
            <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wide">ARTS</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
              Exploring the Impact of AI on Creative Industries
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">February 24, 2025</p>
          </div>
        </article>
      </div>
    </div>
  );
}
