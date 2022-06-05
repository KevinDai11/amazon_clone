import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver "
            price={1467.44}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg"
            count = {1}
            info = "This is a test product"
          />
          <Product
            id="49538094"
            title='Amazon Fire TV 43" 4-Series 4K UHD smart TV'
            price={369.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41g5QWiX+hL._AC_.jpg"
            count = {1}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 7 [GPS 41mm] Smart Watch w/ Midnight Aluminum Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant "
            price={399.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gg8mPlAuL._AC_SL1500_.jpg"
            count = {1}
          />
          <Product
            id="23445930"
            title="Echo Dot (4th Gen) with clock | Add Alexa to your nightstand | Glacier White"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51MzOVciT3L._AC_SL1000_.jpg"
            count = {1}
          />
          <Product
            id="3254354345"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Starlight (5th Generation) "
            price={749.00}
            rating={5}
            image="https://ss7.vzw.com/is/image/VerizonWireless/apple-ipad-air-spacegray-2022?hei=400"
            count = {1}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz "
            price={1199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SL1500_.jpg"
            count = {1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;