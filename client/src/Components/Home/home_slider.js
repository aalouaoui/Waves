import React from "react";
import Slider from "react-slick";
import Button from "../utils/button";

const HomeSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const slides = [
    {
      img: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      linkTitle: "Shop Now",
      linkTo: "/shop"
    },
    {
      img: "/images/featured/featured_home_2.jpg",
      lineOne: "B-Stock",
      lineTwo: "Awesome Discounts",
      linkTitle: "View Offers",
      linkTo: "/shop"
    }
  ];

  const generateSlides = () =>
    slides
      ? slides.map((slide, index) => (
          <div key={index}>
            <div
              className="featured_image"
              style={{
                background: `url(${slide.img})`,
                height: `${window.innerHeight}px`
              }}
            >
              <div className="featured_action">
                <div className="tag title">{slide.lineOne}</div>
                <div className="tag low_title">{slide.lineTwo}</div>
                <div>
                  <Button
                    type="default"
                    title={slide.linkTitle}
                    linkTo={slide.linkTo}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      : null;

  return (
    <div className="featured_container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default HomeSlider;
