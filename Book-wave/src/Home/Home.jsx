import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import BestSelling from "./BestSelling";
// import OtherBooks from "./OtherBooks";
// import Review from "./Review";
// import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      
      <FavBook />
      <FavoriteBooks />
      <BestSelling/>
      <PromoBanner />
      {/* <OtherBooks />
      <Review />
      <Team /> */}
    </div>
  );
};

export default Home;
