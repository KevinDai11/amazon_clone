import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import {getCartCount} from './Header.js'
function Product({id, title, image, price, rating, count}) {

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch the item into the data layer
        getCartCount(cart);
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                count: count,
            },
        });
    };

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<span role = "img" aria-label='star'>⭐</span>))}
            </div>
        </div>

        <img src={image} alt='product' />

        <button onClick = {addToCart}>Add to Cart</button>
      
    </div>
  )
}

export default Product
