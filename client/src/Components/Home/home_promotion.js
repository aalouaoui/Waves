import React from "react";
import Button from "../utils/button";

const HomePromotion = props => {
  const promotion = {
    img: "/images/featured/featured_home_3.jpg",
    lineOne: "Up to 40% off",
    lineTwo: "on second hand guitars",
    linkTitle: "Shop Now",
    linkTo: "/shop"
  };

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{
          background: `url(${promotion.img})`
        }}
      >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineTwo}</div>
        <div>
          <Button
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
          />
        </div>
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
