import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Vector from '../../../images/Vector.png';

import helixMapIcon from '../../../images/helixMap-icon1.png';
import helixMapIcon2 from '../../../images/helixMapicon2.png';
import helixMapIcon3 from '../../../images/helixMapicon3.png';
import helixMapIcon4 from '../../../images/helixMapicon4.png';
import helixMapIcon5 from '../../../images/helixMapicon5.png';
import helixMapIcon6 from '../../../images/helixMapicon6.png';
import Connector1 from '../../../images/Connector1.png';
import Connector2 from '../../../images/Connector2.png';
import Connector3 from '../../../images/Connector3.png';
import Connectormobile from '../../../images/@Connector-mobile.png';
const LandingPageHelixMap = () => {

    return (
        <React.Fragment>
            <div className='mt-10 ' id='helixmapgo'>
                <div className='row' style={{ 'marginBottom': '40px', 'zIndex': '1' }}>
                    <div className='col-lg-1 m-auto text-center'>
                        <img src={Vector} alt='img' />
                    </div >
                    <div className='col-lg-2 m-auto carousel-header-logo'>
                        <span className='carousel-header-logo'>HelixMap</span>
                    </div>
                    <div className='col-lg-9 ' style={{ 'opacity': '0' }}>
                        <span className='carousel-header-logo'></span>
                    </div>
                </div>
            </div>
            <div>
                <div className='row responsive-hide'>
                    <div className='col-lg-3 card-helix' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>MetaHelix</span><br />
                                <span className='font-type-helix-2'>ETH Collection</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 card-helix m-auto' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon2} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>B2B</span><br />
                                <span className='font-type-helix-2'>Partnerships</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 card-helix' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon3} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>ETH</span><br />
                                <span className='font-type-helix-2'>Product Launch</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' style={{ maxWidth: '300px' }}>

                    </div>

                </div><div className='responsive-show'>
                    <div className='row'>
                        <div className='col-lg-3 card-helix mb-4' style={{ position: 'relative' }}>
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>MetaHelix</span><br />
                                    <span className='font-type-helix-2'>ETH Collection</span>
                                </div>
                            </div>
                            <img src={Connectormobile} alt='png' className='' style={{ position: 'absolute', left: '50%', 'bottom': '-50px', height: '50px' }} />
                        </div>
                        <div className='col-lg-3 card-helix my-4' style={{ position: 'relative' }}>
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon2} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>B2B</span><br />
                                    <span className='font-type-helix-2'>Partnerships</span>
                                </div>
                            </div>
                            <img src={Connectormobile} alt='png' className='' style={{ position: 'absolute', left: '50%', 'bottom': '-50px', height: '50px' }} />
                        </div>
                        <div className='col-lg-3 card-helix my-4' style={{ position: 'relative' }} >
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon3} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>ETH</span><br />
                                    <span className='font-type-helix-2'>Product Launch</span>
                                </div>
                            </div>
                            <img src={Connectormobile} alt='png' className='' style={{ position: 'absolute', left: '50%', 'bottom': '-50px', height: '50px' }} />
                        </div>

                        <div className='col-lg-3 card-helix my-4' style={{ position: 'relative' }}>
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon4} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>ETH</span><br />
                                    <span className='font-type-helix-2'>Product Launch</span>
                                </div>
                            </div>
                            <img src={Connectormobile} alt='png' className='' style={{ position: 'absolute', left: '50%', 'bottom': '-50px', height: '50px' }} />
                        </div>
                        <div className='col-lg-3 card-helix my-4' style={{ position: 'relative' }}>
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon5} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>ETH</span><br />
                                    <span className='font-type-helix-2'>Product Launch</span>
                                </div>
                            </div>
                            <img src={Connectormobile} alt='png' className='' style={{ position: 'absolute', left: '50%', 'bottom': '-50px', height: '50px' }} />
                        </div>
                        <div className='col-lg-3 card-helix mt-4' style={{ position: 'relative' }}>
                            <div className='d-flex'>
                                <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                    <img src={helixMapIcon6} alt='png' />
                                </div>
                                <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                    <br /><span className='font-type-helix-1'>ETH</span><br />
                                    <span className='font-type-helix-2'>Product Launch</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className='row responsive-hide'>
                    <img src={Connector1} className='HelixMapSection1' alt='png' style={{ maxWidth: '100px', 'position': 'absolute', right: '620px', top: '335px' }} />
                    <img src={Connector1} className='HelixMapSection1' alt='png' style={{ maxWidth: '100px', 'position': 'absolute', left: '782px', top: '340px' }} />
                    <img src={Connector2} className='HelixMapSection1' alt='png' style={{ maxWidth: '100px', 'position': 'absolute', right: '838px', top: '295px' }} />
                    <img src={Connector2} className='HelixMapSection1' alt='png' style={{ maxWidth: '100px', 'position': 'absolute', right: '438px', top: '295px' }} />
                    <img src={Connector3} className='HelixMapSection1' alt='png' style={{ maxWidth: '100px', 'position': 'absolute', left: '438px', top: '340px' }} />
                    <img src={Connector1} className='HelixMapSection2' alt='png' style={{ maxWidth: '90px', 'position': 'absolute', right: '705px', top: '345px' }} />
                    <img src={Connector1} className='HelixMapSection2' alt='png' style={{ maxWidth: '90px', 'position': 'absolute', right: '375px', top: '340px' }} />
                    <img src={Connector2} className='HelixMapSection2' alt='png' style={{ maxWidth: '90px', 'position': 'absolute', left: '695px', top: '308px' }} />
                    <img src={Connector2} className='HelixMapSection2' alt='png' style={{ maxWidth: '90px', 'position': 'absolute', right: '230px', top: '307px' }} />
                    <img src={Connector3} className='HelixMapSection2' alt='png' style={{ maxWidth: '90px', 'position': 'absolute', left: '230px', top: '345px' }} />

                    <div className='col-lg-2' style={{ maxWidth: '300px' }}>

                    </div>
                    <div className='col-lg-3  card-helix' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon4} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>ETH</span><br />
                                <span className='font-type-helix-2'>Product Launch</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 card-helix m-auto' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon5} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>ETH</span><br />
                                <span className='font-type-helix-2'>Product Launch</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 card-helix' style={{ maxWidth: '300px' }}>
                        <div className='d-flex'>
                            <div className='bg-white px-4 metahelixCardFirst' style={{ padding: '35px' }}>
                                <img src={helixMapIcon6} alt='png' />
                            </div>
                            <div className='ps-3 metahelixCardSecond' style={{ 'background': 'linear-gradient(180deg, #CACACA 0%, rgba(255, 255, 255, 0) 100%)', 'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)', 'width': '100%' }}>
                                <br /><span className='font-type-helix-1'>ETH</span><br />
                                <span className='font-type-helix-2'>Product Launch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default LandingPageHelixMap;