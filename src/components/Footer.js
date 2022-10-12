import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="page-width flex footer-wrapper">
                <div className="f-1 f">
                    <div><p className='logo'>Joyería</p></div>
                    <p>Joyería is a women's clothing store with new trendy and affordable arrivals dropping 2-3 times weekly. Shop the latest trends in women's fashion dresses, tops, sweaters, skirts, jeans, accessories & more. At Dress Up, you can shop at one of the 16 locations across the southeast, or online 24/7 at ShopDressup.com.</p>
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
                    <div>
                        <div>
                            <p>SIGN UP AND SAVE</p>
                            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        </div>
                        <input type='email' placeholder='Enter your email' />
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </div>
                <div className="f-3 f">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>
                <div className="flex f-4">
                    <p>Joyería @2022</p>
                </div>
            </div>
        </div>
    )
}