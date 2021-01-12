import React from 'react';
import Product from '../Product/Product';
import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <img className='home__img' alt='home banner' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
        
            {/* // product section */}
            <div className="home__row">
                <Product
                    id="12315135"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
                <Product
                    id="13136246"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
                    rating={4} />
            </div>

            <div className="home__row">
                <Product
                    id="49036252"
                    title="Asus ROG Zephyrus Duo 15 Gaming Laptop, 15.6” 300Hz FHD, NVIDIA GeForce RTX 2070 Super, Intel Core i7-10875H, 32GB RAM, 2TB RAID 0 SSD Hyper Drive, Windows 10 Pro, GX550LWS-XS79"
                    price={3699.00}
                    image="https://m.media-amazon.com/images/I/81Cb9QNSyGL._AC_UL320_.jpg"
                    rating={4} />
                <Product
                    id="43527545"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={5} />
                <Product
                    id="34135364"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={5} />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor = Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={4} />
            </div>
            

        </div>
    )
}

export default Home;
