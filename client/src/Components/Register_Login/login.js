import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/userActions";
import FormField from "../utils/Forms/formField";
import { update, generateData, isFormValid } from "../utils/Forms/formActions";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter email address"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formData, "login");
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "login");
    let formIsValid = isFormValid(this.state.formData, "login");
    if (formIsValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then(resp => {
        if (resp.payload.loginSuccess) {
          this.props.history.push("/user/dashboard");
        } else {
          this.setState({
            formError: true
          });
        }
      });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={e => this.onSubmit(e)}>
          <FormField
            id={"email"}
            formData={this.state.formData.email}
            change={el => this.updateForm(el)}
          />
          <FormField
            id={"password"}
            formData={this.state.formData.password}
            change={el => this.updateForm(el)}
          />
          {this.state.formError ? (
            <div className="error_label">Please check your input values</div>
          ) : null}
          <button onClick={e => this.onSubmit(e)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(Login));
