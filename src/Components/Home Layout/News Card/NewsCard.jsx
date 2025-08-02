import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    total_view,
    rating,
    author,
    details,
    tags,
  } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <BsBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4 py-3">
        <img src={thumbnail_url} alt={title} className="w-full rounded-lg" />
      </div>

      {/* Description */}
      <div className="px-4 text-sm text-gray-600 pb-4">
        <p>
          {details.slice(0, 150)}...{" "}
          <Link
            to={`/news-details/${id}`}
            className="text-orange-500 font-semibold cursor-pointer link link-hover"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Tags */}
      <div className="px-4 pb-4 text-xs text-gray-500">
        <span className="block mb-1">Tags:</span>
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded mr-1 mb-1"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-gray-700 text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
