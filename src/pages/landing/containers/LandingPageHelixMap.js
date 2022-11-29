import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Vector from '../../../images/Vector.png';
import section4 from '../../../images/section4.png';
import metahelix from '../../../images/metahelix-section1.png';
import metahelix2 from '../../../images/metahelix-section2.png';
import metahelix3 from '../../../images/metahelix-section3.png';
import metahelix4 from '../../../images/metahelix-section4.png';
import metahelix5 from '../../../images/metahelix-section5.png';
import metahelix6 from '../../../images/metahelix-section6.png';

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
                <img src={section4} alt='png' width='100%' className='responsive-hide' style={{'mixBlendMode': 'luminosity   '}}/>
            </div>
            <div className='responsive-show'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img src={metahelix} alt='png' width='100%' />
                    </div>
                    <div className='col-md-12'>
                        <img src={metahelix2} alt='png' width='100%' />
                    </div>
                    <div className='col-md-12'>
                        <img src={metahelix3} alt='png' width='100%' />
                    </div>
                    <div className='col-md-12'>
                        <img src={metahelix4} alt='png' width='100%' />
                    </div>
                    <div className='col-md-12'>
                        <img src={metahelix5} alt='png' width='100%' />
                    </div>
                    <div className='col-md-12'>
                        <img src={metahelix6} alt='png' width='100%' />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default LandingPageHelixMap;