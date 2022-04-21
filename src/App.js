import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Homepage";

import MyProfile from "./MyProfile";
import Product from "./Product";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/search">
          <SearchBar />
        </Route>

        <Route exact path="/collection/:keyword">
          <MyProfile />
        </Route>
        <Route exact path="/products/:id">
          <Product />
        </Route>
      </Router>
    </>
  );
};

export default App;
