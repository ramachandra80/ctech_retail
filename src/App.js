import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import Items from "./components/Items"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/*Just give a try to make it as componet and pass all the properties.*/}
          <Route exact path="/" component={HomePage} />
          <Route path="/items" component={Items} />
          <Route path="/gst" component={Items} />
          <Route path="/priceRules" component={Items} />
          <Route path="/createInvoice" component={Items} />
          <Route path="/createRecInv" component={Items} />
          <Route path="/updateInvoice" component={Items} />
          <Route path="/createInventory" component={Items} />
          <Route path="/createRecInven" component={Items} />
          <Route path="/updateInventory" component={Items} />
          <Route path="/dailyReports" component={Items} />
          <Route path="/weeklyReports" component={Items} />
          <Route path="/monthlyReports" component={Items} />
        </Switch>
      </div>
    );
  }
}

export default App;
