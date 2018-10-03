import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions";
import FormField from "../utils/Forms/formField";
import { update, generateData, isFormValid } from "../utils/Forms/formActions";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter First Name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      lastName: {
        element: "input",
        value: "",
        config: {
          name: "lastName_input",
          type: "text",
          placeholder: "Enter Last Name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
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
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirmPassword_input",
          type: "password",
          placeholder: "Confirm password"
        },
        validation: {
          required: true,
          confirm: "password"
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formData, "register");
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "register");
    let formIsValid = isFormValid(this.state.formData, "register");
    if (formIsValid) {
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then(resp => {
          if (resp.payload.success) {
            this.setState({
              formError: false,
              formSuccess: true
            });
            setTimeout(() => {
              this.props.history.push("/register_login");
            }, 3000);
          } else {
            this.setState({
              formError: true
            });
          }
        })
        .catch(e => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={e => this.onSubmit(e)}>
                <h2>Personal Information</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"name"}
                      formData={this.state.formData.name}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"lastName"}
                      formData={this.state.formData.lastName}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    id={"email"}
                    formData={this.state.formData.email}
                    change={el => this.updateForm(el)}
                  />
                </div>
                <h2>Verify Password</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"password"}
                      formData={this.state.formData.password}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"confirmPassword"}
                      formData={this.state.formData.confirmPassword}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                </div>
                <div>
                  {this.state.formError ? (
                    <div className="error_label">
                      Please check your input values
                    </div>
                  ) : null}
                  <button onClick={e => this.onSubmit(e)}>
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
