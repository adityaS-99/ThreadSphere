import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider, { ShopContext } from './Context/ShopContext.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
// import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='/' element={<Shop />} />
      <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>} />
      <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ShopContextProvider>
  </React.StrictMode>,
)
