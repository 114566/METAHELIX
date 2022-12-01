import React from 'react';
import landingCardIcon1 from '../../../images/icon1.png';
import LandingPageIcon from '../../../images/VectorBlack.png';

const LandingPageCard1 = () => {
    return (
        <React.Fragment>
            <div className="landingpage-Card mt-5" style={{ zIndex: '2', marginBottom: '150px' }}>
                <div className="card1-header py-4 position-relative px-3">
                    <div className='row py-3 text-left'>
                        <div className='col-lg-4 m-auto text-start'>
                            <div className='ms-2 responsive-show text-center'>
                                <img src={landingCardIcon1} alt='img' className='d-block m-auto' style={{ 'height': '30px' }} />
                                <span className='landingCard-text d-block mx-3 mt-3'>MetaHelix is<br /> <b>always building</b></span>
                            </div>
                            <div className='ms-2 responsive-hide'>
                                <div className='d-flex'>
                                    <img src={landingCardIcon1} alt='img' className='d-block m-auto' style={{ 'height': '30px' }} />
                                    <span className='landingCard-text d-block mx-3'>MetaHelix is<br /> <b>always building</b></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>

                        </div>
                        <div className='col-lg-3 m-auto text-end responsive-hide'>
                            <a href='https://discord.gg/metahelix' style={{ cursor: 'pointer', zIndex: '9999' }}><button className='landingPageCard1-button' style={{ cursor: 'pointer', zIndex: '9999' }}>Join HelixDAO</button></a>
                        </div>
                        <div className='text-center mt-5 m-auto text-end responsive-show'>
                            <a href='https://discord.gg/metahelix' style={{ cursor: 'pointer', zIndex: '9999' }}><button className='landingPageCard1-button' style={{ cursor: 'pointer', zIndex: '9999' }}>Join HelixDAO</button></a>
                        </div>
                    </div>
                </div>
                <div className="Landingcard-body">
                    <div className='container px-4'>
                        <div className='row'>
                            <div className='col-lg-5 p-5'>
                                <span>More features are being added every day. Join our Discord to learn more about DAO and community wallet price displayers, the live-mint countdown module, and everything else MetaHelix has to offer you and your community.</span>
                            </div>
                            <div className='col-lg-2 m-auto text-center'>
                                <img src={LandingPageIcon} alt='png' />
                            </div>
                            <div className='col-lg-5 p-5'>
                                <span>With the goal of becoming the back-bone of all the NFT communities within Discord, we are now ready to announce MetaHelix Ethereum.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default LandingPageCard1;