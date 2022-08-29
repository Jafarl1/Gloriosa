import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';





export default function Blog() {

  const { blogs } = useSelector(x=>x)

  // const [blogs, setBlogs] = useState([])

  // useEffect(()=> {
  //   fetch('http://localhost:7000/blogs')
  //   .then(res => res.json())
  //   .then(data => setBlogs(data))
  // }, [])


  AOS.init({
    duration: 800,
    easing: 'ease'
  })


  return (
    <>
      <div className="blogpage">
        <div className="page-head" data-aos='fade-down'>
          <h1>
            Bloq
          </h1>
          <div className="page-links">
            <NavLink to="/">
              Ana səhifə
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/blog">
              Bloq
            </NavLink>
          </div>
        </div>
        <div className="allblogs">
          {
            blogs.map((a, i) => (
              <div className="blogpage-item" key={i}>
                <div className="img">
                  <img src={a.image} alt="Blog" />
                </div>
                <h1>
                  {a.name}
                </h1>
                <span> 
                  {a.type} 
                </span>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}
