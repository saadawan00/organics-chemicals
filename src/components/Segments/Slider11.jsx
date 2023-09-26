import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider11 extends React.Component {
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

        loadScript('./assets/js/rev-script-11.js');

    };
    render() {
        return (
            <>
                <div className="slider-outer2 bg-white">
                    <div className="mid-slider">
                        <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="typewriter-effect" data-source="gallery">
                            <div id="welcome_two" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                                <ul>
                                    {/* SLIDE 1 */}
                                    <li data-index="rs-901" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/home-11/slider/slide1.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-description>
                                        {/* MAIN IMAGE */}
                                        <img src={require('./../../images/home-11/slider/slide1.jpg').default} alt="" center="true" bottom="true" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                        {/* LAYERS */}
                                        {/* LAYER NR. 1 [ for overlay ] */}
                                        <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                                {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                        </div>
                                        {/* LAYER NR. 2 [ Small Title ] */}
                                        <div className="tp-caption   tp-resizeme site-text-primary" id="slide-901-layer-2" data-x="['left','left','left','left']" data-hoffset="['30','120','34','30']" data-y="['top','middle','middle','middle']" data-voffset="['180','-80','-80','-60']" data-fontsize="['24','24','24','20']" data-lineheight="['24','24','24','20']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, fontFamily: '"Exo", sans-serif' }}>We Make Sure</div>
                                        {/* LAYER NR. 3 [ Large Title ] */}
                                        <div className="tp-caption   tp-resizeme" id="slide-901-layer-3" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['top','middle','middle','middle']" data-voffset="['230','20','0','0']" data-fontsize="['56','56','46','30']" data-lineheight="['66','66','48','38']" data-width="['600','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 900, color: '#fff', borderWidth: 0, fontFamily: '"Exo", sans-serif', textTransform: 'uppercase' }}>Build Everything You Needs</div>
                                        {/* LAYER NR. 4 [ for paragraph] */}
                                        <div className="tp-caption  tp-resizeme" id="slide-901-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['50','130','100','80']" data-fontsize="['16','16','20','14']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Exo", sans-serif' }}>
                                            We only hire great people who strive to push their ideas into fruition by outmuscling and outhustling the competition.
                                        </div>
                                        {/* LAYER NR. 5 [ for see all service botton ] */}
                                        <div className="tp-caption tp-resizeme" id="slide-901-layer-5" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','230','180','180']" data-lineheight="['none','none','none','none']" data-width="['200','200','200','200']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                            <NavLink to={"/about-1"} className="site-button btn-hover-animation"><i className="flaticon-right" />More About</NavLink>
                                        </div>
                                    </li>
                                    {/* SLIDE 2 */}
                                    <li data-index="rs-902" data-transition="slidingoverlayhorizontal" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/home-11/slider/slide2.jpg').default} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-description>
                                        {/* MAIN IMAGE */}
                                        <img src={require('./../../images/home-11/slider/slide2.jpg').default} alt="" data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                        {/* LAYERS */}
                                        {/* LAYER NR. 1 [ for overlay ] */}
                                        <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                                {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                        </div>
                                        {/* LAYER NR. 2 [ Small Title ] */}
                                        <div className="tp-caption   tp-resizeme site-text-primary" id="slide-902-layer-2" data-x="['left','left','left','left']" data-hoffset="['30','120','34','30']" data-y="['top','middle','middle','middle']" data-voffset="['180','-80','-80','-60']" data-fontsize="['24','24','24','20']" data-lineheight="['24','24','24','20']" data-width="['700','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, fontFamily: '"Exo", sans-serif' }}>We Make Sure</div>
                                        {/* LAYER NR. 3 [ Large Title ] */}
                                        <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['top','middle','middle','middle']" data-voffset="['230','20','0','0']" data-fontsize="['56','56','46','30']" data-lineheight="['66','66','48','38']" data-width="['600','700','96%','96%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 900, color: '#fff', borderWidth: 0, fontFamily: '"Exo", sans-serif', textTransform: 'uppercase' }}>We will build your dream home.</div>
                                        {/* LAYER NR. 4 [ for paragraph] */}
                                        <div className="tp-caption  tp-resizeme" id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['50','130','100','80']" data-fontsize="['16','16','20','14']" data-lineheight="['30','30','30','22']" data-width="['600','600','90%','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Exo", sans-serif' }}>
                                            We only hire great people who strive to push their ideas into fruition by outmuscling and outhustling the competition.
                                        </div>
                                        {/* LAYER NR. 5 [ for see all service botton ] */}
                                        <div className="tp-caption tp-resizeme" id="slide-902-layer-5" data-x="['left','left','left','left']" data-hoffset="['30','120','30','30']" data-y="['middle','middle','middle','middle']" data-voffset="['150','230','180','180']" data-lineheight="['none','none','none','none']" data-width="['200','200','200','200']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                                {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase' }}>
                                            <NavLink to={"/about-1"} className="site-button btn-hover-animation"><i className="flaticon-right" />More About</NavLink>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Slider11;