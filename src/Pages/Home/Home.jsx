import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Item from './Card/Item'
import "./Home.scss"
import Img1 from "../../Assets/Img/img1.png"
import Img2 from "../../Assets/Img/img2.png"
import Img3 from "../../Assets/Img/img3.png"
import CardImg1 from "../../Assets/Img/111.jpg"
import CardImg2 from "../../Assets/Img/222.jpg"
import CardImg3 from "../../Assets/Img/333.jpg"
import CardImg4 from "../../Assets/Img/444.jpg"
import { useTranslation } from 'react-i18next'

const Home = () => {
  const [product, setProduct] = useState({
    isfetched: false,
    data: [],
    error: null
  })

  useEffect(() => {
    fetch(' https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProduct({
          isfetched: true,
          data,
          error: false
        })
      })
      .catch(err => {
        setProduct({
          isfetched: false,
          data: [],
          error: err
        })
      })

  }, [])

  const { t } = useTranslation()

  return (
    <div className="home ">
      <div className="home__top container">
        <NavLink className='home__top-links' end > { t('hero.topLink1') } </NavLink>
        <NavLink className='home__top-links'>{ t('hero.topLink2') }</NavLink>
      </div>

      <div className="home__card container">
        {
          product.isfetched && !product.error && product.data.length > 0 ? (
            product.data.map(item => (
              <Item key={item.id} img={item.image} title={item.title} date="Вчера 22:55" price={`${item.price} $`} to={`products/${item.id}`} />
            ))
          ) : <Spinner className='loader' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </div>

      <div className="home__section">
        <div className="home__section-card container">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
        </div>
      </div>

      <div className="home__top container">
        <NavLink className='home__top-links' end >{ t('hero.topLink1') }</NavLink>
        <NavLink className='home__top-links'>{ t('hero.topLink2') }</NavLink>
        <NavLink className='home__top-links'>{ t('hero.topLink3') }</NavLink>
      </div>

      <div className="home__card home2-card container">
        <Item img={CardImg1} title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" date="Вчера 22:55" price="109.95 $" />
        <Item img={CardImg2} title="Mens Casual Premium Slim Fit T-Shirts" date="Вчера 22:55" price="22.3 $" />
        <Item img={CardImg3} title="Mens Cotton Jacket" date="Вчера 22:55" price="55.99 $" />
        <Item img={CardImg4} title="Mens Casual Slim Fit" date="Вчера 22:55" price="15.99 $" />
      </div>
    </div>
  )
}

export default Home