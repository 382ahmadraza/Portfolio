import React from "react";
import { Link, useParams } from "react-router-dom";
import { finalArticlesData } from "../../data";
import Heading from "./common/heading";
import { ArrowIcon, ArrowRightIcon } from "../../assets/svg";
import CommentForm from "../blog-details/comment-form";

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const blog = finalArticlesData.find((a) => a.id === Number(id));

  const randomIndex = Math.floor(Math.random() * finalArticlesData.length);
  const prevrandomIndex = Math.floor(Math.random() * finalArticlesData.length);
  const firstBlog = finalArticlesData[randomIndex];
  const PrevBlog = finalArticlesData[prevrandomIndex];
  console.log(firstBlog);
  console.log(PrevBlog);

  // java of comment section starts here

  return (
    <div className="py-7 lg:py-14 bg-zinc-100">
      <div className="max-w-3xl m-auto px-4 sm:px-8 pb-8 ">
        <div className="p-4 sm:p-7 lg:p-9 bg-white space-y-3">
          {/* heeading  */}
          <Heading
            CustomHeading={blog.title}
            CustomHeadingStyle={"!font-semibold  "}
          />

          {/* written by or date  */}
          <span className="text-xs md:text-sm text-zinc-600">
            {blog.author} / {blog.date}
          </span>

          {/* image  */}
          <div className="my-3 shadow-sm">
            <img src={blog.image} alt="img" />
          </div>

          {/* blog content in details  */}
          <div
            className="prose prose-lg text-zinc-700 text-sm lg:text-base mt-8"
            dangerouslySetInnerHTML={{ __html: blog.detailsText }}
          />
        </div>

        {/* prev and Next blog show here randomly */}
        <div className="flex justify-between w-full my-8 py-3 text-zinc-600 ">
          <Link
            to={`/wretto-news/${firstBlog.id}`}
            className=" w-2/5 h-16 overflow-hidden group "
          >
            <p className="flex items-center my-1.5 gap-2 uppercase font-semibold text-black/70 group-hover:text-primary ">
              <ArrowIcon className="rotate-180" size={14} strokeWidth="4" />
              previous
            </p>
            <span className="group-hover:text-primary text-sm sm:text-base">
              {firstBlog.title}
            </span>
          </Link>

          <div className="border border-zinc-300" />

          <Link
            to={`/wretto-news/${PrevBlog.id}`}
            className=" w-2/5 h-16 overflow-hidden group "
          >
            <p className="flex items-center justify-end my-2 gap-2 uppercase font-semibold text-black/70 group-hover:text-primary ">
              Next
              <ArrowIcon className=" " size={14} strokeWidth="4" />
            </p>
            <span className="group-hover:text-primary text-sm sm:text-base">
              {PrevBlog.title}
            </span>
          </Link>
        </div>

        {/* must read blog part  */}
        <div className="bg-white p-4 lg:p-10 mt-8">
          <p className="font-semibold text-3xl mb-6 ">Must Read</p>
          <div className="md:h-1/2 md:w-1/2 bg-zinc-100 p-3">
            <Link
              to={`/wretto-news/${PrevBlog.id}`}
              className=" md:w-2/5 md:h-16 overflow-hidden group "
            >
              <img src={PrevBlog.image} className="" />
              <Heading
                CustomHeading={PrevBlog.title}
                CustomHeadingStyle={"!text-xl !font-semibold !my-3"}
              />
              <span className=" text-zinc-600 text-sm">
                {PrevBlog.category} | {PrevBlog.date}
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 mt-8">
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
