import React from 'react'
import './ProductPage.css'
import { useStateValue } from './StateProvider'
import { getCartCount } from './Header'
function ProductPage() {
    const [{item, cart}, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch the item into the data layer
        getCartCount(cart);
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                rating: item.rating,
                count: item.count,
            },
        });
    };
  return (
    <div>
        <div className="productpage">
            <img className='productpage__image' src={item.image} alt="product"/>

            <div className="productpage__info">
                
                <p className = "productpage__title">{item.title}</p>
                <div className="productpage__rating">
                    {Array(item.rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                <p className = "productpage__price"> <small>$</small> <strong>{item.price}</strong></p> 
            
                
                <button onClick = {addToCart}>Add to Cart</button>
                <div className="productpage__description">
                    <p>{item.info}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage
