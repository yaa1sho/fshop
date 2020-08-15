import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <form className={"reg-log-from"}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Login</label>
          <input
            type="Login"
            className="form-control"
            placeholder="Enter login"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
