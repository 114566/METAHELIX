import React from 'react';
import landingCardIcon1 from '../../../images/icon1.png';
import landingCardIcon2 from '../../../images/icon2.png';
import landingCardIcon3 from '../../../images/icon3.png';
import landingCardIcon4 from '../../../images/icon4.png';
import LandingPageIcon from '../../../images/VectorBlack.png';
import LandingCardFixedImage from '../../../images/Holographic 3D shape 36 1.png';
import effect1 from '../../../images/effect1.png';
import effect2 from '../../../images/effect2.png';


const LandingPageCard = () => {
    return (
        <React.Fragment>
            <div className="landingpage-Card mb-5">
                <img src={effect1} alt='img' className='effect1-landingPage' style={{ position: 'absolute', 'left': '0px', 'zIndex': '-1', 'top': '200px', 'mixBlendMode': 'multiply' }} />
                <img src={effect2} alt='img' className='effect1-landingPage' style={{ position: 'absolute', 'right': '0px', 'zIndex': '-1', 'top': '200px', 'mixBlendMode': 'multiply' }} />
                <div className="card-header py-4 position-relative ">
                    <img src={LandingCardFixedImage} alt='LandingCardFixedImage' className='LandingCardFixedImage' width='300px' />
                    <div className='row py-4 '>
                        <div className='col-lg-3 col-md-6 my-md-4  m-auto'>
                            <div className=' table-mode-responsive'>
                                <div className='table-mode-responsive-img'>
                                    <img src={landingCardIcon1} alt='img' />
                                </div>
                                <div className='ms-2'>
                                    <span className='landingCard-text'>Why <br />MetaHelix?</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 my-md-4 m-auto'>
                            <div className='table-mode-responsive'>
                                <div className='table-mode-responsive-img'>
                                    <img src={landingCardIcon3} alt='img' />
                                </div>
                                <div className='ms-2'>
                                    <span className='landingCard-text'>2,215<br /> <span className='inline-block' style={{ 'fontSize': '20px' }}>servers onboarded</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 my-mt-4 m-auto'>
                            <div className='table-mode-responsive'>
                                <div className='table-mode-responsive-img'>
                                    <img src={landingCardIcon4} alt='img' />
                                </div>
                                <div className='ms-2'>
                                    <span className='landingCard-text'>400,000+ <br /> <span className='inline-block' style={{ 'fontSize': '20px' }}>users verified</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 my-mt-4 m-auto'>
                            <div className='table-mode-responsive'>
                                <div className='table-mode-responsive-img'>
                                    <img src={landingCardIcon2} alt='img' />
                                </div>
                                <div className='ms-2'>
                                    <span className='landingCard-text'>4,000+ <br /> <span className='inline-block' style={{ 'fontSize': '20px' }}>SOL airdropped</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Landingcard-body">
                    <div className='container px-4'>
                        <div className='row'>
                            <div className='col-lg-5 p-5'>
                                <span>MetaHelix is a Discord-based technology platform built from the ground up for NFT communities, providing a suite of powerful utilities and tools for projects to empower their Web3 communities, with an effortless plug-and-play setup.</span>
                            </div>
                            <div className='col-lg-2 m-auto text-center'>
                                <img src={LandingPageIcon} alt='png' />
                            </div>
                            <div className='col-lg-5 p-5'>
                                <span>Initially launching on Solana, MetaHelix is one of the leading utility providers for the SOL ecosystem. The MetaHelix project is now going cross-chain, taking its' experience and knowledge to new sectors of the industry, and expanding the HelixDAO community</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LandingPageCard;