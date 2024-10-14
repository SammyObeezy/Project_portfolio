import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import FavBook from "./FavBook";
import Subscribe from "./Subscribe";


import PromoBanner from "./PromoBanner";
import BestSelling from "./BestSelling";
// import OtherBooks from "./OtherBooks";
import Review from "./Review";
import Features from "./Features";
// import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Banner />

      <FavBook />
      <FavoriteBooks />
      <Features/>
      <BestSelling />

       <Review />
      <PromoBanner />
           {/* <Team /> */}
      <Subscribe/>
    </div>
  );
};

export default Home;
