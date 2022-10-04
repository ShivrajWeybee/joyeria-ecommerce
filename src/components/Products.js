import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { fetchApis } from '../redux/action'

let searchParamAll;

function Products(props) {

    useEffect(() => {
        props.fetchProductOrCategory()
    }, [])

    const [searchParam, setSearchParam] = useSearchParams()
    searchParamAll = searchParam.get('category_id');

    return (
        <div>
            {
                searchParam.get('category_id') ? <h1>{`showing products of category id ${searchParam.get('category_id')}`}</h1> : <h1>No Listing</h1>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductOrCategory: () => dispatch(fetchApis(`https://kamaraapi.weybee.in/api/products?category_id=${searchParamAll}}`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
