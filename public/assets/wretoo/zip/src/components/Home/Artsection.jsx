import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/svg"; // Make sure the SVG file exports properly

export default function ArtsSection() {
  const articles = [
    {
      id: 1,
      category: "ARTS",
      title: "Understanding the Evolution of Digital Art Marketplaces",
      date: "February 24, 2025",
      image: "/images/a3.jpg",
      alt: "Woman working on laptop with design tools",
    },
    {
      id: 2,
      category: "ARTS",
      title: "How Virtual Reality is Revolutionizing the Art World",
      date: "February 24, 2025",
      image: "/images/a2.jpg",
      alt: "Person wearing VR headset",
    },
    {
      id: 3,
      category: "ARTS",
      title: "The Top Film Festivals Showcasing Emerging Talent",
      date: "February 24, 2025",
      image: "/images/a1.jpg",
      alt: "Film equipment and clapperboard",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6  py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-500 mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Arts</h2>
        </div>
        <Link
          to="#"
          className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-200 font-medium"
        >
          <span className="mr-2">View All</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link to="#" className="block">
              {/* Image */}
              <div className="mb-4 overflow-hidden ">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span className="inline-block text-red-500 text-sm font-semibold tracking-wide uppercase">
                  {article.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">{article.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
