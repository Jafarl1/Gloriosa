import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { EffectCube, Pagination, Autoplay, EffectFlip, Mousewheel } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Moment from 'moment';
import swal from 'sweetalert';
import { nanoid } from 'nanoid';

import Additions from "./Additions";

import close from '../../assets/images/icons/close.png'
import bouquet from '../../assets/images/icons/flower-bouquet.png'
import delivery from '../../assets/images/icons/delivery.png'
import bonus from '../../assets/images/icons/bonus.png'
import photo from '../../assets/images/icons/camera.png'

import importroses from '../../assets/images/ecuador-blog.jpg'
import hydrangeas from '../../assets/images/hydrangea-blog.jpg'
import bouquetcare from '../../assets/images/bouquet-blog.jpg'
import compositioncare from '../../assets/images/composition-blog.jpg'
import star from '../../assets/images/icons/star.svg'



export default function Home() {

  AOS.init({
    duration: 800,
    easing: 'ease'
  })

  const { bestsellers } = useSelector(state => state)
  const { mainslider } = useSelector(state => state)

  const [modal, setModal] = useState(false);
  const moreAbout = () => {
    setModal(!modal)
  }

  const [myName, setMyName] = useState('')
  const [mySurname, setMySurname] = useState('')
  const [comment, setComment] = useState('')

  const [nameError, setNameError] = useState(false)
  const [surnameError, setSurnameError] = useState(false)
  const [commentError, setCommentError] = useState(false)

  const [formValid, setFormValid] = useState(false)

  const handleName = (a) => {
    if (a.target.value.length > 2) {
      setMyName(a.target.value)
      setNameError(false)
    }
    else {
      setNameError(true)
    }
  }

  const handleSurname = (a) => {
    if (a.target.value.length > 2) {
      setMySurname(a.target.value)
      setSurnameError(false)
    }
    else {
      setSurnameError(true)
    }
  }

  const handleComment = (a) => {
    if (a.target.value.length > 2) {
      setComment(a.target.value)
      setCommentError(false)
    }
    else {
      setCommentError(true)
    }
  }

  const checkName = (e) => {
    if (e.target.value.length < 3) {
      setNameError(true)
    }
    else {
      setNameError(false)
    }
  }

  const checkSurname = (e) => {
    if (e.target.value.length < 3) {
      setSurnameError(true)
    }
    else {
      setSurnameError(false)
    }
  }

  const checkComment = (e) => {
    if (e.target.value.length < 3) {
      setCommentError(true)
    }
    else {
      setCommentError(false)
    }
  }

  useEffect(() => {
    if (!nameError && !surnameError && !commentError && myName !== '' && mySurname !== '' && comment !== '') {
      setFormValid(true)
    }
    else {
      setFormValid(false)
    }
  }, [nameError, surnameError, myName, mySurname, commentError, comment])

  const [customerComments, setCustomerComments] = useState([])

  const newComment = (a) => {
    a.preventDefault()
    const date = Moment().format('DD.MM.YYYY H:mm')

    setCustomerComments([...customerComments, {
      name: myName,
      surname: mySurname,
      comment: comment,
      date: date,
      id: nanoid()
    }])

    swal({
      title: "Thank you for your comment!",
      text: "Your opinion is very important to us",
      icon: "success",
      button: "Close",
    });
    a.target.reset();
    setMyName('')
    setMySurname('')
    setComment('')
  }

  const [commentsPage, setCommentsPage] = useState(false)

  const allComments = () => {
    setCommentsPage(!commentsPage)
  }

  const removeComment = (id) => {
    let removed = customerComments.filter(e => e.id !== id)
    setCustomerComments(removed)
  }


  return (
    <>
      <div className="wholehome">
        <div className="homepage">
          <div className="main">
            <div className="maintext" data-aos='zoom-out'>
              <span>
                Express
              </span>
              <span>
                your love
              </span>
              <span>
                with flowers!
              </span>
            </div>
            <div className="mainslider" data-aos='zoom-in'>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                loop={true}
                speed={1200}
                autoplay={{ delay: 1200 }}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 10,
                  shadowScale: 0.9,
                }}
                modules={[EffectCube, Autoplay]}
                className="mySwiper"
              >
                {
                  mainslider.map((a, i) => (
                    <SwiperSlide key={i}>
                      <img src={a.image} alt={a.name} />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>

        <div className="homepage2">
          <div className="picture" data-aos='fade-right'>
            <div className="overlay">
            </div>
          </div>
          <div className="tellsomeone">
            <p>
              Let your loved ones know they are special with our bouquets!
            </p>
            <NavLink to='/wowbouquets'>
              Bouquets
              <i className="fa-solid fa-right-long"></i>
              <div className="back"> </div>
            </NavLink>
          </div>
        </div>

        <div className="homepage3">
          <div className="main2" data-aos="zoom-in-up">
            <h1>
              Bestsellers!
            </h1>
            <div className="bestsellers">

              <Swiper
                slidesPerView={3}
                spaceBetween={120}
                loop={true}
                speed={1200}
                autoplay={{ delay: 1200 }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper bestsellerswiper"
              >

                {
                  bestsellers.map((a, i) => (
                    <SwiperSlide className="bswiper" key={i}>
                      <img src={a.image} alt={a.name} onClick={() => moreAbout()} />
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
            <div className="line"></div>

          </div>
        </div>

        <div className="additionspage">
          <Additions />
        </div>

        <div className="whypage">
          <div className="tape"></div>
          <div className="why">
            <div className="fresh" data-aos="zoom-in" data-aos-duration="500">
              <div className="background1"></div>
              <div className="into">
                <img src={bouquet} alt="fresh bouquet" />
              </div>
              <p className="intotext">
                Always new, high-quality foreign and domestic flowers.
              </p>
            </div>

            <div className="photo" data-aos="zoom-in" data-aos-duration="1000">
              <div className="background2"></div>
              <div className="into">
                <img src={photo} alt="photoshoot" />
              </div>
              <p className="intotext">
                As a quality guarantee, we send the photo of the bouquet before delivery.
              </p>
            </div>

            <div className="bonus" data-aos="zoom-in" data-aos-duration="1500">
              <div className="background1"></div>
              <div className="into">
                <img src={bonus} alt="bonus and cashback" />
              </div>
              <p className="intotext">
                Discounts and gifts to regular customers all the time.
              </p>
            </div>

            <div className="delivery" data-aos="zoom-in" data-aos-duration="2000">
              <div className="background2"></div>
              <div className="into">
                <img src={delivery} alt="free delivery" />
              </div>
              <p className="intotext">
                We deliver orders over 40 AZN within the city for free.
              </p>
            </div>

          </div>
        </div>

        <div className="blogback">
          <div className="signboardline">
            <div className="signboard">
              <NavLink className="signboardtext" to='/blog'>
                Blog
              </NavLink>
            </div>
          </div>
          <div className="blogbody" data-aos="fade-left">

            <Link to='/moreaboutblog/31' className="blogitem">
              <div className="blogpic">
                <img src={importroses} alt="importroses blog" />
              </div>
              <div className="blogtext">
                <span> Product information </span>
                <h3> İmported roses </h3>
                <p> In this blog you can find detailed information about the Dutch and Ecuadorian roses. </p>
              </div>
            </Link>

            <Link to='/moreaboutblog/32' className="blogitem">
              <div className="blogpic">
                <img src={hydrangeas} alt="hydrageas blog" />
              </div>
              <div className="blogtext">
                <span> Product information </span>
                <h3> Hydrangea </h3>
                <p> In this blog you can learn more about how to properly care for Hydrangea. </p>
              </div>
            </Link>

            <Link to='/moreaboutblog/33' className="blogitem">
              <div className="blogpic">
                <img src={bouquetcare} alt="bouquetcare blog" />
              </div>
              <div className="blogtext">
                <span> Tips for clients </span>
                <h3> Bouquet care </h3>
                <p> In this blog you can learn more about how to properly care for bouquets. </p>
              </div>
            </Link>

            <Link to='/moreaboutblog/34' className="blogitem">
              <div className="blogpic">
                <img src={compositioncare} alt="compositioncare blog" />
              </div>
              <div className="blogtext">
                <span> Tips for clients </span>
                <h3> Composition care </h3>
                <p> In this blog you can learn more about how to properly care for compositions. </p>
              </div>
            </Link>

          </div>
        </div>

        <div className="gallery">
          <h1>
            Home and office decorations
          </h1>
          <div className="row">

            <div className="pic1">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1100}
                autoplay={{ delay: 1100 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic1-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic1-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pic2">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1000}
                autoplay={{ delay: 800 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic2-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic2-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pic3">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1300}
                autoplay={{ delay: 1400 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic3-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic3-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="row">

            <div className="pic4">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1700}
                autoplay={{ delay: 1500 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic4-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic4-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pic5">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1500}
                autoplay={{ delay: 1100 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic5-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic5-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pic6">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                loop={true}
                speed={1300}
                autoplay={{ delay: 1100 }}
                modules={[EffectFlip, Autoplay]}
                className="mySwiper flip-swiper"
              >
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic6-1.jpg" alt="Decorations" />
                </SwiperSlide>
                <SwiperSlide className="flip-slider">
                  <img src="decor/pic6-2.jpg" alt="Decorations" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="reviews-box">
            <h2> From our customers </h2>
            <div className="r-box-body">
              <div className="reviews">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={0}
                  mousewheel={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Mousewheel, Pagination]}
                  className="mySwiper review-swiper"
                >
                  <SwiperSlide className="review-slider">
                    <div className="rev-from">
                      <div className="client-img">
                        <img src="https://i.pravatar.cc/150?img=35" alt="" />
                      </div>
                      <div className="client">
                        <span> 05 Mart 2022 </span>
                        <p> Laura </p>
                      </div>
                      <div className="rates">
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                      </div>
                    </div>
                    <div className="rev-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="rev-from">
                      <div className="client-img">
                        <img src="https://i.pravatar.cc/150?img=60" alt="" />
                      </div>
                      <div className="client">
                        <span> 03 April 2022 </span>
                        <p> Jack </p>
                      </div>
                      <div className="rates">
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                      </div>
                    </div>
                    <div className="rev-text">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="rev-from">
                      <div className="client-img">
                        <img src="https://i.pravatar.cc/150?img=27" alt="" />
                      </div>
                      <div className="client">
                        <span> 24 December 2021 </span>
                        <p> Sarah </p>
                      </div>
                      <div className="rates">
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                      </div>
                    </div>
                    <div className="rev-text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="rev-from">
                      <div className="client-img">
                        <img src="https://i.pravatar.cc/150?img=31" alt="" />
                      </div>
                      <div className="client">
                        <span> 16 August 2021 </span>
                        <p> Ann </p>
                      </div>
                      <div className="rates">
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                        <img src={star} alt="rate" className="rate-star" />
                      </div>
                    </div>
                    <div className="rev-text">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <form className="comment" onSubmit={a => newComment(a)}>
                <div className="formInputs">
                  <input
                    type='text'
                    placeholder="Name"
                    className={nameError ? 'inputError' : ''}
                    id='myName'
                    onBlur={e => checkName(e)}
                    onChange={a => handleName(a)}
                  />
                  <input
                    type='text'
                    placeholder="Surname"
                    className={surnameError ? 'inputError' : ''}
                    id='mySurname'
                    onBlur={e => checkSurname(e)}
                    onChange={a => handleSurname(a)}
                  />
                </div>
                <textarea
                  name="mycomment"
                  id="myComment"
                  cols="45"
                  rows="8"
                  placeholder="Your comment"
                  className={commentError ? 'inputError' : ''}
                  onBlur={e => checkComment(e)}
                  onChange={a => handleComment(a)}
                >
                </textarea>

                <div className="formButtons">
                  <button
                    type="button"
                    onClick={() => allComments()}
                  >
                    All comments
                  </button>
                  <button
                    id='commentBtn'
                    disabled={!formValid}
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={commentsPage ? "all-comments-back open-c-back" : "all-comments-back"}>
            <div className={commentsPage ? "all-comments showcomments" : "all-comments"}>
              <div className="closeComments">
                <img src={close} alt="Close" onClick={() => allComments()} />
              </div>
              <div className="commentList">
                {
                  customerComments.map((a, i) => (
                    <div className="customer-comment" key={i}>
                      <div style={{height: '100%', width: 'auto', display: 'flex'}}>
                        <img src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="Avatar" />
                        <div className="customer">
                          <h3>
                            {a.name}
                          </h3>
                          <h4>
                            {a.surname}
                          </h4>
                          <p style={{ marginTop: '10px' }}>
                            {a.date}
                          </p>
                        </div>
                        <p id="comment">
                          {a.comment}
                        </p>
                      </div>
                      <button className="deleteComment" onClick={() => removeComment(a.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="ordernow">
            <h1>
              Register now and get a discount!
            </h1>
            <NavLink to="/login" className="order-btn">
              <span>
                Register
              </span>
            </NavLink>
          </div>

        </div>



      </div>
    </>
  )
}
