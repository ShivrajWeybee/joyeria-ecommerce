import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="page-width footer-wrapper">
                <div className="f-1 f">
                    <div><p className='logo'>Joyería</p></div>
                    <p>Joyería is a women's clothing store with new trendy and affordable arrivals dropping 2-3 times weekly. Shop the latest trends in women's fashion dresses, tops, sweaters, skirts, jeans, accessories & more.At Dress Up, you can shop at one of the 16 locations across the southeast, or online 24/7 at ShopJoyería.com.</p>
                    <div className="f-1-2 f">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                </div>
                <div className="f-2 f">
                    <div className="flex f-2-1">
                        <div>
                            <h4>about us</h4>
                            <p>about us</p>
                            <p>about us</p>
                        </div>
                        <div>
                            <h4>about us</h4>
                            <p>about us</p>
                            <p>about us</p>
                        </div>
                    </div>
                    <div className="f-2-2">
                        <div>
                            <p className="email-title">SIGN UP AND SAVE</p>
                            <p className="email-subtitle">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        </div>
                        <div className="email-wrapper">
                            <input type='email' placeholder='Enter your email' />
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                    </div>
                </div>
                <div className="flex f-4">
                    <p>Joyería @2022</p>
                </div>
            </div>
        </div>
    )
}