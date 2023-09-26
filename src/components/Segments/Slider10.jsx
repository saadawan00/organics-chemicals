import React from 'react';

class Slider10 extends React.Component {
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

        loadScript('./assets/js/rev-script-10.js');

    };
    render() {
        return (
            <>
                <div className="slider-outer">
                    <div className="main-slider style-two default-banner">
                        <div className="tp-banner-container">
                            <div className="tp-banner">
                                {/* START REVOLUTION SLIDER 5.4.1 */}
                                <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="mask-showcase" data-source="gallery" style={{ background: '#aaaaaa', padding: 0 }}>
                                    <div id="rev_slider_26_1" className="rev_slider fullscreenbanner tiny_bullet_slider" style={{ display: 'none' }} data-version="5.4.1">
                                        <ul>
                                            {/* SLIDE 1 */}
                                            <li data-index="rs-73" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb data-rotate={0} data-saveperformance="off" data-title="Slide">
                                                {/* MAIN IMAGE */}
                                                <img src={require('./../../images/main-slider/slider10/slide1-blur.jpg').default} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" />
                                                {/* LAYERS */}
                                                {/* LAYER 1 [ for overlay ] */}
                                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-73-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                                            {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                                            ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                                </div>
                                                {/* LAYER NR. 2 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-73-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-150','-200','-200']" data-width="['650','650','620','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:300,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[10,10,10,10]" data-paddingright="[20,20,20,20]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[20,20,20,20]" style={{ zIndex: 7, fontSize: 24,  fontWeight: 600, color: '#ffffff', letterSpacing: 4, fontFamily: '"Teko", sans-serif' }}>High Performance</div>
                                                {/* LAYER NR. 3 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-73-layer-3" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-100','-120']" data-fontsize="['100','100','60','40']" data-lineheight="['100','100','60','40']" data-width="['700','650','620','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[20,20,20,20]" data-paddingright="[20,20,20,20]" data-paddingbottom="[30,30,30,30]" data-paddingleft="[20,20,20,20]" style={{ zIndex: 8, fontWeight: 800, color: '#ffffff', fontFamily: '"Teko", sans-serif' }}>We Build Your Best Future
                                                </div>
                                                {/* LAYER NR. 4 */}
                                                <div className="tp-caption rev-btn  tp-resizeme" id="slide-73-layer-4" data-x="['left','left','center','center']" data-hoffset="['25','25','0','00']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','50','-30']" data-width="none" data-height="none" data-whitespace data-type="button" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                            {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(0,0,0);bg:rgb(255,255,255);&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]" style={{ zIndex: 10, fontSize: 18, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: 2, fontFamily: '"Poppins", sans-serif', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer' }}>Read More</div>
                                                {/* LAYER NR. 5 */}
                                                <div className="tp-caption   tp-resizeme rs-parallaxlevel-2" id="slide-73-layer-5" data-x="['center','center','center','center']" data-hoffset="['500','500','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['0','0','50','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:400,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#000&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6 }}>
                                                    <img src={require('./../../images/main-slider/slider10/slide1.jpg').default} alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['480px','480px','450','281']" width={1200} height={675} data-no-retina />
                                                </div>
                                            </li>
                                            {/* SLIDE 2 */}
                                            <li data-index="rs-74" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb data-rotate={0} data-saveperformance="off" data-title="Slide">
                                                {/* MAIN IMAGE */}
                                                <img src={require('./../../images/main-slider/slider10/slide2-blur.jpg').default} alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" />
                                                {/* LAYERS */}
                                                {/* LAYER 1 [ for overlay ] */}
                                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-74-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                                                {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                                                ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                                </div>
                                                {/* LAYER NR. 2 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-74-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-150','-200','-200']" data-width="['650','650','620','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:300,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[10,10,10,10]" data-paddingright="[20,20,20,20]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[20,20,20,20]" style={{ zIndex: 7, fontSize: 24,  fontWeight: 600, color: '#ffffff', letterSpacing: 4, fontFamily: '"Teko", sans-serif' }}>High Performance</div>
                                                {/* LAYER NR. 3 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-74-layer-3" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-100','-120']" data-fontsize="['100','100','60','40']" data-lineheight="['100','100','60','40']" data-width="['700','650','620','380']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[20,20,20,20]" data-paddingright="[20,20,20,20]" data-paddingbottom="[30,30,30,30]" data-paddingleft="[20,20,20,20]" style={{ zIndex: 8, fontWeight: 800, color: '#ffffff', fontFamily: '"Teko", sans-serif' }}>We Build Your Best Future
                                                </div>
                                                {/* LAYER NR. 4 */}
                                                <div className="tp-caption rev-btn  tp-resizeme" id="slide-74-layer-4" data-x="['left','left','center','center']" data-hoffset="['25','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['150','150','50','-30']" data-width="none" data-height="none" data-whitespace data-type="button" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;sfxcolor&quot;:&quot;#ddd&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                                                {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(0,0,0);bg:rgb(255,255,255);&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]" style={{ zIndex: 10, fontSize: 18, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: 2, fontFamily: '"Poppins", sans-serif', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer' }}>Read More</div>
                                                {/* LAYER NR. 5 */}
                                                <div className="tp-caption   tp-resizeme rs-parallaxlevel-2" id="slide-74-layer-5" data-x="['center','center','center','center']" data-hoffset="['500','500','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['0','0','50','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:400,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#000&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6 }}>
                                                    <img src={require('./../../images/main-slider/slider10/slide2.jpg').default} alt="" data-ww="['1000px','1000px','800px','500px']" data-hh="['480px','480px','450','281']" width={1200} height={675} data-no-retina />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tp-bannertimer" style={{ height: 10, background: 'rgba(0, 0, 0, 0.15)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Slider10;