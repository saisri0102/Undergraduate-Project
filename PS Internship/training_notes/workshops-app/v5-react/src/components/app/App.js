// rsf
import React from "react";
import { Route } from "react-router-dom";

import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import WorkshopsList from "../workshops-list/WorkshopsList";
import WorkshopDetails from "../workshops-details/WorkshopDetails";

function App(props) {
  return (
    <div>
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/workshops" component={WorkshopsList} exact />
      <Route path="/workshops/:id" component={WorkshopDetails} />
    </div>
  );
}

export default App;
