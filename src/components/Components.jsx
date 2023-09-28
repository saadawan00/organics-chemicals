import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home1 from "./Pages/Home1";
import Home2 from "./Pages/Home2";
import Home3 from "./Pages/Home3";
import Home4 from "./Pages/Home4";
import Home5 from "./Pages/Home5";
import Home6 from "./Pages/Home6";
import Home7 from "./Pages/Home7";
import Home8 from "./Pages/Home8";
import Home9 from "./Pages/Home9";
import Home10 from "./Pages/Home10";
import Home11 from "./Pages/Home11";
import Home12 from "./Pages/Home12";
import About1 from "./Pages/About1";
import About2 from "./Pages/About2";
import Services1 from "./Pages/Services1";
import Services2 from "./Pages/Services2";
import ServicesAgricultural from "./Pages/ServicesAgricultural";
import ServicesAutomotive from "./Pages/ServicesAutomotive";
import ServicesChemical from "./Pages/ServicesChemical";
import ServicesCivil from "./Pages/ServicesCivil";
import ServicesMechanical from "./Pages/ServicesMechanical";
import ServicesOilgas from "./Pages/ServicesOilgas";
import ServicesPowerEnergy from "./Pages/ServicesPowerEnergy";
import ProjectGrid from "./Pages/ProjectGrid";
import ProjectMasonry from "./Pages/ProjectMasonry";
import ProjectCarousel from "./Pages/ProjectCarousel";
import ProjectDetail from "./Pages/ProjectDetail";
import Shop from "./Pages/Shop";
import ShopDetail from "./Pages/ShopDetail";
import ShoppingCart from "./Pages/ShoppingCart";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import BlogGrid from "./Pages/BlogGrid";
import BlogList from "./Pages/BlogList";
import BlogPost from "./Pages/BlogPost";
import PricingPlan from "./Pages/PricingPlan";
import IconFont from "./Pages/IconFont";
import Team from "./Pages/Team";
import TeamSingle from "./Pages/TeamSingle";
import Faq from "./Pages/Faq";
import Error403 from "./Pages/Error403";
import Error404 from "./Pages/Error404";
import Error405 from "./Pages/Error405";
import ContactUs from "./Pages/ContactUs";

class Components extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Home2} />
            <Route path="/home-factory2" exact component={Home1} />
            <Route path="/home-construction3" exact component={Home3} />
            <Route path="/home-transport" exact component={Home4} />
            <Route path="/home-agriculture" exact component={Home5} />
            <Route path="/home-solar-energy" exact component={Home6} />
            <Route path="/home-oilgas-plant" exact component={Home7} />
            <Route path="/home-page8" exact component={Home8} />
            <Route path="/home-industries9" exact component={Home9} />
            <Route path="/home-factory10" exact component={Home10} />
            <Route path="/home-construction11" exact component={Home11} />
            <Route
              path="/home-conditioning-repair12"
              exact
              component={Home12}
            />

            <Route path="/about-1" exact component={About1} />
            <Route path="/about-2" exact component={About2} />

            <Route path="/services-1" exact component={Services1} />
            <Route path="/services-2" exact component={Services2} />
            <Route
              path="/services-agricultural"
              exact
              component={ServicesAgricultural}
            />
            <Route
              path="/services-automotive"
              exact
              component={ServicesAutomotive}
            />
            <Route
              path="/services-chemical"
              exact
              component={ServicesChemical}
            />
            <Route path="/services-civil" exact component={ServicesCivil} />
            <Route
              path="/services-mechanical"
              exact
              component={ServicesMechanical}
            />
            <Route path="/services-oilgas" exact component={ServicesOilgas} />
            <Route
              path="/services-powerenergy"
              exact
              component={ServicesPowerEnergy}
            />

            <Route path="/project-grid" exact component={ProjectGrid} />
            <Route path="/project-masonry" exact component={ProjectMasonry} />
            <Route path="/project-carousel" exact component={ProjectCarousel} />
            <Route path="/project-detail" exact component={ProjectDetail} />

            <Route path="/shop" exact component={Shop} />
            <Route path="/shop-detail" exact component={ShopDetail} />
            <Route path="/shopping-cart" exact component={ShoppingCart} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/wishlist" exact component={Wishlist} />

            <Route path="/blog-grid" exact component={BlogGrid} />
            <Route path="/blog-list" exact component={BlogList} />
            <Route path="/blog-post" exact component={BlogPost} />

            <Route path="/pricing-plan" exact component={PricingPlan} />
            <Route path="/icon-font" exact component={IconFont} />
            <Route path="/team" exact component={Team} />
            <Route path="/team-single" exact component={TeamSingle} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/error403" exact component={Error403} />
            <Route path="/error404" exact component={Error404} />
            <Route path="/error405" exact component={Error405} />

            <Route path="/contactus" exact component={ContactUs} />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Components;
