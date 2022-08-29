import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import empty from '../../assets/images/icons/sad.png'





export default function Favorite() {

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('favorites'))
    if (items){
      setFavorites(items)
    }
  }, [])

  const removeItem = (e) => {
    let items = JSON.parse(localStorage.getItem('favorites'))
    items = items.filter(a => a.id !== e)
    localStorage.setItem('favorites', JSON.stringify(items))
    setFavorites(items)
  }

  const [tocart, setTocart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart')){
      setTocart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addToCart = (id) => {
    let prod = favorites.find((a) => a.id === id);
    const newProd = [...tocart];
    
    if (newProd.some(e => e.id === prod.id)){
      return
    }
    else {
      newProd.push(prod);
      setTocart(newProd)
    }
    localStorage.setItem('cart', JSON.stringify(newProd))
  }


  return (
    <>
      <div className="favorite-page">

        <div className="page-head" data-aos='fade-down'>
          <h1>
            Sevimlilər
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Ana səhifə
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/favorite">
              Sevimlilər
            </NavLink>
          </div>
        </div>

        <div className="favorite">
          {
            favorites.length === 0 ?
              <div className="empty">
                <img src={empty} alt="Empty" />
                <span> Heç nə tapılmadı </span>
              </div>
            :
            favorites.map((a, i) => (
              <div className="favorite-item" key={i}>
                <div className="image">
                  <img src={a.image1 || a.image} alt={a.name} />
                </div>
                <div className="item-info">
                  <Link to={`/${a.type}`}>
                    {a.type}
                  </Link>
                  <h2>
                    {a.name}
                  </h2>
                  <p>
                    {a.price} AZN
                  </p>
                </div>
                <div className="fav-btns">
                  <button className='del' onClick={() => removeItem(a.id)}>
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <button className='add' onClick={() => addToCart(a.id)}>
                    Səbətə əlavə et
                  </button>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}
