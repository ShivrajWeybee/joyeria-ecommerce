import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchApis } from '../redux/action'

import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Home(props) {

    useEffect(() => {
        console.log("Home page call API")
        props.fetchApi();
    }, [])

    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
    };

    return (
        <div className='homepage'>
            <div className='homepage_main-slider'>
                <p>The Big Slider Area</p>
                <div className='homepage_product-slider'>
                    <Slider {...settings} >
                        {
                            props.data.loading ? <p>loading...</p> :
                                props.data.apiData.data.map(product =>
                                    <Link
                                        key={product.sku}
                                        to={`products/${product.id}`}
                                    >
                                        <div>
                                            <img src={product.base_image.medium_image_url} alt={product.url_key} />
                                            <p>{product.name}</p>
                                        </div>
                                    </Link>
                                )
                        }
                    </Slider>
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
