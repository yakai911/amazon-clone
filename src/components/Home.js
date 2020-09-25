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
      <div className="home__row">
        <Product
          id="13122"
          title="Yamaha F310 - Full Size Steel String Acoustic Guitar - Traditional Western Body - Natural"
          price={1154.6}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51INShoKdNL._AC_SX569_.jpg"
          }
          count={1}
        />
        <Product
          id="131224"
          title="A Fancy Fender Guitar"
          price={1154.6}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51-tgqKzYgL._AC_.jpg"
          }
          count={1}
        />
      </div>
      <div className="home__row">
        <Product
          id="1322"
          title="COAYU C530 Alexa App Control,Robotic Vacuum Cleaner with Water Tank, Sweep& Wet Mop 2 in 1,for Hard floors to Low-Pile Carpets(Black)"
          price={1542}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61C6NDbaYIL._AC_SX569_.jpg"
          }
          count={1}
        />
        <Product
          id="14"
          title="HP Autozubehör 6925 Premium Fuel Canister 10 litres"
          price={3654.85}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/414L68aDsgL._AC_SY355_.jpg"
          }
          count={1}
        />
        <Product
          id="13224"
          title="Wireless Earbuds, Upgraded Anker Soundcore Liberty Neo Wireless Earphones with IPX7 Waterproof, Bluetooth 5, Stereo Calls, Noise Isolation, True Wireless Earbuds for Sports, Work Out"
          price={3654.85}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41w4i8xUweL._AC_.jpg"
          }
          count={1}
        />
      </div>
    </div>
  );
}

export default Home;
