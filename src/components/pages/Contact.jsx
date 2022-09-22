import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClipboardJS from "clipboard";
new ClipboardJS(".copybutton");


export default function Contact() {

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

  const copyClick = () => {
    alert('The email address was copied to the clipboard')
  }

  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    }
    else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);


  return (
    <>
      <div className="contactpage">
        {
          !playAnimation ?
            <div className="loader">
              <PuffLoader
                color="#c5101a"
                size={90}
              />
            </div>
            :
            <>
              <div className="page-head" data-aos='fade-down'>
                <h1>
                  Contact
                </h1>
                <div className="page-links">
                  <NavLink to="/">
                    Home page
                  </NavLink>
                  <i className="fa-solid fa-angle-right"></i>
                  <NavLink to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
              <div className="main">
                <div className="contacts" data-aos='fade-right'>

                  <h2><i className="fa-solid fa-location-dot contactdot" style={{ 'marginLeft': '5px' }}></i> Adress </h2>
                  <p> 20A Inshaatchilar Avenue (near Elmlar m-s) </p>

                  <h2><i className="fa-solid fa-phone contactdot"></i> Phone number </h2>
                  <p> +994 51 440 44 00 </p>

                  <h2> <i className="fa-solid fa-envelope contactdot"></i> E-Mail </h2>
                  <div className="maildiv">
                    <p id='text'> gloriosaflowersbaku@gmail.com </p>

                    <button
                      className="copybutton"
                      data-clipboard-action="copy"
                      data-clipboard-target="#text"
                      onClick={() => copyClick()}
                    >
                      <i className="fa-solid fa-copy"></i>
                      <span className='copyspan'> Copy to clipboard </span>
                    </button>

                  </div>

                  <h2><i className="fa-solid fa-clock contactdot"></i> Work hours </h2>
                  <p> 09:00 - 22:00 </p>

                </div>
                <div className="map" data-aos='fade-left'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.404467791249!2d49.81848191502215!3d40.37772747936972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307df65e4a889d%3A0xdf3527f139fdfabc!2sGLORIOSA!5e0!3m2!1sru!2s!4v1651658604922!5m2!1sru!2s"
                    title='Gloriosa location'
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
}
