import React from "react";
import { NavLink } from "react-router-dom";

const filters = [
  { label: "Oil & Gas", filter: ".cat-1", flaticon: "flaticon-oil" },
  { label: "Food & Beverages", filter: ".cat-2", flaticon: "flaticon-helmet" },
  {
    label: "Cement Industry",
    filter: ".cat-3",
    flaticon: "flaticon-healthcare-and-medical",
  },
  { label: "Textile", filter: ".cat-4", flaticon: "flaticon-conveyor" },
  { label: "Pulp & Paper", filter: ".cat-5", flaticon: "flaticon-scythe" },
  { label: "Power Plants", filter: ".cat-6", flaticon: "flaticon-scythe" },
  { label: "Fertilisers", filter: ".cat-7", flaticon: "flaticon-scythe" },
];

const projects = [
  {
    image: require("./../../images/project/square/1.jpg"),
    title: "Oil & Gas",
    filter: "cat-1",
  },
  {
    image: require("./../../images/project/square/2.jpg"),
    title: "Food & Beverages",
    filter: "cat-2",
  },
  {
    image: require("./../../images/project/square/3.jpg"),
    title: "Cement Industry",
    filter: "cat-2",
  },
  {
    image: require("./../../images/project/square/4.jpg"),
    title: "Textile Industry",
    filter: "cat-4",
  },
  {
    image: require("./../../images/project/square/5.jpg"),
    title: "Pulp & Paper",
    filter: "cat-5",
  },
  {
    image: require("./../../images/project/square/6.jpg"),
    title: "Power Plants",
    filter: "cat-6",
  },
  {
    image: require("./../../images/project/square/7.jpg"),
    title: "Fertilizer Industry",
    filter: "cat-7",
  },
  {
    image: require("./../../images/project/square/8.jpg"),
    title: "Chemical Industry",
    filter: "cat-8",
  },
];

const imgBg = require("./../../images/main-slider/slider2/slide11.jpg");
class Projects2 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-t80 p-b50  overlay-wraper bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(
              ${imgBg}
            )`,
          }}
        >
          <div className="overlay-main site-bg-secondry opacity-06" />
          <div className="container">
            {/* TITLE START*/}
            <div className="section-head center wt-small-separator-outer text-center text-white">
              <div className="wt-small-separator site-text-primary">
                <div className="sep-leaf-left" />
                <div style={{ color: "#327ef9", fontSize: "48px" }}>
                  Our Products, Your Industry
                </div>
                <div className="sep-leaf-right" />
              </div>
              <h2 style={{ marginTop: "15px" }}>
                Our Product Line Caters to a Range of Industries
              </h2>
            </div>
            {/* TITLE END*/}
            <div className="section-content">
              <div className="masonry-wrap row mfp-gallery project-stamp clearfix d-flex justify-content-center">
                {/* COLUMNS 1 */}
                {/* <div className="stamp col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30">
                  <div className="project-stamp-list bg-white">
                    <div className="filter-wrap">
                      <ul className="filter-navigation masonry-filter text-uppercase">
                        <li className="active">
                          <NavLink to={"#"} data-filter="*" data-hover="All">
                            <i className="flaticon-layers" />
                            All Cases
                          </NavLink>
                        </li>
                        {filters.map((item, index) => (
                          <li key={index}>
                            <NavLink
                              to={"#"}
                              data-filter={item.filter}
                              data-hover={item.label}
                            >
                              <i className={item.flaticon} />
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* COLUMNS 2 */}
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.filter} masonry-item col-xl-3 col-lg-4 col-md-6 col-sm-12 m-b30`}
                  >
                    <div className="wt-box bg-white  p-a10 project-2-block">
                      <div className="wt-thum-bx">
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            height: "235px",
                          }}
                        />
                      </div>
                      <div className="wt-info">
                        <h4 className="wt-title m-b0 m-t15">
                          <NavLink to={"/project-detail"}>{item.title}</NavLink>
                        </h4>
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
}

export default Projects2;
