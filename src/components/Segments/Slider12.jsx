import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../src/assets/css/rev-slider-12.css';

class Slider12 extends React.Component {
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

        loadScript('./assets/js/rev-script-12.js');

    };
    render() {
        return (
            <>
                <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                    {/* START REVOLUTION SLIDER 5.4.3.1 fullscreen mode */}
                    <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                        <ul>
                            {/* SLIDE  */}
                            <li data-index="rs-900" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/home-11/slider2/slide1.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Make your Office a Place you Want to Work at" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../images/home-11/slider2/slide1.jpg').default} alt="" data-lazyload={require('./../../images/home-11/slider2/slide1.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                {/* LAYERS */}
                                {/* LAYER NR. 1 [ for overlay ] */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-900-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                    {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                    ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                </div>
                                {/* LAYER NR. 2 [ Small Title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-900-layer-2" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-150','-150','-120']" data-fontsize="['28','28','28','28']" data-lineheight="['56','56','56','50']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                    {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                    ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#111', borderWidth: 0, fontFamily: '"Teko", sans-serif' }}>Quality that is guaranted</div>
                                {/* LAYER NR. 3 [ Large title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-900-layer-3" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-50','-50']" data-fontsize="['72','72','72','38']" data-lineheight="['66','66','66','38']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0 }}>
                                    <div style={{ fontFamily: '"Teko", sans-serif' }}>
                                        <span className="site-text-primary">Expert Heating, Cooling, and Air Conditioning</span>
                                    </div>
                                </div>
                                {/* LAYER NR. 4 [ for paragraph] */}
                                <div className="tp-caption  tp-resizeme" id="slide-900-layer-4" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['60','60','70','50']" data-fontsize="['20','20','20','16']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#111', borderWidth: 0 }}>
                                    <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                                        We are running conditioning firm since five decades. as time passes we are getting more advance as technology.
                                    </span>
                                </div>
                                {/* LAYER NR. 5 [ for see all service botton ] */}
                                <div className="tp-caption tp-resizeme" id="slide-900-layer-5" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','160','140']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                <NavLink to={"#"} className="site-button-secondry site-btn-effect">Book Now</NavLink>
                                </div>
                                {/* Border Arround */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-900-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: '#eff3f6', borderStyle: 'solid', borderWidth: '50px 50px 50px 50px' }} />
                                {/* Border Area */}
                            </li>
                            {/* SLIDE  */}
                            <li data-index="rs-901" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/home-11/slider2/slide2.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Make your Office a Place you Want to Work at" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../images/home-11/slider2/slide2.jpg').default} alt="" data-lazyload={require('./../../images/home-11/slider2/slide2.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                {/* LAYERS */}
                                {/* LAYER NR. 1 [ for overlay ] */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                    {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                    ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                </div>
                                {/* LAYER NR. 2 [ Small Title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-150','-150','-120']" data-fontsize="['28','28','28','28']" data-lineheight="['56','56','56','50']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                    {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                    ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#111', borderWidth: 0, fontFamily: '"Teko", sans-serif' }}>Choose the best company</div>
                                {/* LAYER NR. 3 [ Large title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-50','-50']" data-fontsize="['72','72','72','38']" data-lineheight="['66','66','66','38']" data-width="['700','700','700','400']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0 }}>
                                    <div style={{ fontFamily: '"Teko", sans-serif' }}>
                                        <span className="site-text-primary">High-Quality Heating Installation &amp; Repair</span>
                                    </div>
                                </div>
                                {/* LAYER NR. 4 [ for paragraph] */}
                                <div className="tp-caption  tp-resizeme" id="slide-901-layer-4" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['60','60','70','50']" data-fontsize="['20','20','20','16']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#111', borderWidth: 0 }}>
                                    <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                                        We are running conditioning firm since five decades. as time passes we are getting more advance as technology.
                                    </span>
                                </div>
                                {/* LAYER NR. 5 [ for see all service botton ] */}
                                <div className="tp-caption tp-resizeme" id="slide-901-layer-5" data-x="['left','left','left','left']" data-hoffset="['100','100','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','160','140']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                <NavLink to={"#"} className="site-button-secondry site-btn-effect">Book Now</NavLink>
                                </div>
                                {/* Border Arround */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: '#eff3f6', borderStyle: 'solid', borderWidth: '50px 50px 50px 50px' }} />
                                {/* Border Area */}
                            </li>
                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />	</div>
                </div>
            </>
        );
    }
};

export default Slider12;