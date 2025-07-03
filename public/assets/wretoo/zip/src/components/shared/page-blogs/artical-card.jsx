import React from "react";
import Heading from "../common/heading";
import { Link } from "react-router-dom";
// import Heading from "../shared/common/heading";

const ArticalCard = ({id, src, label, title, date, description }) => {
  return (
    <div className=" py-3">
      <Link to={`/wretto-news/${id}`} className="space-y-3 ">
        <img src={src} alt="health-image" className="w-full" />

        <p className="text-sm text-primary font-semibold ">{label}</p>

        <Heading
          CustomHeading={title}
          CustomHeadingStyle={"!text-2xl !font-semibold"}
        />
      </Link>
      <p className="font-semibold text-darkGray my-2">{date}</p>
      <p className="text-lightGray text-[17px]">{description}</p>
    </div>
  );
};

export default ArticalCard;
