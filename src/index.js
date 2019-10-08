import ReactDOM from "react-dom";
import React, { Component } from "react";
import Appartement from "./pages/Appartement";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Nav from "./components/Nav";
import { NavLink } from "react-router-dom";
import Lorem from "./pages/Lorem";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/lorem" component={Lorem}/>
            <Route path="/list" component={Appartement} />
            <Route exact path="/" component={IndexPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
