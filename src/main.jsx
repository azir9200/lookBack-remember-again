import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Root from './Root/Root.jsx';
import Products from './Pages/Products/Products.jsx';
import ProductDetails from './Pages/Products/ProductDetails.jsx';
import Login from './Pages/Login/Login.jsx';
import Error from './Error/Error.jsx';
import Phone from './components/Phone/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/bottles.json')
      },
      {
        path: '/product',
        element: <Products></Products>
      },
      {
        path: '/productdetails',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/phones/',
        element: <Phone></Phone>,
        loader: () => fetch('/bottles.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
