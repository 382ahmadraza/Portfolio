import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/svg"; // Confirm path is valid

export default function Sciencepol() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Science Section */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="relative pl-5">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 text-primary"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Science</h2>
            </div>
            <Link
              to="#"
              className="flex items-center gap-1 text-red-500 hover:text-red-600 font-medium transition-colors text-sm sm:text-base"
            >
              View All
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured Article */}
          <article className="space-y-4">
            <div className="relative overflow-hidden  aspect-[16/9]">
              <img
                src="/images/sci1.jpg"
                alt="Space galaxy with stars and nebula"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="space-y-3">
              <span className="inline-block  py-1 text-xs sm:text-sm font-semibold text-primary  ">
                SCIENCE
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                The Challenges of Space Exploration in the 21st Century
              </h3>

              <p className="text-xs sm:text-sm text-gray-600">February 24, 2025</p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo
                ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...
              </p>
            </div>
          </article>
        </div>

        {/* Politics Section */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div className="relative pl-5">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Politics</h2>
            </div>
            <Link
              to="#"
              className="flex items-center gap-1 text-red-500 hover:text-red-600 font-medium transition-colors text-sm sm:text-base"
            >
              View All
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured Article */}
          <article className="space-y-4">
            <div className="relative overflow-hidden  aspect-[16/9]">
              <img
                src="/images/p1.jpg"
                alt="People protesting with signs"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="space-y-3">
              <span className="inline-block  py-1 text-xs sm:text-sm font-semibold text-primary  ">
                POLITICS
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                Understanding Voter Turnout Trends in Democratic Elections
              </h3>

              <p className="text-xs sm:text-sm text-gray-600">February 24, 2025</p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo
                ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}