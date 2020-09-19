import React from "react";
import "../assets/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt="Prime Video"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406828640_.jpg"
      />
      <Product
        id="131224"
        title="A Fancy Fender Guitar"
        price={1154.6}
        rating={5}
        image={
          "https://images-na.ssl-images-amazon.com/images/I/51-tgqKzYgL._AC_.jpg"
        }
      />
    </div>
  );
}

export default Home;
