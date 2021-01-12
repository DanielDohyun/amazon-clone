import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Checkout.scss';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad img"
            />
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more item, click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {/* list out all of the checkout products  */}
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            ))
                        }

                </div>
            )}
            
        </div>
    )
}

export default Checkout;
