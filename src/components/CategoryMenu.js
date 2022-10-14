import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchApis, fetchCategory } from '../redux/action'

export const CategoryMenu = ({ loading, categoryItem, fetchCatagory }) => {

    const [cat, setCat] = useState([])
    const [catNest, setCatNest] = useState([])

    useEffect(() => {
        axios
            .get('https://kamaraapi.weybee.in/api/category-tree')
            .then(res => {
                setCat(res.data);
                return res.data
            })
            .then(res => res.data?.map(cat => setCatNest(prevState => [...prevState, { pId: cat.id, catName: cat.slug, childern: cat.children }])))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <div className="mobile-nav-backdrop"></div>
            <div className='category-menu'>
                <div className="mobile-icon close-toggle">X</div>
                <nav className='page-width'>
                    <ul className='flex'>
                        {
                            cat.length === 0 ? 'loading' :
                                cat.data.map((cat, index) =>
                                    <li key={index} value={cat.id}>
                                        {cat.name}
                                        {
                                            cat.children.length > 0 ?
                                                <div key={index} className='dropdown-menu'>
                                                    <div className='dropdown-inner'>
                                                        {
                                                            cat.children?.map((nest, index) =>
                                                                <Link
                                                                    key={index}
                                                                    to={`/products?category_id=${nest.id}`}
                                                                >
                                                                    <p>{nest.name}</p>
                                                                </Link>
                                                            )
                                                        }
                                                    </div>
                                                </div> : ''
                                        }
                                    </li>
                                )
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default CategoryMenu

// const mapStateToProps = (state) => {
//     return {
//         loading: state.loading,
//         categoryItem: state.categoryData,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchCatagory: () => dispatch(fetchCategory('https://kamaraapi.weybee.in/api/categories'))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu)
