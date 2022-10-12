import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchApis } from '../redux/action';
import { ProductCard } from './ProductCard';

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
                    <Slider {...settings} >
                        {
                            props.data.loading ? <p>loading...</p> :
                                props.data?.apiData?.data?.map(product =>
                                    <Link
                                        key={product.sku}
                                        to={`products/${product.id}`}
                                    >
                                        <ProductCard imgUrl={product.base_image.medium_image_url} price={product.name} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeturedProductSlider)
