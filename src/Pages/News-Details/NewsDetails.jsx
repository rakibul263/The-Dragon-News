import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightAside from "../../Components/Home Layout/Right Aside/RightAside";
import NewsDetailsCard from "../../Components/News Details Card/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(()=>{
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="mt-5">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 mt-8 gap-6 py-10">
        <section className="col-span-9">
          <h1 className="font-bold">News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky h-fit top-0">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
