import React from "react";
import Button from "../common/button";
import Heading from "../common/heading";
import {
  // healthArticalData,
  sportsData,
  ArtsData,
  PoliticsData,
  finalArticlesData,
} from "../../../data";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const sportsFirstTitle = sportsData[0].title;
  const healthFirstTitle = finalArticlesData[6].title;
  const artsFirstTitle = ArtsData[0].title;
  const politicsFirstTitle = PoliticsData[0].title;
  const worldFirstTitle = finalArticlesData[1].title;

  const sportsBLogs = finalArticlesData.filter(
    (a) => a.category === "SPORTS"
  ).length;
  const healthBLogs = finalArticlesData.filter(
    (a) => a.category === "HEALTH"
  ).length;
  const PoliticsBLogs = finalArticlesData.filter(
    (a) => a.category === "POLITICS"
  ).length;
  const BusinessBLogs = finalArticlesData.filter(
    (a) => a.category === "BUSINESS"
  ).length;
  const ScienceBLogs = finalArticlesData.filter(
    (a) => a.category === "SCIENCE"
  ).length;
  const ArtsBLogs = finalArticlesData.filter(
    (a) => a.category === "ARTS"
  ).length;
  const WorldBLogs = finalArticlesData.filter(
    (a) => a.category === "WORLD"
  ).length;

  // console.log(lengthOfArray);
  const categories = [
    { name: "Health", count: healthBLogs, href: "/health" },
    { name: "Arts", count: ArtsBLogs, href: "/arts" },
    { name: "Business", count: BusinessBLogs, href: "/business" },
    { name: "Politics", count: PoliticsBLogs, href: "/politics" },
    { name: "World", count: WorldBLogs, href: "/world" },
    { name: "Science", count: ScienceBLogs, href: "/science" },
    { name: "Sports", count: sportsBLogs, href: "/sport" },
  ];

  const recentPost = [
    { text: sportsFirstTitle, href: "/sports" },
    { text: healthFirstTitle, href: "/health" },
    {
      text: artsFirstTitle,
      href: "/arts",
    },
    {
      text: politicsFirstTitle,
      href: "/politics",
    },
    {
      text: worldFirstTitle,
      href: "/world",
    },
  ];

  return (
    <div className=" py-2">
      {/* search part  */}
      <div className="my-4 ">
        <label className="font-medium text-lightGray">Search</label>
        <div className="flex justify-between gap-2 mt-1 ">
          <input
            type="text"
            required
            className="  py-1 px-2 w-full rounded-sm border outline-none"
          />
          <Button
            btnText={"Search"}
            className="!bg-black !px-5 !text-white font-semibold !rounded-none text-lg"
          />
        </div>
      </div>

      {/* recent posts  */}
      <>
        <Heading
          level={2}
          CustomHeading={"Recent Posts"}
          CustomHeadingStyle={"!text-3xl !font-semibold"}
        />

        <div>
          <ul className=" space-y-4 my-4">
            {recentPost.map((post, index) => (
              <li key={index} className="text-primary text-lg  leading-6">
                <a
                  href={post.href}
                  className="hover:text-black transition-colors duration-300 "
                >
                  {post.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>

      {/* categories part  */}
      <div className="my-9">
        <Heading
          level={2}
          CustomHeading={"Categories"}
          CustomHeadingStyle={"!text-3xl !font-semibold"}
        />

        <ul className="space-y-2 mt-4">
          {categories.map((category) => (
            <li key={category.name} className="flex gap-2 text-lg leading-6">
              <Link
                to={category.href}
                className="text-primary hover:text-black transition-colors duration-300"
              >
                {category.name}
              </Link>
              <span className="text-lightGray">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
