import { Link } from "react-router-dom"
import { ArrowRightIcon } from "../../assets/svg" // Ensure this is correctly exported
import {WorldArticles} from '../../data/index'
export default function WorldNewsSection() {


  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-600 mr-3 sm:mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">World</h2>
        </div>
        <Link
          to="#"
          className="flex items-center text-red-600 hover:text-red-700 font-medium transition-colors text-sm sm:text-base"
        >
          View All
          <ArrowRightIcon className="ml-1 sm:ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        {WorldArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer transition-all">
            <Link to={article.href} className="block">
              {/* Image */}
              <div className="relative overflow-hidden  mb-4 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <span className="inline-block text-red-600 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  {article.category}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h3>
                <time className="text-gray-500 text-xs sm:text-sm">{article.date}</time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
