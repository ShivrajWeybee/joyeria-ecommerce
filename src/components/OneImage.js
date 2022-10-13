import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOneImage } from '../redux/action'
import { Loader } from './Loader';

function OneImage({ loading, oneImageData, fetchOneBanner }) {

    useEffect(() => {
        fetchOneBanner()
    }, [])

    return (
        <div>
            {
                loading ? <Loader /> : <img src={oneImageData?.data?.[0]?.image_url} alt='banner' />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        oneImageData: state.oneImage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneBanner: () => dispatch(fetchOneImage(`https://kamaraapi.weybee.in/api/homepage?type=1-image`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneImage)
