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
          id="1"
          title="Yamaha F310 - Full Size Steel String Acoustic Guitar - Traditional Western Body - Natural"
          price={1154.65}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51INShoKdNL._AC_SX569_.jpg"
          }
          count={1}
        />
        <Product
          id="2"
          title="Fender Frontman 10G Electric Guitar Amplifier"
          price={69.99}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51-tgqKzYgL._AC_.jpg"
          }
          count={1}
        />
        <Product
          id="6"
          title='CUK MSI GS75 Stealth Gamer Notebook (Intel i9-10980HK, 64GB RAM, 2TB NVMe SSD, NVIDIA GeForce RTX 2080 Super Max-Q 8GB, 17.3" FHD IPS-Level 300Hz 3ms, Windows 10 Pro) Gaming Laptop Computer'
          price={3499.99}
          rating={4}
          image={
            "https://m.media-amazon.com/images/I/71rnru+VLTL._AC_AA180_.jpg"
          }
          count={1}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="COAYU C530 Alexa App Control,Robotic Vacuum Cleaner with Water Tank, Sweep& Wet Mop 2 in 1,for Hard floors to Low-Pile Carpets(Black)"
          price={206.55}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61C6NDbaYIL._AC_SX569_.jpg"
          }
          count={1}
        />
        <Product
          id="4"
          title="HP Autozubehör 6925 Premium Fuel Canister 10 litres"
          price={35.85}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/414L68aDsgL._AC_SY355_.jpg"
          }
          count={1}
        />
        <Product
          id="5"
          title="Wireless Earbuds, Upgraded Anker Soundcore Liberty Neo Wireless Earphones with IPX7 Waterproof, Bluetooth 5, Stereo Calls, Noise Isolation, True Wireless Earbuds for Sports, Work Out"
          price={354.65}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41w4i8xUweL._AC_.jpg"
          }
          count={1}
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Singles Serve Coffee Makers With 4 Function Milk Frother, 2-In-1 Coffee Machine For K Cup Pod & Coffee Ground, Latte and Cappuccino Maker, Built in Portable Electric Milk Steamer, 3Oz Reservoir 5 Brew Size Small Coffee Brewer Machine for office Home Kitchen- Black"
          price={89.55}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Wv1HqCv0L._AC_SY450_.jpg"
          }
          count={1}
        />
        <Product
          id="8"
          title="Logitech MK735 Performance Wireless Keyboard & Mouse Combo"
          price={69.85}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71KcwUdpVcL._AC_SX425_.jpg"
          }
          count={1}
        />
        <Product
          id="9"
          title="Logitech M570 Wireless Trackball Mouse – Ergonomic Design with Sculpted Right-Hand Shape, Compatible with Apple Mac and Microsoft Windows Computers, USB Unifying Receiver, Dark Gray"
          price={29.85}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61QrqZ8uurL._AC_SX425_.jpg"
          }
          count={1}
        />
      </div>
    </div>
  );
}

export default Home;
