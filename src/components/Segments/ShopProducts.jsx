import React from 'react';
import { NavLink } from 'react-router-dom';

const products = [
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'One Mechanical Tool',
        price: '49.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Two Mechanical Tool',
        price: '99.00'
    },
    {
        image: require('./../../images/products/pic-3.jpg'),
        title: 'Three Mechanical Tool',
        price: '99.00'
    },
    {
        image: require('./../../images/products/pic-4.jpg'),
        title: 'Four Mechanical Tool',
        price: '199.00'
    },
    {
        image: require('./../../images/products/pic-5.jpg'),
        title: 'Five Mechanical Tool',
        price: '139.00'
    },
    {
        image: require('./../../images/products/pic-6.jpg'),
        title: 'Six Mechanical Tool',
        price: '26.00'
    },
    {
        image: require('./../../images/products/pic-7.jpg'),
        title: 'Seven Mechanical Tool',
        price: '86.00'
    },
    {
        image: require('./../../images/products/pic-8.jpg'),
        title: 'Eight Mechanical Tool',
        price: '56.00'
    },
    {
        image: require('./../../images/products/pic-9.jpg'),
        title: 'Nine Mechanical Tool',
        price: '99.00'
    }
]

class ShopProducts extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    {products.map((item, index) => (
                        <div key={index} className="col-lg-6 col-md-6 m-b30">
                            <div className="wt-box wt-product-box block-shadow  overflow-hide">
                                <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom">
                                    <img src={item.image.default} alt="" />
                                    <div className="overlay-bx">
                                        <div className="overlay-icon">
                                        <NavLink to={"#"}>
                                                <i className="fa fa-cart-plus wt-icon-box-xs" />
                                            </NavLink>
                                            <NavLink to={"#"} className="mfp-link">
                                                <i className="fa fa-heart wt-icon-box-xs" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="wt-info  text-center">
                                    <div className="p-a20 bg-white">
                                        <h3 className="wt-title">
                                            <NavLink to={"/shop-detail"}>{item.title}</NavLink>
                                        </h3>
                                        <span className="price">
                                            <ins>
                                                <span><span className="Price-currencySymbol">$ </span>{item.price}</span>
                                            </ins>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
};

export default ShopProducts;