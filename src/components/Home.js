import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchApis } from '../redux/action'

import BannerSlider from './BannerSlider';
import FeturedProductSlider from './FeturedProductSlider';
import CollectionImage from './CollectionImage';
import OneImage from './OneImage';
import TwoImage from './TwoImage';

function Home(props) {

    useEffect(() => {
        console.log("Home page call API")
        props.fetchApi()
    }, [])

    return (
        <div className='homepage'>
            <BannerSlider />
            <div className="section-container">
                <p className="section-heading">Fetured Product</p>
                <FeturedProductSlider />
            </div>
            <div className="page-width section-container">
                {/* <p className="section-heading">Fetured Category</p>
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
                </div> */}
            </div>
            <div>
                <p className="section-heading section-container">Fetured Colletion</p>
                <CollectionImage />
            </div>
            <div className="section-container">
                <div className="type-1-image page-width">
                    <OneImage />
                </div>
                <div>
                    <TwoImage />
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
