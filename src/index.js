import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import ManagPage from './pages/ManagPage';
import BookmarkPage from './pages/BookmarkPage';
import InsurePage from './pages/InsurePage';
import FyloPage from './pages/FyloPage';
import ContactPage from './pages/ContactPage';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/portfolio",
      element:<Portfolio/>
    },
    {
      path:"/manage",
      element:<ManagPage/>
    },
    {
      path:"/bookmark",
      element:<BookmarkPage/>
    },
    {
      path:"/insure",
      element:<InsurePage/>
    },
    {
      path:"/fylo",
      element:<FyloPage/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


