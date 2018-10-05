import React, { Component } from "react";
import Button from "./button";

class Card extends Component {
  renderCardImage(images) {
    if (images.length) {
      return images[0].url;
    } else {
      return "/images/image_not_available.png";
    }
  }

  render() {
    const props = this.props;
    console.log(props);
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className="image"
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        />

        <div className="action_container">
          <div className="tags">
            <div className="brand">{props.brand.name}</div>
            <div className="name">{props.name}</div>
            <div className="price">{props.price}</div>
          </div>
          {props.grid ? <div className="description">Lorem ipsum</div> : null}
          <div className="actions">
            <div className="button_wrapp">
              <Button
                type="default"
                altClass="card_link"
                title="View Guitar"
                linkTo={`/product_detail/${props._id}`}
                addStyles={{
                  margin: "10px 0 0 0"
                }}
              />
            </div>
            <div className="button_wrapp">
              <Button
                type="cart_link"
                runAction={() => {
                  console.log("added to cart");
                }}
                altClass="card_link"
                title="View Guitar"
                linkTo={`/product_detail/${props._id}`}
                addStyles={{
                  margin: "10px 0 0 0"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
