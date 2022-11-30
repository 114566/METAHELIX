import React from 'react';
import Footer from '../../containers/footer';
import Header from '../../containers/header';
import './index.css';

import LandingPage_text from '../../images/Property 1=Variant2.png';
import landingBg from '../../images/landing_bg.png';
import LandingPageIcon from '../../images/Vector.png';
import LandingPageCard from './containers/LandingPageCard';
import LandingCarousel from './containers/LandingCarousel';
import LandingPageCard1 from './containers/LandingPageCard1';
import LandingHolderSection from './containers/LandingHolderSection';
import LandingTokenomics from './containers/LandingTokenomics';
import LandingPageArt from './containers/LandingPageArt';
import LandingPageHelixMap from './containers/LandingPageHelixMap';
import Holographic3Dshape from '../../images/Holographic 3D shape 53 1.png';
import Holographic3Dshape1 from '../../images/Holographic 3D shape 80 1.png';
import Holographic3Dshape2 from '../../images/Holographic 3D shape 55 1.png';
import Landinggraphic3D2mobile from '../../images/Holographic 3D shape 80 1.png';
import Holographic3Dmobile from '../../images/Holographi3D-mobilepng.png';
import landingPageLogo from '../../images/landingPage-logo.png';
import bgimagetext from '../../images/bg_text.png'
const LandingPage = () => {
    return (
        <React.Fragment>
            <div className='landing-page'>
                <div className='container'>
                    {/*landing page header part*/}
                    <Header />
                </div>
                <div className='content'>
                    <div className='container'>
                        <div className='row text-center mt-5'>
                            <div className='col-lg-8 offset-lg-2' style={{ 'position': 'relative' }}>
                                <img src={landingPageLogo} style={{marginTop : '60px'}} alt='png' width='100%'/>
                            </div>

                        </div>
                        <div className='row text-center mt-4'>
                            <span className='font-type-1'>IS COMING TO ETHEREUM</span>
                        </div>
                        <div className='text-center mt-5'>
                            <img src={LandingPageIcon} alt='img' />
                        </div>
                        <div className='text-center mt-5'>
                            <button className='langingPageButton' id='about'>Mint</button>
                        </div>
                        <LandingPageCard />
                    </div>
                    <div className='carousel-section-responsive mt-10' style={{ 'backgroundColor': 'rgba(0,0,0,0.25)', 'boxShadow': '0px 4px 23px 11px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
                        <div className='container'>
                            <LandingCarousel />
                            <LandingPageCard1 />
                        </div>
                        <img src={Holographic3Dshape} className='LandingPage-effectIamge1 responsive-hide' alt='png' style={{ position: 'absolute', 'right': '0px', 'bottom': '-400px', 'zIndex': '999' }} />
                        <img src={Holographic3Dmobile} className='LandingPage-effectIamge1  responsive-show' alt='png' style={{ position: 'absolute', 'right': '0px', 'bottom': '-400px', 'zIndex': '999' }} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div>
                            <div className='container my-5 pt-5'>
                                <LandingHolderSection />
                            </div>
                        </div>
                        <div className='container my-5'>
                            <LandingTokenomics />
                        </div>
                        <img src={Holographic3Dshape1} className='LandingPage-effectIamge2 responsive-hide' alt='png' style={{ position: 'absolute', 'left': '0px', 'bottom': '-550px', 'zIndex': '999' }} />
                        <img src={Landinggraphic3D2mobile} className='LandingPage-effectIamge2 responsive-show' alt='png' style={{ position: 'absolute', 'left': '0px', 'bottom': '-550px', 'zIndex': '999' }} />
                    </div>

                    <div className='py-5 mt-10' style={{ 'backgroundColor': 'rgba(0,0,0,0.25)', 'boxShadow': '0px 4px 23px 11px rgba(0, 0, 0, 0.5)', 'position': 'relative' }}>
                        <img src={Holographic3Dshape2} className='LandingPage-effectIamge3' alt='png' style={{ position: 'absolute', 'right': '0px', 'bottom': '620px', 'zIndex': '999' }} />
                        <div className='container' >
                            <LandingPageHelixMap />
                            <LandingPageArt />
                        </div>

                    </div>
                </div>
                {/*landing page footer part*/}
                <Footer />

            </div>
            <img src={landingBg} className='table-mode-hide' alt='png' style={{ 'position': 'absolute', "bottom": '150px', 'left': '0px', 'width': '100', 'mixBlendMode': 'multiply', zIndex: '-999' }} />
        </React.Fragment>
    )
}
export default LandingPage;