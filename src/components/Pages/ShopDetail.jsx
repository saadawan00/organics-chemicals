import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import FeaturedProducts from './../Segments/FeaturedProducts';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: require('./../../images/products/pic-1.jpg').default,
        thumbnail: require('./../../images/products/thumb/pic1.jpg').default,
    },
    {
        original: require('./../../images/products/pic-2.jpg').default,
        thumbnail: require('./../../images/products/thumb/pic2.jpg').default,
    },
    {
        original: require('./../../images/products/pic-3.jpg').default,
        thumbnail: require('./../../images/products/thumb/pic3.jpg').default,
    },
    {
        original: require('./../../images/products/pic-4.jpg').default,
        thumbnail: require('./../../images/products/thumb/pic4.jpg').default,
    },
    {
        original: require('./../../images/products/pic-5.jpg').default,
        thumbnail: require('./../../images/products/thumb/pic5.jpg').default,
    }
];

var bnrimg = require('./../../images/banner/5.jpg');

class ShopDetail extends React.Component {
    renderRightNav = (onClick, disabled) => {
        return (
            <button
              className='image-gallery-icon image-gallery-right-nav owl-next'
              onClick={onClick}
             ><i class="fa fa-chevron-right"></i></button>
          )
    };

    renderLeftNav = (onClick, disabled) => {
        return (
            <button
              className='image-gallery-icon image-gallery-left-nav owl-prev'
              onClick={onClick}
             ><i class="fa fa-chevron-left"></i></button>
          )
    };
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Product Detail" pagename="Shop" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b80">
                        {/* PRODUCT DETAILS */}
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-lg-3 col-md-4  m-b30">
                                    <div className="wt-box wt-product-gallery on-show-slider">
                                    <ImageGallery renderLeftNav={this.renderLeftNav} renderRightNav={this.renderRightNav} items={images} showPlayButton={false} />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8">
                                    <div className="product-detail-info bg-gray p-a30">
                                        <div className="wt-product-title ">
                                            <h2 className="post-title"><NavLink to={"#"}>Plastic Helmate</NavLink></h2>
                                        </div>
                                        <h3 className="m-tb10">$99.00 </h3>
                                        <div className="m-b15">
                                            <span className="rating-bx">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <span className="font-weight-600 text-black">(4 customer reviews)</span>
                                        </div>
                                        <div className="wt-product-text">
                                            <p>Hundreds of thousands a still more glorious nights around art table Nov 28, 2019  Uncategorized Preserve and cherish that pale blue dot are creatures of the cosmos light years Nov 27, 2019  Uncategorized Great turbulent clouds hearts of the stars stirred by starlight sky culture</p>
                                        </div>
                                        <form method="post" className="cart clearfix ">
                                            <div className="quantity btn-quantity m-b20">
                                                <input id="demo_vertical2" type="text" defaultValue={1} name="demo_vertical2" />
                                            </div>
                                            <button type="button" className="site-button-secondry m-r10 site-btn-effect m-b20"><i className="fa fa-shopping-bag" /> Buy Now</button>
                                            <button type="button" className="site-button site-btn-effect m-b20"><i className="fa fa-cart-plus" />Add to Cart</button>
                                        </form>
                                        <div className="product_meta">
                                            <span className="sku_wrapper">SKU:
                <span className="sku">N/A</span>
                                            </span>
                                            <span className="posted_in">Categories:
                <NavLink to={"#"} rel="tag">Clothing ,</NavLink>
                                                <NavLink to={"#"} rel="tag">T-shirts</NavLink>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABS CONTENT START */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wt-tabs border bg-tabs">
                                        <ul className="nav nav-tabs">
                                            <li><a data-toggle="tab" href="#web-design-19" className="active">Description</a></li>
                                            <li><a data-toggle="tab" href="#graphic-design-19">Specification</a></li>
                                            <li><a data-toggle="tab" href="#developement-19">Review</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="web-design-19" className="tab-pane active">
                                                <div className=" p-a10">
                                                    <p className="m-b10">Hundreds of thousands a still more glorious nights around art table Nov 28, 2019 Uncategorized Preserve and cherish that pale blue dot are creatures of the cosmos light years Nov 27, 2019 Uncategorized Great turbulent clouds hearts of the stars stirred by starlight sky culture</p>
                                                    <ul className="site-list-style-two m-b0">
                                                        <li>Quality Control System , 100% Satisfaction Guarantee</li>
                                                        <li>Unrivalled Workmanship, Professional and Qualified</li>
                                                        <li>Environmental Sensitivity, Personalised Solutions</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="graphic-design-19" className="tab-pane">
                                                <table className="table m-b0 no-border">
                                                    <tbody><tr>
                                                        <td><b>Size</b></td>
                                                        <td>Small, Medium, Large &amp; Extra Large</td>
                                                    </tr>
                                                        <tr>
                                                            <td><b>Color</b></td>
                                                            <td>Read, Blue, Green &amp; Black</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Length</b></td>
                                                            <td>35 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Fabric</b></td>
                                                            <td>Cotton, Silk &amp; Synthetic</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Warranty</b></td>
                                                            <td>6 Months</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                            <div id="developement-19" className="tab-pane">
                                                <div className=" p-a20 bg-gray">
                                                    <div id="comments">
                                                        <ol className="commentlist">
                                                            <li className="comment">
                                                                <div className="comment_container">
                                                                    <img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic1.jpg').default} alt=""/>
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating={3}>
                                                                                <i className="fa fa-star" data-alt={1} title="regular" />
                                                                                <i className="fa fa-star" data-alt={2} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={3} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={4} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                                            </div>
                                                                        </div>
                                                                        <p className="meta">
                                                                            <strong className="author">Cobus Bester</strong>
                                                                            <span><i className="fa fa-clock-o" /> March 20, 2020</span>
                                                                        </p>
                                                                        <div className="description">
                                                                            <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="comment">
                                                                <div className="comment_container">
                                                                    <img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic2.jpg').default} alt=""/>
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating={3}>
                                                                                <i className="fa fa-star" data-alt={1} title="regular" />
                                                                                <i className="fa fa-star" data-alt={2} title="regular" />
                                                                                <i className="fa fa-star" data-alt={3} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={4} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                                            </div>
                                                                        </div>
                                                                        <p className="meta">
                                                                            <strong className="author">Cobus Bester</strong>
                                                                            <span><i className="fa fa-clock-o" /> March 12, 2020</span>
                                                                        </p>
                                                                        <div className="description">
                                                                            <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="comment">
                                                                <div className="comment_container">
                                                                    <img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic3.jpg').default} alt=""/>
                                                                    <div className="comment-text">
                                                                        <div className="star-rating">
                                                                            <div data-rating={3}>
                                                                                <i className="fa fa-star" data-alt={1} title="regular" />
                                                                                <i className="fa fa-star" data-alt={2} title="regular" />
                                                                                <i className="fa fa-star" data-alt={3} title="regular" />
                                                                                <i className="fa fa-star" data-alt={4} title="regular" />
                                                                                <i className="fa fa-star-o" data-alt={5} title="regular" />
                                                                            </div>
                                                                        </div>
                                                                        <p className="meta">
                                                                            <strong className="author">Cobus Bester</strong>
                                                                            <span><i className="fa fa-clock-o" /> March 11, 2020</span>
                                                                        </p>
                                                                        <div className="description">
                                                                            <p>Really happy with this print. The colors are great, and the paper quality is very good.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div id="review_form_wrapper">
                                                        <div id="review_form">
                                                            <div id="respond" className="comment-respond">
                                                                <h3 className="comment-reply-title" id="reply-title">Add a review</h3>
                                                                <form className="comment-form" method="post" action="#">
                                                                    <div className="comment-form-author">
                                                                        <label>Name <span className="required">*</span></label>
                                                                        <input type="text" aria-required="true" size={30} defaultValue name="author" id="author" />
                                                                    </div>
                                                                    <div className="comment-form-email">
                                                                        <label>Email <span className="required">*</span></label>
                                                                        <input type="text" aria-required="true" size={30} defaultValue name="email" id="email" />
                                                                    </div>
                                                                    <div className="comment-form-rating">
                                                                        <label>Your Rating</label>
                                                                        <div className="star-Rating-input">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-o" />
                                                                            <i className="fa fa-star-o" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-form-comment">
                                                                        <label>Your Review</label>
                                                                        <textarea aria-required="true" rows={8} cols={45} name="comment" id="comment" defaultValue={""} />
                                                                    </div>
                                                                    <div className="form-submit">
                                                                        <button type="button" className="site-button site-btn-effect">Submit</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABS CONTENT START */}
                        </div>
                        {/* PRODUCT DETAILS */}
                    </div>
                    {/* CONTENT CONTENT END */}
                    <FeaturedProducts />
                </div>
                <Footer />
            </>
        );
    };
};

export default ShopDetail;