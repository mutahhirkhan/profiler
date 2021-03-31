import './App.css';
// import ReactDom from "react-dom"
import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Profiles from "./Pages/Profiles/Profiles"
import Details from "./Pages/Details/Details"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Home} exact/>
          <Route path ="/profiles" component = {Profiles} exact/>
          <Route path ="/profiles/:ProfileId" component = {Details} exact/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
