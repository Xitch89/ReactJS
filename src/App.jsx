import React, { Component } from "react";
import classes from "./App.module.css";
import Home from "./component/home/home";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {
  LandingVr1,
  LandingVr2,
  LandingVr3,
} from "./component/detailed_page/detailed_page";
import Layout from "./component/layout";
import ErrorPage from "./component/error_page/error_page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/example_page/landing_vr1" element={<LandingVr1 />} />
      <Route path="/example_page/landing_vr2" element={<LandingVr2 />} />
      <Route path="/example_page/landing_vr3" element={<LandingVr3 />} />
      <Route path="*" element={<ErrorPage /> } />
    </Route>
  )
);


class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
    }
  }

export default App;