import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchApis } from '../redux/action';
import { ProductCard } from './ProductCard';
import { Loader } from './Loader';

function FeturedProductSlider(props) {

    useEffect(() => {
        console.log("Home page call API")
        props.fetchApi()
    }, [])

    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div>
            <div className='homepage_main-slider page-width'>
                <div className='homepage_product-slider'>
                    {
                        props.data.loading ? <Loader /> :
                            <Slider {...settings} >
                                {
                                    props.data?.apiData?.data?.map(product =>
                                        <Link
                                            key={product.sku}
                                            to={`products/${product.id}`}
                                        >
                                            {/* <ProductCard imgUrl={product.base_image.medium_image_url} price={product.name} /> */}
                                            <div className="fps-container">
                                                <div className="fps-inner">
                                                    <div className="fps-img-wrapper">
                                                        <img src={product.base_image.medium_image_url} alt="product" />
                                                    </div>
                                                    <div className="fps-info">
                                                        <p>{product.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </Slider>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(FeturedProductSlider)
