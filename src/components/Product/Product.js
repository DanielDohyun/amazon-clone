import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.scss';

function Product({ id, title, price, rating, image }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__title'>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    {
                        // create arr of size of rating and fill with empty value => map thr 5 times. _ = does not care what value is
                        Array(rating).fill().map((_) => (
                            <p className='product__star'>★</p>
                        ))
                    }
                </div>
            </div>
            
            <img alt='product img' src={image} />
            <button onClick={addToBasket} className='product__add'>Add to basket</button>
        </div>
    )
}

export default Product;
