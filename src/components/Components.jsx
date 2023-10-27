import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
} from './Pages/LabScientific';

const Home1 = lazy(() => import('./Pages/Home1'));
const Home2 = lazy(() => import('./Pages/Home2'));
const Home3 = lazy(() => import('./Pages/Home3'));
const Home4 = lazy(() => import('./Pages/Home4'));
const Home5 = lazy(() => import('./Pages/Home5'));
const Home6 = lazy(() => import('./Pages/Home6'));
const Home7 = lazy(() => import('./Pages/Home7'));
const Home8 = lazy(() => import('./Pages/Home8'));
const Home9 = lazy(() => import('./Pages/Home9'));
const Home10 = lazy(() => import('./Pages/Home10'));
const Home11 = lazy(() => import('./Pages/Home11'));
const Home12 = lazy(() => import('./Pages/Home12'));
const About1 = lazy(() => import('./Pages/About1'));
const About2 = lazy(() => import('./Pages/About2'));
const Services1 = lazy(() => import('./Pages/Services1'));
const Services2 = lazy(() => import('./Pages/Services2'));
const ServicesAgricultural = lazy(() => import('./Pages/ServicesAgricultural'));
const ServicesAutomotive = lazy(() => import('./Pages/ServicesAutomotive'));
const ServicesChemical = lazy(() => import('./Pages/ServicesChemical'));
const ServicesCivil = lazy(() => import('./Pages/ServicesCivil'));
const ServicesMechanical = lazy(() => import('./Pages/ServicesMechanical'));
const ServicesOilgas = lazy(() => import('./Pages/ServicesOilgas'));
const ServicesPowerEnergy = lazy(() => import('./Pages/ServicesPowerEnergy'));
const Pressureandtemp = lazy(() => import('./Pages/ControlsandAutomation/Pressureandtemp'));
const Actuatorspositioner = lazy(() => import('./Pages/ControlsandAutomation/Actuatorspositioner'));
const Pressuresafetyvalves = lazy(() => import('./Pages/ControlsandAutomation/Pressuresafetyvalves'));
const Dcsdata = lazy(() => import('./Pages/ControlsandAutomation/Dcsdata'));
const Beltscoupling = lazy(() => import('./Pages/ControlsandAutomation/Beltscoupling'));
const Burnercontroligniters = lazy(() => import('./Pages/ControlsandAutomation/Burnercontroligniters'));
const Burners = lazy(() => import('./Pages/ControlsandAutomation/Burners'));
const Filterspulsationdampeners = lazy(() => import('./Pages/ControlsandAutomation/Filterspulsationdampeners'));
const Heatexchangeequipment = lazy(() => import('./Pages/ControlsandAutomation/Heatexchangeequipment'));
const Gasketandpacking = lazy(() => import('./Pages/ControlsandAutomation/Gasketandpacking'));
const Dieselgeneratorparts = lazy(() => import('./Pages/ControlsandAutomation/Dieselgeneratorparts'));
const Compressorparts = lazy(() => import('./Pages/ControlsandAutomation/Compressorparts'));
const MoreProducts = lazy(() => import('./Pages/ControlsandAutomation/MoreProducts'));
const Levelandflow = lazy(() => import('./Pages/ControlsandAutomation/Levelandflow'));
const ShopDetail = lazy(() => import('./Pages/ShopDetail'));
const ShoppingCart = lazy(() => import('./Pages/ShoppingCart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Wishlist = lazy(() => import('./Pages/Wishlist'));
const BlogGrid = lazy(() => import('./Pages/BlogGrid'));
const BlogList = lazy(() => import('./Pages/BlogList'));
const BlogPost = lazy(() => import('./Pages/BlogPost'));
const PricingPlan = lazy(() => import('./Pages/PricingPlan'));
const IconFont = lazy(() => import('./Pages/IconFont'));
const Team = lazy(() => import('./Pages/Team'));
const TeamSingle = lazy(() => import('./Pages/TeamSingle'));
const Faq = lazy(() => import('./Pages/Faq'));
const Error403 = lazy(() => import('./Pages/Error403'));
const Error404 = lazy(() => import('./Pages/Error404'));
const Error405 = lazy(() => import('./Pages/Error405'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));


const RequestForm = lazy(() => import('./Pages/ControlsandAutomation/RequestForm'));
const Clients = lazy(() => import('./Pages/Clients/ClientsContainer'));


class Components extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/clients" exact component={Clients} />

            <Route component={Error} />
          </Switch>
          </div>
          </Suspense>
      </BrowserRouter>
    );
  }
}

export default Components;
