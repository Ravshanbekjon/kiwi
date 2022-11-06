import React from 'react'
import "./SingleProduct.scss"

const SingleItem = ({ title, img, price, description }) => {
    return (
        <>
            <div className="single__top">
                <h2> {title} </h2>
            </div>
            <div className="single__pages">
                <div className="pages">
                    <div className="images">
                        <img src={img} />
                        <img src={img} />
                        <img src={img} />
                        <img src={img} />
                        <img src={img} />
                    </div>
                    <img src={img} />
                </div>
                <div className="pages">
                    <h3> {price} </h3>
                    <a href="#">Ташкент, Ташкентская область, Юнусабадский район </a>

                    <div className="buttons">
                        <button>Написать автору</button>
                        <button>Предложить свою цену</button>
                    </div>

                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleItem