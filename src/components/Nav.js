import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Lorem from "../pages/Lorem";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              exact
              to="/Accueil"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Home"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/lorem"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Lorem
            </NavLink>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default Nav;
