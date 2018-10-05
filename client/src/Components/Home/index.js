import React, { Component } from "react";
import { connect } from "react-redux";

import HomeSlider from "./home_slider";
import HomePromotion from "./home_promotion";
import CardBlock from "../utils/card_block";

import {
  getProductsByArrival,
  getProductsBySales
} from "../../actions/productActions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySales());
    this.props.dispatch(getProductsByArrival());
  }

  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySales}
          title="Best Selling Guitars"
        />
        <HomePromotion />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);
