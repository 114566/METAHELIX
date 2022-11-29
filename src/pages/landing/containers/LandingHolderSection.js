import React from 'react';
import diamond from '../../../images/diamond.png';
import Vector from '../../../images/Vector.png';
import howtovote from '../../../images/how_to_vote.png';
import handshake from '../../../images/handshake.png';

const LandingHolderSection = ({ next, previous, goToSlide, ...rest }) => {

    return (
        <React.Fragment>
            <div className='mt-10 ' id='benefits'>
                <div className='row ' style={{ 'marginBottom': '40px', 'zIndex': '1' }}>
                    <div className='col-lg-1 my-auto text-center'>
                        <img src={Vector} alt='img' />
                    </div >
                    <div className='col-lg-3 my-auto carousel-header-logo' >
                        <span className='carousel-header-logo'>Holders benefits</span>
                    </div>
                    <div className='col-lg-8 m-auto'>
                        <hr className='text-white' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 carouselCard-card'>
                        <div className='d-flex justify-content-between px-4 py-4 carouselCard-header1'>
                            <div className='carouselCard-title' style={{ 'margin': 'auto 0px' }}>Revenue Sharing</div>
                            <div>
                                <img src={diamond} alt='img' height="30px" />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 carouselCard-content' style={{ 'height': '180px' }}>
                            <span>Become stakeholders of MetaHelix’s Ethereum earnings - all ETH NFT holders will get 70% of future platform income airdropped among everyone respectfully to the number of NFT they hold.</span>
                        </div>
                    </div>
                    <div className='col-lg-4 carouselCard-card'>
                        <div className='d-flex justify-content-between px-4 py-4 carouselCard-header1'>
                            <div className='carouselCard-title' style={{ 'margin': 'auto 0px' }}>DAO Voting</div>
                            <div>
                                <img src={howtovote} alt='img' height="30px" />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 carouselCard-content' style={{ 'height': '180px' }}>
                            <span>Become eligible to take part in the HelixDAO voting process, including platform updates such as new features and modules, additional collections’ utilities and much more.</span>
                        </div>
                    </div>
                    <div className='col-lg-4 carouselCard-card'>
                        <div className='d-flex justify-content-between px-4 py-4 carouselCard-header1'>
                            <div className='carouselCard-title' style={{ 'margin': 'auto 0px' }}>Ambassador Program</div>
                            <div>
                                <img src={handshake} alt='img' height="30px" />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 carouselCard-content' style={{ 'height': '180px' }}>
                            <span>In order to be eligible to join the ambassador program and earn commission from the sales of MetaHelix subscriptions, users are required to hold at least one NFT from the collection.</span>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default LandingHolderSection;