import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import About from "./components/AboutPage/About";
import Auth from "./components/Auth/Auth";
import Placement from "./components/Placements/Placements"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Auth} />
        <Route path="/ptcell" exact component={Placement}/>
      </Switch>
    </Router>
  );
}

export default App;
