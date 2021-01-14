import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.scss';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();


    const remove = () => {
        //add item to basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
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
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} alt="checkout img" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p className='product__star'>★</p>
                        ))
                    }
                </div>
                <button onClick={remove} className='checkoutProduct__remove'>Remove from basket</button>
            </div>

            

           
        </div>
    )
}

export default CheckoutProduct;
