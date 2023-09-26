import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider1 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/rev-script-1.js');

    };
    render() {
        return (
            <>
                <div className="slider-outer">
                    <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                        <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-901" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/main-slider/slider1/slide1.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide1.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide1.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                            {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ Black Box ] */}
                                    <div className="tp-caption   tp-resizeme site-text-primary rev-title-left-border" id="slide-901-layer-2" data-x="['left','left','left','left']" data-hoffset="['34','34','34','30']" data-y="['top','top','top','top']" data-voffset="['160','160','160','160']" data-fontsize="['48','48','48','34']" data-lineheight="['48','48','48','48']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,4]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,4]" data-paddingleft="[30,30,30,20]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, fontFamily: '"Teko", sans-serif' }}>High Performance</div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','left','left']" data-hoffset="[30','30','30','30']" data-y="['top','top','top','top']" data-voffset="['260','250','260','230']" data-fontsize="['120','72','72','38']" data-lineheight="['100','66','48','38']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, color: '#fff', borderWidth: 0, fontFamily: '"Teko", sans-serif', textTransform: 'uppercase' }}>Services For Industries</div>
                                    {/* LAYER NR. 4 [ for paragraph] */}
                                    <div className="tp-caption  tp-resizeme" id="slide-901-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','10','0','-40']" data-fontsize="['20','20','20','16']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        In the world of renewable energy we cast quite a shadow. innovative products and services...
                                    </div>
                                    {/* LAYER NR. 5 [ for see all service botton ] */}
                                    <div className="tp-caption tp-resizeme" id="slide-901-layer-5" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['250','100','100','40']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                        <NavLink to={"/contactus"} className="site-button site-btn-effect">Book Now</NavLink>
                                    </div>
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-902" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/main-slider/slider1/slide1.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide2.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide2.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                            {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ Black Box ] */}
                                    <div className="tp-caption   tp-resizeme site-text-primary rev-title-left-border" id="slide-902-layer-2" data-x="['left','left','left','left']" data-hoffset="['34','34','34','30']" data-y="['top','top','top','top']" data-voffset="['160','160','160','160']" data-fontsize="['48','48','48','34']" data-lineheight="['48','48','48','48']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,4]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,4]" data-paddingleft="[30,30,30,20]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, fontFamily: '"Teko", sans-serif' }}>High Performance</div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','left','left','left']" data-hoffset="[30','30','30','30']" data-y="['top','top','top','top']" data-voffset="['260','250','260','230']" data-fontsize="['120','72','72','38']" data-lineheight="['100','66','48','38']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, color: '#fff', borderWidth: 0, fontFamily: '"Teko", sans-serif', textTransform: 'uppercase' }}>Services For Industries</div>
                                    {/* LAYER NR. 4 [ for paragraph] */}
                                    <div className="tp-caption  tp-resizeme" id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','10','0','-40']" data-fontsize="['20','20','20','16']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        In the world of renewable energy we cast quite a shadow. innovative products and services...
                                    </div>
                                    {/* LAYER NR. 5 [ for see all service botton ] */}
                                    <div className="tp-caption tp-resizeme" id="slide-902-layer-5" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['250','100','100','40']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                        <NavLink to={"/contactus"} className="site-button site-btn-effect">Book Now</NavLink>
                                    </div>
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-903" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/main-slider/slider1/slide1.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title="Slide Title" data-param1="Additional Text" data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide3.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide3.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 [ for overlay ] */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                            {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 2 [ Black Box ] */}
                                    <div className="tp-caption   tp-resizeme site-text-primary rev-title-left-border" id="slide-903-layer-2" data-x="['left','left','left','left']" data-hoffset="['34','34','34','30']" data-y="['top','top','top','top']" data-voffset="['160','160','160','160']" data-fontsize="['48','48','48','34']" data-lineheight="['48','48','48','48']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,4]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,4]" data-paddingleft="[30,30,30,20]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, fontFamily: '"Teko", sans-serif' }}>High Performance</div>
                                    {/* LAYER NR. 3 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-903-layer-3" data-x="['left','left','left','left']" data-hoffset="[30','30','30','30']" data-y="['top','top','top','top']" data-voffset="['260','250','260','230']" data-fontsize="['120','72','72','38']" data-lineheight="['100','66','48','38']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 300, color: '#fff', borderWidth: 0, fontFamily: '"Teko", sans-serif', textTransform: 'uppercase' }}>Services For Industries</div>
                                    {/* LAYER NR. 4 [ for paragraph] */}
                                    <div className="tp-caption  tp-resizeme" id="slide-903-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','10','0','-40']" data-fontsize="['20','20','20','16']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        In the world of renewable energy we cast quite a shadow. innovative products and services...
                                    </div>
                                    {/* LAYER NR. 5 [ for see all service botton ] */}
                                    <div className="tp-caption tp-resizeme" id="slide-903-layer-5" data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['250','100','100','40']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                            {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                        <NavLink to={"/contactus"} className="site-button site-btn-effect">Book Now</NavLink>
                                    </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Slider1;