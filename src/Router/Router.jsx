import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Home from '../pages/Home'
import PortfolioDetails from "../pages/PortfolioDetails";
export const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'details',
          element:<PortfolioDetails></PortfolioDetails>
        },
       
    ]
    },
   
  ]);