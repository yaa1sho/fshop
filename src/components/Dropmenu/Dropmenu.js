import React, { Component } from "react";
import "./Dropmenu.css";

export default class Dropmenu extends Component {
  render() {
    return (
      <nav className={"drop-menu"}>
        <input type={"checkbox"} id={"checkbox-menu"} />
        <label for={"checkbox-menu"}>
          <ul className={"menu touch"}>
            <li>
              <a class={"catalog"} href={"catalog"}>
                Каталог
              </a>
            </li>
            <li>
              <a href={"#"}>First</a>
            </li>
            <li>
              <a href={"#f"}>Second</a>
            </li>
            <li>
              <a class={"f1"} href={"#f1"}>
                Third
              </a>
            </li>
          </ul>
          <span className="toggle">☰</span>
        </label>{" "}
      </nav>
    );
  }
}
