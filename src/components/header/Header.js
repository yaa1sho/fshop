import React, { Component } from "react";
import logo from "../public/2300991.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Dropmenu from "../Dropmenu/Dropmenu";

export default class Header extends Component {
  render() {
    return (
      <nav className={"head-bar"}>
        <div>
          <Router>
            <div>
              <nav className={"navbar navbar-expand-lg navbar-light"}>
                <div className="container">
                  <Link className="navbar-brand" to={"/"}>
                    <span className={"home-logo"}>
                      <img className="img-home" src={logo} alt={"Home"} />
                    </span>
                  </Link>

                  <Dropmenu />

                  <input
                    className="nav-search"
                    type="search"
                    name="q"
                    placeholder="Search"
                  />

                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>
                          <a>Login</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>
                          <a>Sign up</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={Signup} />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </nav>
    );
  }
}
