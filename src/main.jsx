import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {FirebaseProvider} from './Context/Firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import HomePage from './landing_page/Home/HomePage'
import Signup from './landing_page/Signup/Signup'
import AboutPage from './landing_page/About/AboutPage'
import ProductPage from './landing_page/Products/ProductPage'
import PricingPage from './landing_page/Pricing/PricingPage'
import SupportPage from './landing_page/Support/SupportPage'
import NotFound from './landing_page/NotFound'
import Login from './landing_page/Signup/Login'
import ForgetPassword from './landing_page/Signup/ForgetPassword'
import Dashboard from './dashboard_page/Dashboard'
import WatchList from './dashboard_page/WatchList'
import OrdersPage from './dashboard_page/Orders/OrdersPage'
import HoldingsPage from './dashboard_page/Holdings/HoldingsPage'
import PositionsPage from './dashboard_page/Positions/PositionsPage'
import FundsPage from './dashboard_page/Funds/FundsPage'
import ProfilePage from './dashboard_page/Profile/ProfilePage';
import EmailVerification from './landing_page/Signup/EmailVerification';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<FirebaseProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/products' element={<ProductPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dashboard/watchlist' element={<WatchList/>}></Route>
      <Route path='/dashboard/orders' element={<OrdersPage/>}></Route>
      <Route path='/dashboard/holdings' element={<HoldingsPage/>}></Route>
      <Route path='/dashboard/positions' element={<PositionsPage/>}></Route>
      <Route path='/dashboard/funds' element={<FundsPage/>}></Route>
      <Route path='/emailVerification' element={<EmailVerification/>}></Route>
      <Route path='/dashboard/profilepage' element={<ProfilePage/>}/>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <ToastContainer limit={1} autoClose={2000}/>
  </BrowserRouter>
  </FirebaseProvider>
  </React.StrictMode>
 
)
