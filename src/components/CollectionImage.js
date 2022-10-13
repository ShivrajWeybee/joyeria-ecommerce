import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Loader } from './Loader';
import { fetchCollectionBanner } from '../redux/action'

function CollectionImage({ loading, collection, fetchCollectionImg }) {

    useEffect(() => {
        fetchCollectionImg()
    }, [])

    return (
        <div className="collection-container">
            {
                loading ? <Loader /> :
                    collection?.data?.map((item, index) =>
                        <div key={index} className="img-wrapper">
                            <img src={item.image_url} alt={`collection-${index}`} />
                        </div>
                    )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        collection: state.collections,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionImg: () => dispatch(fetchCollectionBanner(`https://kamaraapi.weybee.in/api/homepage?type=collection`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionImage)
