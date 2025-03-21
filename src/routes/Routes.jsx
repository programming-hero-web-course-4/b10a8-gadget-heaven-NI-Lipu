import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard"
import AllProducts from "../components/AllProducts";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import Cards from "../components/Cards";
import ErrorPage from "../components/ErrorPage";
// import Wishlist from "../components/Wishlist";
// import Card from "../components/Card";

const routes = createBrowserRouter([
{
  path: '/',
  element: <MainLayout></MainLayout>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('/categories.json'),
      children: [
        {
          path: '/',
          element: <Products></Products>,
          loader: () => fetch('../products.json'),
        },
        {
          path: '/category/:category',
          element: <Products></Products>,
          loader: () => fetch('../products.json'),
        }
      ]
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          index: true,
          element: <Cards></Cards>
        },
        {
          path: 'wishlist',
          element: <Cards></Cards>
        }
      ]
    },
    {
      path: '/All-Products',
      element: <AllProducts></AllProducts>,
      loader: () => fetch('../products.json'),
    },
    {
      path: '/product/:id',
      element: <ProductDetails></ProductDetails>,
      loader: () => fetch('../products.json'),
    },
  ]
}
])

export default routes;