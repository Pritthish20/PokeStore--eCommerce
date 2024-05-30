import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="">
        <h2> </h2>
        <Slider {...settings}>
          <div className="">
          <img className="lg:min-h-[400px]" src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="First slide" />
            <h3></h3>
          </div>
          <div className="">
          <img className="lg:min-h-[400px] xl:min-h-[720px]" src="https://static.vecteezy.com/system/resources/previews/012/605/413/non_2x/collection-of-ecommerce-security-icon-for-free-shipping-easy-return-secure-ordering-etc-isolated-on-white-background-vector.jpg" alt="First slide" />
            <h3></h3>
          </div>
          <div className="">
          <img className=" lg:min-h-[400px] xl:min-h-[740px] xl:pl-40" src="https://st5.depositphotos.com/81351998/66830/v/950/depositphotos_668300288-stock-illustration-commerce-line-icons-set-commerce.jpg" />
            <h3></h3>
          </div>
        </Slider>
      </div>
    

  );
}

export default HeroSection;