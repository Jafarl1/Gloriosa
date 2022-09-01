import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



function MoreAboutBlog() {

    AOS.init({
        duration: 800,
        easing: 'ease'
    })

    const { pathname } = useLocation();
    const id = pathname.substr(-2);

    const { blogs } = useSelector(state => state)
    const item = blogs.find(a => a.id === +id)


    return (
        <>
            <div className="moreaboutblog">
                <div className="page-head" data-aos="fade-left">
                    <h1>
                        More about blog
                    </h1>
                    <div className="page-links">
                        <NavLink to="/">
                            Home page
                        </NavLink>
                        <i className="fa-solid fa-angle-right"></i>
                        <NavLink to="/blog">
                            Blog
                        </NavLink>
                        <i className="fa-solid fa-angle-right"></i>
                        <NavLink to={`/moreaboutblog/${item.id}`}>
                            {item.name}
                        </NavLink>
                    </div>
                </div>
                <div className="more-item" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing='ease-out'>
                    <img src={item.image} alt="" />
                    <p>
                        {item.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MoreAboutBlog