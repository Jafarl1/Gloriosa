import React, { useState, useEffect } from 'react'
import img1 from '../../assets/images/aboutpage/about11.jpg'
import img2 from '../../assets/images/aboutpage/about22.jpg'
import img3 from '../../assets/images/aboutpage/about33.jpg'
import PuffLoader from "react-spinners/PuffLoader";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {


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
            <div className="about-us" data-aos='fade-down'>
              <div className="about-text">
                <p>
                  Gloriosa Flower Bar 2021-ci ildə Azərbaycanda təsis edilmişdir. Fəaliyyətimiz təbii və süni güllərdən ibarət fərqli
                  üslublarda buketlər, kompozisiyalar, dekorlar ərsəyə gətirməkdir. Bununla yanaşı, toy, ad günü və <br /> digər
                  tədbirlərinizin <br /> bəzədilməsini bizim <br /> peşəkar komandamıza <br /> həvalə edə bilərsiniz.
                </p>
              </div>
              <div className="wrap"></div>
            </div>

            <div className="aboutpage">
              <div className="box1">
                <div className='boxtext' data-aos='fade-right' style={{ paddingBottom: '120px' }}>
                  <p>
                    Müştəri məmnuniyyəti bizim üçün ən vacib amildir! <br></br>
                    Bu səbəbdən biz hər zaman yalnız yeni və keyfiyyətli güllər istifadə edirik.
                    Gülləri yerli plantasiyalardan savayı birbaşa Hollandiya, Ekvador və Kenya plantasiyalarından sifariş edirik. Hər bir gülə özünəməxsus qulluğ edirik.
                  </p>
                </div>
                <div className="image" data-aos='fade-left' style={{ borderRadius: '20px 0px 20px 0px' }}>
                  <img src={img1} alt="" />

                </div>
              </div>

              <div className="box2">
                <div className="image" data-aos='fade-right' style={{ borderRadius: '0px 20px 0px 20px' }}>
                  <img src={img2} alt="" />
                  <div className="wrap"></div>
                </div>
                <div className='boxtext' data-aos='fade-left'>
                  <p>
                    Biz çalışırıq ki, məhsulun seçimi və sifarişi müştərilərimiz üçün maksimal dərəcədə rahat olsun.
                    Hər bir sifarişin, çatdırılmadan öncə, şəklini müştəriyə göndəririk
                    və yalnız müştəri tam olaraq razı qaldıqdan sonra çatdırılmanı həyata keçiririk.
                  </p>
                </div>
              </div>

              <div className="box3">
                <div className='boxtext' data-aos='fade-right' style={{ paddingTop: '120px' }}>
                  <p>
                    İstənilən ünvana, qapıyadək çatdırılma edirik. Şəhərdaxili radiusda 40 AZN-dən yuxarı sifarişləri pulsuz çatdırırıq!
                    Məsafə uzaq olduqda və ya sifarişin qiyməti 40 AZN-dən az olduqda isə, ödənişli çatdırılma edirik.
                  </p>
                </div>
                <div className="image" data-aos='fade-left' style={{ borderRadius: '20px 0px 20px 0px' }}>
                  <img src={img3} alt="" />
                  <div className="wrap"></div>
                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}
