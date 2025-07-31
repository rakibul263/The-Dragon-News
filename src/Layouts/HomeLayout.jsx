import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Latest_News from "../Components/Latest News/Latest_News";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/Home Layout/Left Aside/LeftAside";
import RightAside from "../Components/Home Layout/Right Aside/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <div className="w-11/12 mx-auto">
          <section>
            <Latest_News></Latest_News>
          </section>
          <nav className="mt-5">
            <Navbar></Navbar>
          </nav>
        </div>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
