import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "../../../actions/userActions";

class Header extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      },
      {
        name: "Guitars",
        linkTo: "/shop",
        public: true
      }
    ],
    user: [
      {
        name: "My Cart",
        linkTo: "/user/cart",
        public: false
      },
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false
      },
      {
        name: "Log In",
        linkTo: "/register_login",
        public: true
      },
      {
        name: "Log Out",
        linkTo: "/user/logout",
        public: false
      }
    ]
  };

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(resp => {
      if (resp.payload.success) {
        this.props.history.push("/");
      }
    });
  };

  cartLink = (item, index) => {
    const user = this.props.user.userData;
    return (
      <div className="cart_link" key={index}>
        <span>{user.cart ? user.cart.length : 0}</span>
        <Link to={item.linkTo}>{item.name}</Link>
      </div>
    );
  };

  defaultLink = (item, index) =>
    item.name === "Log Out" ? (
      <Link to={item.linkTo} key={index} onClick={() => this.logoutHandler()}>
        {item.name}
      </Link>
    ) : (
      <Link to={item.linkTo} key={index}>
        {item.name}
      </Link>
    );

  showLinks = type => {
    let list = [];
    if (this.props.user.userData) {
      type.forEach(item => {
        if (!this.props.user.userData.isAuth) {
          if (item.public) {
            list.push(item);
          }
        } else {
          if (item.name !== "Log In") {
            list.push(item);
          }
        }
      });
    }
    return list.map((item, index) => {
      if (item.name !== "My Cart") {
        return this.defaultLink(item, index);
      } else {
        return this.cartLink(item, index);
      }
    });
  };

  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">WAVES</div>
          </div>
          <div className="right">
            <div className="top">{this.showLinks(this.state.user)}</div>
            <div className="bottom">{this.showLinks(this.state.page)}</div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(withRouter(Header));
