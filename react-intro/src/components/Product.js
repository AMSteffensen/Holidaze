import React from 'react'

function Product(props) {
    return (
            <div className="product">
                <h4 className="product__title">
                    {props.title}
                </h4>
                <p className={props.special}>{props.description}</p>
                <button className="product__button">${props.price}$</button>
        </div>
    )
}

export default Product
