import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.scss"

const Item = ({img, title, date, price, id, to}) => {
  return (
    <Link to={to} className="item">
      <img src={ img } />
      <p> {title} </p>
      <h5> {date} </h5>
      <h4> {price} </h4>
    </Link>
  )
}

export default Item