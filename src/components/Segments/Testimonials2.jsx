import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    image: require("./../../images/background/bg-123.jpg"),
    reviewername: "Awais",
    position: "Contractor",
    review:
      "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
  },
  {
    image: require("./../../images/background/bg-123.jpg"),
    reviewername: "Ali",
    position: "Contractor",
    review:
      "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
  },
  {
    image: require("./../../images/background/bg-123.jpg"),
    reviewername: "Wasif",
    position: "Contractor",
    review:
      "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!",
  },
];

var bnr1 = require("./../../images/background/bg-128.png");

class Testimonials2 extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: [
        '<i class="fa fa-long-arrow-left"></i>',
        '<i class="fa fa-long-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        1400: {
          items: 1,
        },
      },
    };
    return (
      <>
        <div
          className="section-full  p-t80 p-b50 bg-white testimonial-2-outer bg-no-repeat"
          style={{ backgroundImage: `url(${bnr1})`, backgroundSize: "90%" }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-12 m-b30">
                {/* TITLE START*/}
                <div className="left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div className="sep-leaf-left" />
                    <div>What our client say</div>
                    <div className="sep-leaf-right" />
                  </div>
                  <h2>Happy With Customers &amp; Clients</h2>
                </div>
                {/* TITLE END*/}
                <div className="testimonial-2-content-outer">
                  <OwlCarousel
                    className="testimonial-1-content owl-carousel  owl-btn-top-right long-arrow-next-prev"
                    {...options}
                  >
                    {testimonials.map((item, index) => (
                      <div key={index} className="item">
                        <div className="testimonial-2 bg-white">
                          <div className="testimonial-content">
                            <div className="testimonial-text">
                              <i className="fa fa-quote-left" />
                              <p>{item.review}</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                              <div className="testimonial-pic-block">
                                <div className="testimonial-pic">
                                  <img src={item.image} alt="" />
                                </div>
                              </div>
                              <div className="testimonial-info">
                                <span className="testimonial-name  title-style-2 site-text-secondry">
                                  {item.reviewername}
                                </span>
                                <span className="testimonial-position title-style-2 site-text-primary">
                                  {item.position}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="home-contact-section site-bg-primary m-b30 p-a40">
                  <form
                    className="cons-contact-form"
                    method="post"
                    action="form-handler2.php"
                  >
                    {/* TITLE START*/}
                    <div className="wt-small-separator-outer text-white">
                      <h2>Feel free to get in touch!</h2>
                    </div>
                    {/* TITLE END*/}
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="site-button-secondry site-btn-effect"
                        >
                          Send us a message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-large-title title-style-2">
            <span style={{ color: "black" }}>Testimonials</span>
          </div>
        </div>
      </>
    );
  }
}

export default Testimonials2;
