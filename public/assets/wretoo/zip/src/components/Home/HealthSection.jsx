// import { Link } from "react-router-dom";
// import { ArrowRightIcon } from "../../assets/svg";
// import { articlesData } from "../../data/index";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ArticalCard from "../../components/shared/page-blogs/artical-card";



// export default function HealthSection() {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: Math.min(4, articlesData.length),
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } }
//     ]
//   };

//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center">
//           <div className="w-1 h-8 bg-red-500 mr-4"></div>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Health</h2>
//           <div className="flex-1 h-px bg-gray-300 ml-6"></div>
//         </div>
//         <Link
//           to="/health"
//           className="flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
//         >
//           View All
//           <ArrowRightIcon className="ml-2 w-4 h-4" />
//         </Link>
//       </div>

//       {/* Slider */}
//       <div className="-mx-2">
//         <Slider {...settings}>
//   {articlesData.map((article) => (
//     <div key={article.id} className="px-2">
//       <ArticalCard
//         id={article.id}
//         src={article.image || "/placeholder.svg"}
//         label={article.category}
//         title={article.title}
//         date={article.date}
//         description={article.description}
//       />
//     </div>
//   ))}
// </Slider>

//       </div>
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { articlesData } from "../../data/index";
import Slider from "react-slick";
import ArticalCard from "../shared/page-blogs/artical-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

// Custom next arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
};

// Custom prev arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
};

export default function HealthSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, articlesData.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-1 h-8 bg-red-500 mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Health</h2>
          <div className="flex-1 h-px bg-gray-300 ml-6"></div>
        </div>
        <Link
          to="/health"
          className="flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
        >
          View All
          <span className="ml-2">→</span>
        </Link>
      </div>

      {/* Slider */}
      <div className="relative px-12 -mx-2">
        <Slider {...settings}>
          {articlesData.map((article) => (
            <div key={article.id} className="px-2">
              <ArticalCard
                id={article.id}
                src={article.image || "/placeholder.svg"}
                label={article.category}
                title={article.title}
                date={article.date}
                description={article.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
