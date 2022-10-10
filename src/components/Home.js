import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchApis, fetchHomepageBanner } from '../redux/action'

import Slider from "react-slick";
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home(props) {

    useEffect(() => {
        console.log("Home page call API")
        props.fetchApi();
        // props.fetchBanner();
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

    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <div className='homepage page-width'>
            <div className='homepage_main-slider'>
                <div>
                    {/* <Carousel
                        arrows={false}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={false}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            props.data.loading ? 'loading...' :
                                props.data.banners.map((i, index) =>
                                    <div key={index}>
                                        <img src={i} alt="product banner" />
                                        <p>Hello</p>
                                    </div>)
                        }
                    </Carousel> */}
                </div>
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
        fetchApi: () => dispatch(fetchApis('https://kamaraapi.weybee.in/api/products?page=1')),
        fetchBanner: () => dispatch(fetchHomepageBanner('https://kamaraapi.weybee.in/api/homepage?type=slider'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
