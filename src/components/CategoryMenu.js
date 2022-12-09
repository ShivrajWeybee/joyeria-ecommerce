import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { closeMobileNav, fetchApis, fetchCategory, openMobileNav } from '../redux/action'

export const CategoryMenu = ({ openNav, openTheNav, closeTheNav }) => {

    const [cat, setCat] = useState([])
    const [catNest, setCatNest] = useState([])

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        if (width > breakpoint) {
            closeTheNav()
        }

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [window.innerWidth]);

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
        <div className={`${width < breakpoint && openNav ? "mobile-cat-menu" : ""}`}>
            <div className="mobile-nav-backdrop"></div>
            <div className={`category-menu page-width ${width < breakpoint && openNav ? "mcm" : ""}`}>
                <nav>
                    <ul className='flex'>
                        {
                            cat.length === 0 ? 'loading' :
                                cat.data.map((cat, index) =>
                                    !openNav ?
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
                                        </li> :
                                        width < breakpoint &&
                                        <div className="m-link-wrapper" id="accordion" key={index}>
                                            <div id={`heading${index}`}>
                                                <button data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`} className="collapsed ">
                                                    {cat.name}
                                                </button>
                                            </div>
                                            <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                                                <div>
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
                                                </div>
                                            </div>
                                        </div>
                                )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

// export default CategoryMenu

const mapStateToProps = (state) => {
    return {
        openNav: state.isNavOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openTheNav: () => dispatch(openMobileNav()),
        closeTheNav: () => dispatch(closeMobileNav())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu)
