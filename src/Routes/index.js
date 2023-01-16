import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Mobile from "../Pages/Mobile/Mobile";
import Cars from "../Pages/Cars/Cars";
import Houses from "../Pages/Houses/Houses";
import LandScape from "../Pages/LandsPlot/LandsPlots";
import Tablets from "../Pages/Tablets/Tablets";
import Tv from "../Pages/TvVideoAudio/TvVideoAudio";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mobile">
            <Mobile />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/Houses">
            <Houses />
          </Route>
          <Route path="/LandsPlots">
            <LandScape />
          </Route>
         <Route path="/Tablets">
         <Tablets/>
         </Route>
         <Route path="/TvVideoAudio">
         <Tv/>
         </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
