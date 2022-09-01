import React from 'react'
import logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'



export default function Footer() {


  return (
    <>
      <div className="footer-back">
        <div className="footer">
          <div className="footer-section" style={{ paddingTop: '0px' }}>
            <NavLink to="/" className="footerlogo">
              <img src={logo} alt="logo" />
              <div className="footerlogoname">
                <span>
                  Gloriosa
                </span>
                <span>
                  Flower Bar
                </span>
              </div>
            </NavLink>
            <div className="social-icons">
              <a href='https://www.facebook.com/gloriosa.az' target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href='https://www.instagram.com/gloriosa_az/' target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href='https://www.tiktok.com/@gloriosa.az' target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-section" style={{ paddingLeft: '50px' }}>
            <NavLink className='footer-pagelink' to="/">
              Home page
            </NavLink>
            <NavLink className='footer-pagelink' to="/about">
              About us
            </NavLink>
            <NavLink className='footer-pagelink' to="/products">
              Products
            </NavLink>
            <NavLink className='footer-pagelink' to="/blog">
              Blog
            </NavLink>
            <NavLink className='footer-pagelink' to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="footer-section" style={{ gap: '10px' }}>
            <div className="footer-contact">
              <i className="fa-solid fa-phone" style={{ transform: 'rotate(40deg)' }}></i>
              <a href="tel:+994514404400" rel="noopener noreferrer">
                +994 51 440 44 00
              </a>
            </div>
            <div className="footer-contact">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:gloriosaflowersbaku@gmail.com" rel="noopener noreferrer">
                gloriosaflowersbaku@gmail.com
              </a>
            </div>
            <div className="footer-contact">
              <i className="fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/maps/place/GLORIOSA/@40.3777275,49.8184819,17z/data=!3m1!4b1!4m5!3m4!1s0x40307df65e4a889d:0xdf3527f139fdfabc!8m2!3d40.3777275!4d49.8206706" target='_blank' rel="noopener noreferrer">
                20A Inshaatchilar Avenue (near Elmlar m-s)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
