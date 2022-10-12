import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchHomepageBanner } from '../redux/action';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

function BannerSlider({ loading, bigBanner, fetchBanner }) {

    useEffect(() => {
        fetchBanner()
    }, [])

    return (
        <div className="banner-slider">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}
            >
                {
                    loading ? <p>Loading...</p> :
                        bigBanner.data.map((item, index) => <div key={index} data-src={item.image_url} />)
                }
            </AutoplaySlider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        bigBanner: state.banners,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBanner: () => dispatch(fetchHomepageBanner(`https://kamaraapi.weybee.in/api/homepage?type=slider`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerSlider)
