import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/Home Layout/News Card/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">
        Total - <span className="text-secondary">{categoryNews.length}</span>{" "}
        news found.
      </h2>

      {categoryNews.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-xl">
          📰 No News Found in this Category
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 p-7">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
