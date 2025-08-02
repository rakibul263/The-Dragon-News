import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../../Components/Home Layout/News Card/NewsCard';

const Home = () => {
  const data = useLoaderData();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

  return (
    <div>
      <h2 className="font-bold mb-4">
        Total - <span className="text-secondary">{news.length}</span> news found.
      </h2>

      {news.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-xl">
          📰 No News Found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 px-5">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem}></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
