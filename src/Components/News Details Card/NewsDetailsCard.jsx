import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {

  return (
    <div className="py-6 space-y-5">
      <img
        className="w-full h-[450px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>
      <p className="mt-5">{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        Back To Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
