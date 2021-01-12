import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Checkout.scss';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad img"
                />
            
        </div>
    )
}

export default Checkout;
