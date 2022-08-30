import React from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import proditem1 from "../../assets/images/prodpage/proditem1.jpg";
import proditem2 from "../../assets/images/prodpage/proditem2.jpg";
import proditem3 from "../../assets/images/prodpage/proditem3.jpg";
import proditem4 from "../../assets/images/prodpage/proditem4.jpg";
import proditem5 from "../../assets/images/prodpage/proditem5.jpg";
import proditem6 from "../../assets/images/prodpage/proditem6.jpg";
import proditem7 from "../../assets/images/prodpage/proditem7.jpg";
import proditem8 from "../../assets/images/prodpage/proditem8.jpg";
import proditem9 from "../../assets/images/prodpage/proditem9.jpg";
import azn from '../../assets/images/icons/azn.png'



export default function Products() {


  AOS.init({
    duration: 800,
    easing: 'ease'
  })



  return (
    <>

      <div className="prodpage">
        <div className="page-head" data-aos='fade-down'>
          <h1>
            All products
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Home page
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/products">
              Products
            </NavLink>
          </div>
        </div>
        <div className="allproducts">

          <NavLink to='/authorbouquets' className="proditem" key={1}>
            <img src={proditem1} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Author bouquets
              </h1>
              <div className="price">
                <span> 100 <img src={azn} alt="" /> </span>
                <span> - </span>
                <span> 300 <img src={azn} alt="" /> </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/compositions' className="proditem" key={2}>
            <img src={proditem2} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Compositions
              </h1>
              <div className="price">
                <span> 50 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/wowbouquets' className="proditem" key={3}>
            <img src={proditem3} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                WoW bouquets
              </h1>
              <div className="price">
                <span> 300 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/minibouquets' className="proditem" key={4}>
            <img src={proditem4} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Mini bouquets
              </h1>
              <div className="price">
                <span> 15 <img src={azn} alt="" /> </span>
                <span> - </span>
                <span> 25 <img src={azn} alt="" /> </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/mensbouquets' className="proditem" key={5}>
            <img src={proditem5} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Mens' bouquets
              </h1>
              <div className="price">
                <span> 60 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/monobouquets' className="proditem" key={6}>
            <img src={proditem6} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Mono bouquets
              </h1>
              <div className="price">
                <span> 80 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/seasonbouquets' className="proditem" key={7}>
            <img src={proditem7} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Season bouquets
              </h1>
              <div className="price">
                <span> 40 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/weddingbouquets' className="proditem" key={8}>
            <img src={proditem8} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Wedding bouquets
              </h1>
              <div className="price">
                <span> 50 <img src={azn} alt="" /> </span>
                <span> + </span>
              </div>
            </div>
          </NavLink>

          <NavLink to='/cardspage' className="proditem" key={9}>
            <img src={proditem9} className="prodimg" alt="proditem1" />
            <div className="text">
              <h1>
                Cards
              </h1>
              <div className="price">
                <span> 3 <img src={azn} alt="AZN" /> </span>
              </div>
            </div>
          </NavLink>

        </div>
      </div>


    </>
  )
}
