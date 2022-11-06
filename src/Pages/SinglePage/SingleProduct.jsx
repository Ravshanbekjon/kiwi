import React, { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import Item from '../Home/Card/Item'
import SingleItem from './SingleItem'
import "./SingleProduct.scss"
import CardImg1 from "../../Assets/Img/111.jpg"
import CardImg2 from "../../Assets/Img/222.jpg"
import CardImg3 from "../../Assets/Img/333.jpg"
import CardImg4 from "../../Assets/Img/444.jpg"

const SingleProduct = () => {
  const params = useParams()
  const [single, setSingle] = useState({
    isfetched: false,
    data: [],
    error: null
  })

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productsId}`)
      .then(res => res.json())
      .then(data => {
        setSingle({
          isfetched: true,
          data: [data],
          error: false
        })
      })
      .catch(err => {
        setSingle({
          isfetched: false,
          data: [],
          error: err
        })
      })

  }, [])
  return (
    <div className="single__product container">
      {
        single.isfetched && !single.error && single.data.length > 0 ? (
          single.data.map(item => (
            <SingleItem img={item.image} description={item.description} price={`${item.price} $`} title={item.title} key={item.id} />
          ))
        ) : <Spinner className='loader' animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }

      <div className="home__top container">
        <NavLink className='home__top-links' end >Новые объявления</NavLink>
        <NavLink className='home__top-links'>Лучщие предложение</NavLink>
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

export default SingleProduct