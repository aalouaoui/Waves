import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands, getWoods } from "../../actions/productActions";

import { frets } from "../utils/Forms/fixed_categories";

import PageTop from "../utils/page_top";
import CollapseCheckbox from "../utils/collapseCheckbox";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;
    this.setState({
      filters: newFilters
    });
  };

  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Guitars" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                initialState={true}
                title="Brands"
                list={products.brands}
                handleFilters={(filters => this.handleFilters(), "brand")}
              />
              <CollapseCheckbox
                initialState={false}
                title="Frets"
                list={frets}
                handleFilters={(filters => this.handleFilters(), "frets")}
              />
              <CollapseCheckbox
                initialState={false}
                title="Woods"
                list={products.woods}
                handleFilters={(filters => this.handleFilters(), "wood")}
              />
            </div>
            <div className="right">Right</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Shop);
