import React, { Component } from 'react';
import { 
  createHashRouter, createRoutesFromElements, Route, RouterProvider 
} from 'react-router-dom';
import Home from './component/home/home';
import Layout from './component/layout';
import ErrorPage from './component/errorPage/errorPage';
import Landing1 from './component/detailedPage/landingVr1';
import Landing2 from './component/detailedPage/landingVr2';
import Landing3 from './component/detailedPage/landingVr3';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="example_page/landing_vr1" element={<Landing1 />} />
      <Route path="example_page/landing_vr2" element={<Landing2 />} />
      <Route path="example_page/landing_vr3" element={<Landing3 />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

class App extends Component {
  render() {
    return (
      <RouterProvider router={router} />
    );
  }
}

export default App;
