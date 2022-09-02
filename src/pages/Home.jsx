import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import SlideBar from "../components/SlideBar";
const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <SlideBar />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default Home;
