import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Scrollbar } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import azn from '../../../assets/images/icons/azn-gray.png'
import Sidebar from '../Sidebar';
import emptypage from '../../../assets/images/icons/emptypage.png'




function Mensbouquets() {

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);

    if (el) {
      let top = el.getBoundingClientRect().top - 100;
      window.scrollTo(0, top);
    }
  });

  const { mensbouquets } = useSelector(x => x);

  const [filtered, setFiltered] = useState(mensbouquets);

  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      setFavItems(JSON.parse(localStorage.getItem('favorites')))
    }
  }, [])

  const addToFav = (id) => {
    let item = mensbouquets.find((a) => a.id === id);
    let newItem = [...favItems];

    if (newItem.some(a => a.id === item.id)) {
      newItem = newItem.filter(e => e.id !== item.id);
    }
    else {
      newItem.push(item);
    }
    setFavItems(newItem);
    localStorage.setItem('favorites', JSON.stringify(newItem))
  }

  const [tocart, setTocart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setTocart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addToCart = (id) => {
    let prod = mensbouquets.find((a) => a.id === id);
    let newProd = [...tocart];

    if (newProd.some(e => e.id === prod.id)) {
      newProd = newProd.filter(e => e.id !== prod.id);
    }
    else {
      newProd.push(prod);
    }
    setTocart(newProd);
    localStorage.setItem('cart', JSON.stringify(newProd))
  }


  return (
    <>
      <div className="products-page">
        <div className="page-head" data-aos="zoom-out-left">
          <h1>
            Mens' bouquets
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Home page
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/products">
              Products
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/mensbouquets">
              Mens' bouquets
            </NavLink>
          </div>
        </div>
        <div className="products-page-content">
          <div className="all-items">
            {
              filtered.length > 0 ?
                filtered.map((a, i) => (
                  <div className="one-item" id={a.name.replace(/\s/g, "")} key={i}>
                    <Swiper
                      scrollbar={true}
                      modules={[Scrollbar]}
                      className="mySwiper item-swiper"
                    >
                      <SwiperSlide className='item-slider'>
                        <img src={a.image1} alt="mensbouquet" />
                      </SwiperSlide>
                      <SwiperSlide className='item-slider'>
                        <img src={a.image2} alt="mensbouquet" />
                      </SwiperSlide>
                    </Swiper>
                    <Link to={`/productitem/${a.id}`}>
                      {a.name}
                    </Link>
                    <p>
                      {a.price} <img src={azn} className="azn-icon" alt="AZN" />
                    </p>
                    <div className="btn-group">
                      <button className="add-to-fav-btn" onClick={() => addToFav(a.id)}>
                        {
                          favItems.some(x => x.id === a.id) ? <i className="fa-solid fa-heart added"></i> : <i className="fa-solid fa-heart"></i>
                        }
                      </button>
                      <button className='add-to-cart-btn' onClick={() => addToCart(a.id)}>
                        {
                          tocart.some(x => x.id === a.id) ? <b> Added to cart </b> : 'Add to cart'
                        }
                      </button>
                    </div>
                  </div>
                ))
                :
                <div className="emptyPage">
                  <img src={emptypage} alt="Empty" />
                  <span>
                    Unfortunately, there are no products according to these parameters.
                  </span>
                </div>
            }
          </div>
          <Sidebar setFiltered={setFiltered} />
        </div>
      </div>
    </>
  )
}

export default Mensbouquets