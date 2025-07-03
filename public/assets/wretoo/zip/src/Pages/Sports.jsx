import React from "react";
import { finalArticlesData } from "../data";
import ArticalCard from "../components/shared/page-blogs/artical-card";
import RecentPosts from "../components/shared/page-blogs/recent-posts";
import Heading from "../components/shared/common/heading";

const Sports = () => {

const sports = finalArticlesData.filter(a=> a.category === 'SPORTS')


  return (
    <div className="px-4 lg:px-16 py-10 flex flex-col lg:flex-row justify-between gap-4  2xl:w-[94rem] m-auto">
      <div className="lg:w-[65%] ">
        <>
          <Heading level={1} CustomHeading={"Sports"} CustomHeadingStyle={""} />
          <hr className="my-4 lg:my-8" />
        </>

        {sports.map((item, index) => (
          <ArticalCard
            key={index}
            id={item.id}
            src={item.image}
            label="sports"
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
      <div className="border-l border-zinc-500"></div>
      <div className="lg:w-[25%] ">
        <RecentPosts />
      </div>
    </div>
  );
};

export default Sports;
