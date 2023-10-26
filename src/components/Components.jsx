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
import ProjectMasonry from "./Pages/ControlsandAutomation/ProjectMasonry";
import ProjectCarousel from "./Pages/ProjectCarousel";
import ProjectDetail from "./Pages/ProjectDetail";
import Pressureandtemp from "./Pages/ControlsandAutomation/Pressureandtemp";
import Actuatorspositioner from "./Pages/ControlsandAutomation/Actuatorspositioner.jsx";
import Pressuresafetyvalves from "./Pages/ControlsandAutomation/Pressuresafetyvalves.jsx";
import Dcsdata from "./Pages/ControlsandAutomation/Dcsdata.jsx";
import Beltscoupling from "./Pages/ControlsandAutomation/Beltscoupling.jsx";
import Burnercontroligniters from "./Pages/ControlsandAutomation/Burnercontroligniters.jsx";
import Burners from "./Pages/ControlsandAutomation/Burners.jsx";
import Filterspulsationdampeners from "./Pages/ControlsandAutomation/Filterspulsationdampeners.jsx";
import Heatexchangeequipment from "./Pages/ControlsandAutomation/Heatexchangeequipment.jsx";
import Gasketandpacking from "./Pages/ControlsandAutomation/Gasketandpacking.jsx";
import Dieselgeneratorparts from "./Pages/ControlsandAutomation/Dieselgeneratorparts.jsx";
import Compressorparts from "./Pages/ControlsandAutomation/Compressorparts.jsx";
import MoreProducts from "./Pages/ControlsandAutomation/MoreProducts";

import Levelandflow from "./Pages/ControlsandAutomation/Levelandflow.jsx";
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
import {
  BufferVolumetric,
  Chemicals,
  Glassware,
  Instruments,
  Chromatography,
  Consumables,
  CorrosionCoupons,
  Filtration,
  Plasticware,
} from './Pages/LabScientific/index';
import RequestForm from "./Pages/ControlsandAutomation/RequestForm";

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

            <Route path="/chemicals" exact component={Chemicals} />
            <Route path="/glassware" exact component={Glassware} />
            <Route path="/instruments" exact component={Instruments} />
            <Route path="/plasticware" exact component={Plasticware} />
            <Route path="/consumables" exact component={Consumables} />
            <Route path="/filtration" exact component={Filtration} />
            <Route path="/buffer-volumetric" exact component={BufferVolumetric} />
            <Route path="/corrosian-coupons" exact component={CorrosionCoupons} />
            <Route path="/chromatography" exact component={Chromatography} />

            <Route path="/pressureandtemp" exact component={Pressureandtemp} />
            <Route path="/levelandflow" exact component={Levelandflow} />
            <Route path="/actuatorspositioner" exact component={Actuatorspositioner} />
            <Route path="/pressuresafetyvalves" exact component={Pressuresafetyvalves} />
            <Route path="/dcsdata" exact component={Dcsdata} />
            <Route path="/beltscoupling" exact component={Beltscoupling} />
            <Route path="/burnercontroligniters" exact component={Burnercontroligniters} />
            <Route path="/burners" exact component={Burners} />
            <Route path="/filterspulsationdampeners" exact component={Filterspulsationdampeners} />
            <Route path="/heatexchangeequipment" exact component={Heatexchangeequipment} />
            <Route path="/gasketandpacking" exact component={Gasketandpacking} />
            <Route path="/dieselgeneratorparts" exact component={Dieselgeneratorparts} />
            <Route path="/compressorparts" exact component={Compressorparts} />
            <Route path="/moreproducts" exact component={MoreProducts} />
            <Route path="/requestqoute" exact component={RequestForm} />

            {/* <Route path="/valveandactutors" exact component={Valveandactutors} />
            <Route path="/oilcountry" exact component={Oilcountry} />
            <Route path="/wellheadsystem" exact component={Wellheadsystem} />
            <Route path="/expansionjoints" exact component={Expansionjoints} />
            <Route path="/sightglass" exact component={Sightglass} />
            <Route path="/strainers" exact component={Strainers} />
            <Route path="/stemtraps" exact component={Stemtraps} /> */}





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
