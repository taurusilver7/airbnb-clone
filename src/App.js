import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchPage from "./components/SearchPage/SearchPage";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Experience />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
