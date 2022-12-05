import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Vector from '../../../images/Vector.png';
import Artimage1 from '../../../images/art1 (1).gif';
import Artimage2 from '../../../images/art1 (2).gif';
import Artimage3 from '../../../images/art1 (3).gif';
import Artimage4 from '../../../images/art1 (4).gif';
import Artimage5 from '../../../images/art1 (5).gif';
import Artimage6 from '../../../images/art1 (6).gif';
import HolographicMobile from '../../../images/HolographicMobile.png';
const LandingPageArt = ({ next, previous, goToSlide, ...rest }) => {
    return (
        <React.Fragment>
            <div className='mt-10'>
                <div className='row ' style={{ 'marginBottom': '40px', 'zIndex': '1' }}>
                    <div className='col-lg-10 m-auto mobile-view'>
                        <div className='d-flex'>
                            <hr className='text-white m-auto pe-3 d-block mobile-view' width='100%' />
                            <img src={HolographicMobile} alt='HolographicMobile' className='mobile-view' />
                        </div>
                    </div>
                    <div className='col-lg-1 m-auto text-center'>
                        <img src={Vector} alt='img' />
                    </div >
                    <div className='col-lg-1 m-auto carousel-header-logo'>
                        <span className='carousel-header-logo'>Art</span>
                    </div>
                    <div className='col-lg-10 m-auto d-flex'>
                        <hr className='text-white m-auto mobile-close' width='100%' />
                    </div>
                </div>
            </div>
            <div className='responsive-hide'>
                <div className='row'>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart1' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage1} alt='img' className='imageart1 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg1' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart2' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage2} alt='img' className='imageart2 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg2' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart3' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage3} alt='img' className='imageart3 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg3' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart4' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage4} alt='img' className='imageart4 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg4' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart5' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage5} alt='img' className='imageart5 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg5' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-lg-4  col-dm-6 col-sm-6 mb-2 p-0' id='imageart6' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage6} alt='img' className='imageart6 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg6' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px', mixBlendMode: 'darken' }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className='responsive-show'>
                <div className='row '>
                    <div className='col-6 mb-2 p-0' id='imageart1' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage1} alt='img' className='imageart1 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg1' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-6 mb-2 p-0' id='imageart2' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage2} alt='img' className='imageart2 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg2' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-6 mb-2 p-0' id='imageart3' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage3} alt='img' className='imageart3 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg3' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-6 mb-2 p-0' id='imageart4' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage4} alt='img' className='imageart4 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg4' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-6 mb-2 p-0' id='imageart5' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage5} alt='img' className='imageart5 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg5' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px' }}>
                        </div>
                    </div>
                    <div className='col-6 mb-2 p-0' id='imageart6' style={{ 'position': 'relative' }}>
                        <div className=' p-4' >
                            <img src={Artimage6} alt='img' className='imageart6 d-block' width='100%' style={{ borderRadius: '20px' }} />
                        </div>
                        <div className='card-section-bg artimagebg6' style={{ 'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0px', mixBlendMode: 'darken' }}>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LandingPageArt;