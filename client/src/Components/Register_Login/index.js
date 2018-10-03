import React from "react";
import Button from "../utils/button";
import Login from "./login";

const RegisterLogin = props => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>Lorem ipsum</p>
            <Button
              type="default"
              title="Create An Account"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>Lorem ipsum</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
