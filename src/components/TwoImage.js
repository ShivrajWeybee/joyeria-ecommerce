import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTwoImage } from '../redux/action'
import { Loader } from './Loader';

export const TwoImage = ({ loading, twoImageData, fetchTwoBanner }) => {

    useEffect(() => {
        fetchTwoBanner()
    }, [])

    return (
        <div className="type-2-image page-width flex" >
            {
                loading ? <Loader /> :
                    twoImageData?.data?.map((banner, index) =>
                        <div key={index} className="two-image-1">
                            <img key={index} src={banner.image_url} alt="banner" />
                        </div>
                    )
            }
            {/* <img src='' alt='banner' /> */}
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        twoImageData: state.twoImage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTwoBanner: () => dispatch(fetchTwoImage(`https://kamaraapi.weybee.in/api/homepage?type=2-images`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoImage)
