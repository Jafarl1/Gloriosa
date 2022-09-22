import React, { useState, useEffect } from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Blog() {

  const { blogs } = useSelector(x => x)

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

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
      <div className="blogpage">
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
                  Blog
                </h1>
                <div className="page-links">
                  <NavLink to="/">
                    Home page
                  </NavLink>
                  <i className="fa-solid fa-angle-right"></i>
                  <NavLink to="/blog">
                    Blog
                  </NavLink>
                </div>
              </div>
              <div className="allblogs">
                {
                  blogs.map((a, i) => (
                    <Link to={`/moreaboutblog/${a.id}`} className="blogpage-item" key={i}>
                      <div className="img">
                        <img src={a.image} alt="Blog" />
                      </div>
                      <h1>
                        {a.name}
                      </h1>
                      <span>
                        {a.type}
                      </span>
                    </Link>
                  ))
                }
              </div>
            </>
        }
      </div>
    </>
  )
}
