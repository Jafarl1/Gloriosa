import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/images/logo.svg'
import loupe from '../assets/images/icons/search.svg'
import heart from '../assets/images/icons/favorites.svg'
import cart from '../assets/images/icons/cart.svg'
import user from '../assets/images/icons/user.svg'
import scrollTopImg from '../assets/images/icons/scroll-top.png'


export default function Header() {

    let { pathname } = useLocation();

    const [value, setValue] = useState('');

    const { allData } = useSelector(state => state)

    // const [allData, setAllData] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:7000/allData")
    //         .then(res => res.json())
    //         .then(data => setAllData(data))
    // }, []);

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(allData.filter(a => {
            if (a.type)
                return a.name.toLowerCase().includes(value.toLowerCase()) ||
                    a.type.toLowerCase().includes(value.toLowerCase())
        }));
    }, [value]);

    AOS.init({
        duration: 800,
        easing: 'ease'
    })

    const [toggle, setToggle] = useState(false)

    const clickSearch = () => {
        setToggle(!toggle)
        setValue('')
    }

    const [srcline, setSrcline] = useState(false)

    const openSrcLine = () => {
        setSrcline(!srcline)
        setValue('')
    }

    const [fix, setFix] = useState(false)

    const setFixed = () => {
        if (window.scrollY > 300) {
            setFix(true)
            setToggle(false)
            setValue('')
        }
        else {
            setFix(false)
            setSrcline(false)
        }
    }
    window.addEventListener("scroll", setFixed)

    const [scrollTop, setScrollTop] = useState(false)

    const showScrollBtn = () => {
        if (window.scrollY > 500) {
            setScrollTop(true)
        }
        else {
            setScrollTop(false)
        }
    }
    window.addEventListener("scroll", showScrollBtn)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        setValue("");
    }, [pathname])


    return (
        <>
            <div className='navbar-back'>
                <div className="navbar">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="logo" />
                        <div className="logoname">
                            <span>Gloriosa</span>
                            <span>Flower Bar</span>
                        </div>
                    </NavLink>
                    <div className="menu">
                        <NavLink className='pagelink' to="/about">
                            About us
                        </NavLink>
                        <NavLink className='pagelink' to="/products">
                            Products
                        </NavLink>
                        <NavLink className='pagelink' to="/blog">
                            Blog
                        </NavLink>
                        <NavLink className='pagelink' to="/contact">
                            Contact
                        </NavLink>
                    </div>
                    <div className="userside">
                        <span onClick={clickSearch}> <img src={loupe} alt="search" style={{ width: '70%' }} /> </span>
                        <NavLink to='/favorite'> <img src={heart} alt="favorites" style={{ width: '70%' }} /> </NavLink>
                        <NavLink to='/cart'> <img src={cart} alt="cart" /> </NavLink>
                        <NavLink to='/login'> <img src={user} alt="user" style={{ width: '77%' }} /> </NavLink>
                    </div>

                    <div className="burger-768">
                        <span onClick={clickSearch}>
                            <img src={loupe} alt="search" style={{ width: '70%' }} />
                        </span>
                        <button className="burger-menu">
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                        </button>
                    </div>
                </div>

                <div className={toggle ? 'searchdiv open' : 'searchdiv'}>
                    <input
                        type="search"
                        name="searchinp"
                        id="searchinp"
                        value={value}
                        placeholder='Axtar...'
                        onChange={(x) => setValue(x.target.value)}
                    />
                    <i className="fa-solid fa-angle-up closenow" onClick={() => clickSearch()}></i>

                    <div style={{ display: value ? "block" : "none" }} className='filtered-items'>
                        {
                            filteredData.map(a =>
                                // <Link to={`/${a.type}#${a.name.replace(/\s/g,"").replace(/ə/gi,'e')}`} key={a.id}>
                                <Link to={`/productitem/${a.id}`} key={a.id}>
                                    <img src={a.image || a.image1} alt="Flowers" />
                                    <div className="filteredItemInfo">
                                        <p style={{ fontSize: '20px' }}>{a.name}</p>
                                        <p>{a.price} AZN</p>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>

                <div className="socials" data-aos="fade-right">
                    <a className='a1' href='https://www.facebook.com/gloriosa.az' target='_blank' rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                        <span className='span1'> Follow us on Facebook! </span>
                    </a>
                    <a className='a2' href='https://www.instagram.com/gloriosa_az/' target='_blank' rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                        <span className='span2'> Follow us on Instagram! </span>
                    </a>
                    <a className='a3' href='https://www.tiktok.com/@gloriosa.az' target='_blank' rel="noopener noreferrer">
                        <i className="fa-brands fa-tiktok"></i>
                        <span className='span3'> Follow us on Tiktok! </span>
                    </a>
                </div>

                <div className="whatsapp circle1"></div>
                <div className="whatsapp circle2"></div>
                <a href="https://wa.me/+994514404400?text=Salam.%20Sizə%20website%20vasitəsilə%20müraciət%20edirəm."
                    className="whatsapp"
                    target='_blank' rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>

                <button
                    className={scrollTop ? 'scroll-top show-top-button' : 'scroll-top'}
                    data-aos='zoom-in'
                    onClick={() => scrollToTop()}>
                    <img src={scrollTopImg} alt="scroll top" />
                </button>
            </div>

            <div className={fix ? 'navbar-back-onscroll show-bar' : 'navbar-back-onscroll'}>
                <div className="navbar-onscroll">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="logo" />
                        <div className="logoname">
                            <span>Gloriosa</span>
                            <span>Flower Bar</span>
                        </div>
                    </NavLink>
                    <div className="menu">
                        <NavLink className={'pagelink'} to="/about">
                            Haqqımızda
                        </NavLink>
                        <NavLink className={'pagelink'} to="/products">
                            Məhsullar
                        </NavLink>
                        <NavLink className={'pagelink'} to="/blog">
                            Bloq
                        </NavLink>
                        <NavLink className={'pagelink'} to="/contact">
                            Əlaqə
                        </NavLink>
                    </div>
                    <div className="userside">
                        <span onClick={openSrcLine}> <img src={loupe} alt="search" style={{ width: '70%' }} /> </span>
                        <NavLink to='/favorite'> <img src={heart} alt="favorites" style={{ width: '70%' }} /> </NavLink>
                        <NavLink to='/cart'> <img src={cart} alt="cart" /> </NavLink>
                        <NavLink to='/login'> <img src={user} alt="user" style={{ width: '77%' }} /> </NavLink>
                    </div>
                </div>
                <div className={srcline ? 'searchdiv2 open2' : 'searchdiv2'}>
                    <input
                        type="search"
                        name="searchinp2"
                        id="searchinp2"
                        value={value}
                        placeholder='Axtar...'
                        onChange={(x) => setValue(x.target.value)}
                    />
                    {/* <i className="fa-solid fa-magnifying-glass searchnow2"></i>  */}
                    <i className="fa-solid fa-angle-up closenow2" onClick={() => openSrcLine()}></i>

                </div>
            </div>
        </>
    )
}
