import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emptyCart from '../../assets/images/icons/empty-cart.png'
import azn from '../../assets/images/icons/azn-gray.png'
import plus from '../../assets/images/icons/plus.png'
import minus from '../../assets/images/icons/minus.png'
import remove from '../../assets/images/icons/remove.png'



export default function Cart() {

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

  const [cart, setCart] = useState([])

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('cart'))
    if (items) {
      setCart(items)
    }
  }, [])

  const removeItem = (e) => {
    let items = JSON.parse(localStorage.getItem('cart'))
    items = items.filter(a => a.id !== e)
    localStorage.setItem('cart', JSON.stringify(items))
    setCart(items)
  }

  const decreaseItem = (e) => {
    let items = JSON.parse(localStorage.getItem('cart'))
    let item = items.find(a => a.id === e)
    if (item.count > 1) {
      item.count--;
      localStorage.setItem('cart', JSON.stringify(items))
      setCart(items)
    }
    else {
      removeItem(e)
    }
  }

  const increaseItem = (e) => {
    let items = JSON.parse(localStorage.getItem('cart'))
    let item = items.find(a => a.id === e)
    if (item.count < 5) {
      item.count++;
      localStorage.setItem('cart', JSON.stringify(items))
      setCart(items)
    }
    else {
      alert('For more orders, call us!')
    }
  }





  return (
    <>
      <div className="cart-page">
        <div className="page-head" data-aos='fade-down'>
          <h1>
            Cart
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Home page
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/cart">
              Cart
            </NavLink>
          </div>
        </div>
        <div className="cart">
          <div className="cart-items">
            {
              cart.length === 0 ?
                <div className="cart-empty">
                  <img src={emptyCart} alt="Empty" />
                  <span> Empty </span>
                </div>
                :
                cart.map((a, i) => (
                  <div className="cart-item" key={i}>
                    <div className="cart-image">
                      <img src={a.image1 || a.image} alt="" />
                    </div>
                    <div className="cart-item-info">
                      <h2>
                        {a.name}
                      </h2>
                      <Link to={`/${a.type}`}>
                        {a.type}
                      </Link>
                      <span>
                        {a.price} <img src={azn} alt="AZN" />
                      </span>
                    </div>
                    <div className="items-count">
                      <button className='count-button' onClick={() => decreaseItem(a.id)}>
                        <img src={minus} alt="decrease" />
                      </button>
                      <p className='actual-count'>
                        {a.count}
                      </p>
                      <button className='count-button'>
                        <img src={plus} alt="increase" onClick={() => increaseItem(a.id)} />
                      </button>
                    </div>
                    <div className="item-price">
                      {a.price * a.count} <img src={azn} alt="AZN" />
                    </div>
                    <button className="remove-item" onClick={() => removeItem(a.id)}>
                      <img src={remove} alt="remove" />
                    </button>
                  </div>
                ))
            }
          </div>
          <div className={cart.length > 0 ? 'total-info' : 'total-info hidden'}>

          </div>
        </div>
      </div>
    </>
  )
}




