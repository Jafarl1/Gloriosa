import React, {useEffect} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';
import Favorite from './components/pages/Favorite';

import Login from './components/pages/Login';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfSale from './components/pages/TermsOfSale';
import Blog from './components/pages/Blog';
import Additions from './components/pages/Additions';

import Authorbouquets from './components/pages/prodpages/Authorbouquets'
import Cardspage from './components/pages/prodpages/Cardspage'
import Compositions from './components/pages/prodpages/Compositions'
import Mensbouquets from './components/pages/prodpages/Mensbouquets'
import Minibouquets from './components/pages/prodpages/Minibouquets'
import Monobouquets from './components/pages/prodpages/Monobouquets'
import Seasonbouquets from './components/pages/prodpages/Seasonbouquets'
import Weddingbouquets from './components/pages/prodpages/Weddingbouquets'
import Wowbouquets from './components/pages/prodpages/Wowbouquets'

import ProductItem from './components/pages/ProductItem';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css"
import './assets/css/nouislider.min.css'






function App() {
  
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/additions' element={<Additions />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/termsofsale' element={<TermsOfSale />} />

          <Route path='/authorbouquets' element={<Authorbouquets />} />
          <Route path='/cardspage' element={<Cardspage />} />
          <Route path='/compositions' element={<Compositions />} />
          <Route path='/mensbouquets' element={<Mensbouquets />} />
          <Route path='/minibouquets' element={<Minibouquets />} />
          <Route path='/monobouquets' element={<Monobouquets />} />
          <Route path='/seasonbouquets' element={<Seasonbouquets />} />
          <Route path='/weddingbouquets' element={<Weddingbouquets />} />
          <Route path='/wowbouquets' element={<Wowbouquets />} />
          <Route path='/productitem/*' element={<ProductItem />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;