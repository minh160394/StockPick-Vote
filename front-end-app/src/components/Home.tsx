import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__container">
      <div className="content-script-left">
        <div className="script-headline">
          TrendingStockClubs was proud of being the biggest investor clubs
        </div>
        <div className="script-content">
          It is the place that all investor can share their thought about the
          stock market.Aslo they could pridict the movement of stock price every
          weeks, the investor or the trader has been in the stock market, can
          help newbie to avoid losing money by the lack of experience.
        </div>
      </div>
      <div className="image-right">
        <div className="image-picture">
          <img src="../images/home-content-image.png"></img>
        </div>
        <div className="imgage-content"></div>
      </div>
    </div>
  );
};

export default Home;
