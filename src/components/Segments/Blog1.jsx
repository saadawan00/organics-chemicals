import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/blog/default/thum1.jpg'),
        title: 'Technology is important for your business, you use technology makes',
        category: 'Materials',
        date: 'February 21, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum2.jpg'),
        title: 'Present you with examples of 3 posts from authority websites click',
        category: 'Technology',
        date: 'February 15, 2021',
        comments: '24 Comment'
    },
    {
        image: require('./../../images/blog/default/thum3.jpg'),
        title: 'Explain to you why they work and what makes people click them',
        category: 'Manufacturing',
        date: 'February 10, 2021',
        comments: '24 Comment',
    }
]

class Blog1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  p-t80  bg-white blog-post-outer-3 ">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Latest Articles Updated Daily</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We Are Here To Learn You More From Blog</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-lg-4 col-md-5 wt-separator-two-part-right text-right">
                                    <NavLink to="/blog-grid" className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* BLOG SECTION START */}
                        <div className="section-content">
                            <div className="row d-flex justify-content-center">
                                {blogs.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="blog-post date-style-2">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                            <NavLink to={"/blog-post"}><img src={item.image.default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info bg-white p-t30">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-category"><span>{item.category}</span> </li>
                                                        <li className="post-date">{item.date}</li>
                                                        <li className="post-comment">{item.comments}</li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title">{item.title}</h3>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <NavLink to={"/blog-post"} className="site-button-link black">Read More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Blog1;