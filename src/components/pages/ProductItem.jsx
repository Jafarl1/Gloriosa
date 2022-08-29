import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Scrollbar } from "swiper"



export default function ProductItem() {

  const { pathname } = useLocation();
  const id = pathname.substr(-3).includes('/') ? pathname.substr(-2) : pathname.substr(-3)

  const { allData } = useSelector(state => state)
  const item = allData.find(a => a.id === +id)

  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      setFavItems(JSON.parse(localStorage.getItem('favorites')))
    }
  }, [])

  const addToFav = (id) => {
    let item = allData.find((a) => a.id === id);
    let newItem = [...favItems];

    if (newItem.some(a => a.id === item.id)) {
      newItem = newItem.filter(e => e.id !== item.id)
      setFavItems(newItem)
    }
    else {
      newItem.push(item);
      setFavItems(newItem)
    }
    localStorage.setItem('favorites', JSON.stringify(newItem))
  }

  const [tocart, setTocart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setTocart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addToCart = (id) => {
    let prod = allData.find((a) => a.id === id);
    let newProd = [...tocart];

    if (newProd.some(e => e.id === prod.id)) {
      newProd = newProd.filter(e => e.id !== prod.id)
      setTocart(newProd)
    }
    else {
      newProd.push(prod);
      setTocart(newProd)
    }
    localStorage.setItem('cart', JSON.stringify(newProd))
  }


  return (
    <>
      <div className="selected-page">
        <div className="page-head">
          <h1>
            Məhsul haqda ətraflı məlumat
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Ana səhifə
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/products">
              Məhsullar
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to={`/${item.type}`}>
              {
                item.type === 'authorbouquets' ? 'Müəllif buketləri' :
                  item.type === 'cardspage' ? 'Açıqçalar' :
                    item.type === 'compositions' ? 'Kompozisiyalar' :
                      item.type === 'mensbouquets' ? 'Kişi buketləri' :
                        item.type === 'minibouquets' ? 'Mini buketlər' :
                          item.type === 'monobouquets' ? 'Mono buketlər' :
                            item.type === 'seasonbouquets' ? 'Fəsil kompozisiyaları' :
                              item.type === 'weddingbouquets' ? 'Toy buketləri' :
                                'Wow buketlər'
              }
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="#">
              {item.name}
            </NavLink>
          </div>
        </div>
        <div className="selected">
          <Swiper
            scrollbar={true}
            modules={[Scrollbar]}
            className="mySwiper proditem-swiper"
          >
            {
              item.image1 ?
                <SwiperSlide>
                  <img src={item.image1} alt="item" />
                </SwiperSlide>
                :
                <SwiperSlide>
                  <img src={item.image} alt="item" />
                </SwiperSlide>
            }
            {
              item.image2 ?
                <SwiperSlide>
                  <img src={item.image2} alt="item" />
                </SwiperSlide>
                : ''
            }
            {
              item.image3 ?
                <SwiperSlide>
                  <img src={item.image3} alt="item" />
                </SwiperSlide>
                : ''
            }
          </Swiper>
          <div className="selected-info">
            <h1>
              {item.name}
            </h1>
            <p>
              Rəngi: <span>{item.color}</span>
            </p>
            <p>
              Ölçüsü: <span>{item.size}</span>
            </p>
            <p>
              Qiyməti: <span>{item.price} AZN</span>
            </p>
            <div className="selected-buttons">
              <button className="add-to-fav-btn" style={{ width: '80px' }} onClick={() => addToFav(item.id)}>
                {
                  favItems.some(x => x.id === item.id) ? <i className="fa-solid fa-heart added"></i> : <i className="fa-solid fa-heart"></i>
                }
              </button>
              <button className='add-to-cart-btn' style={{ width: '280px' }} onClick={() => addToCart(item.id)}>
                {
                  tocart.some(x => x.id === item.id) ? <b>Səbətə əlavə edilib</b> : 'Səbətə əlavə et'
                }
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
