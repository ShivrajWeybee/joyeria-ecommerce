import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchApis } from '../redux/action'

import BannerSlider from './BannerSlider';
import FeturedProductSlider from './FeturedProductSlider';
import CollectionImage from './CollectionImage';

function Home(props) {

    useEffect(() => {
        console.log("Home page call API")
        props.fetchApi()
    }, [])

    return (
        <div className='homepage'>
            <BannerSlider />
            <div>
                <p className="section-heading">Fetured Product</p>
                <FeturedProductSlider />
            </div>
            {/* <div className="page-width">
                <p className="section-heading">Fetured Category</p>
                <div className="fetured-cat-parent flex">
                    <div className="fetured-category">
                        <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='category' />
                        <p>Women's</p>
                    </div>
                    <div className="fetured-category">
                        <img src="https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='category' />
                        <p>Men's</p>
                    </div>
                    <div className="fetured-category">
                        <img src="https://images.unsplash.com/photo-1562249004-1f7289c19c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='category' />
                        <p>Engagement</p>
                    </div>
                    <div className="fetured-category">
                        <img src="https://images.unsplash.com/photo-1603298333647-ed142dbbc9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt='category' />
                        <p>Gifts</p>
                    </div>
                </div>
            </div> */}
            <div>
                <p className="section-heading">Fetured Colletion</p>
                <CollectionImage />
            </div>
            <div>
                <div className="type-1-image page-width">
                    <img src='https://kamaraapi.weybee.in/storage/slider_images/Default/YG7C6Yalu1tocRUT7pMouMAHQpmeDYhanqjMXJYB.jpg' alt='banner' />
                </div>
                <div className="type-2-image page-width flex">
                    <img src='https://kamaraapi.weybee.in/storage/slider_images/Default/UNpgtlB2Mp3U2jodFDfnFHELfq04DfzpbRz8T3sB.jpg' alt='banner' />
                    <img src='https://kamaraapi.weybee.in/storage/slider_images/Default/Q2H1L69izVUpIFzFgNasrutsdpBaJTmCO5jDK0T3.jpg' alt='banner' />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchApi: () => dispatch(fetchApis('https://kamaraapi.weybee.in/api/products?page=1'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
