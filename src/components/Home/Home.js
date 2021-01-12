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
                    id="123"
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                    price={11.96}
                    rating={5}
                    img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
                <Product
                    id="123"
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                    price={11.96}
                    rating={5}
                    img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
               
            </div>

            <div className="home__row">
                <Product
                        id="123"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        price={11.96}
                        rating={5}
                        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
                <Product
                        id="123"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        price={11.96}
                        rating={5}
                        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
                <Product
                        id="123"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        price={11.96}
                        rating={5}
                        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
            </div>

            <div className="home__row">
                <Product
                        id="123"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        price={11.96}
                        rating={5}
                        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJBE9NB_o0IHo4NnN4WOWz2rDcfQp_gU6ZCd2IJ42D2fpqj9KCeY8N7OG0wwdiXhpkL8mzEaaSM2yAuHPldfDfgdfoWoPNnbIz6QkoNGxRhlWPRTyQXfbd&usqp=CAc"
                />    
            </div>
            

        </div>
    )
}

export default Home;
