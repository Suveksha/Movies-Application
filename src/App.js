import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favourites from "./Components/Favourites";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/" exact render={(props)=>(
        <>
        <Banner {...props}/>
        <Movies {...props}/>
        </>
      )}/>
      <Route path="/Favourites" component={Favourites} />
      </Switch>
      {/* <Movies/> */}
      {/* <Banner/> */}
      {/* <Favourites/> */}
    </BrowserRouter>
  );
}

export default App;
