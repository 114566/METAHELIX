import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import adminpanelsettings from '../../../images/admin_panel_settings.png';
import breakingnewsalt1 from '../../../images/breaking_news_alt_1.png';
import insights from '../../../images/insights.png';
import twitterIcon from '../../../images/twitter-icon.png';
import discordRarity from '../../../images/discordRarity.png';
import secureWebBased from '../../../images/secureWebBased.png';
import Vector from '../../../images/Vector.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Holographic3Dshape from '../../../images/Holographic 3D shape 05 1.png';
import Holographic3Dshapemobile from '../../../images/Holographic 3D shape 05 1-mobile.png';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const LandingCarousel = ({ next, previous, goToSlide, ...rest }) => {

    return (
        <React.Fragment>
            
            <div className='mt-10 pb-5' style={{ position: 'relative' }}>
                <div className='row carousel-section-table' style={{ 'marginBottom': '40px', 'zIndex': '1', 'position': 'absolute', 'width': '100%', top: '0px' }}>
                    <div className='col-lg-1 m-auto text-center'>
                        <img src={Vector} alt='img' />
                    </div >
                    <div className='col-lg-2 m-auto'>
                        <span className='carousel-header-logo'>Features</span>
                    </div>
                    <div className='col-lg-7 m-auto'>
                        <hr className='text-white' />
                    </div>
                    <div className='col-lg-2'>
                    </div>
                </div>
                <img src={Holographic3Dshape} className='table-hide' alt='img' style={{ position: 'absolute', 'top': '280px', 'left': '40%', zIndex: '4' }} />

                <div className='table-hide '>
                    <Carousel autoPlay infinite responsive={responsive} >
                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>Sales, Minting, <br />& Listings Announcers</div>
                                <div>
                                    <img src={breakingnewsalt1} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5  carouselCard-content'>
                                <span>Track multiple collections and announce any sale, live minting, or new listing to your Discord community as soon as they happen.<br /><br />

                                    Easily customize the attributes you want to display, descriptions, and more. This module integrates with our Account Verification module to display the owner's @Username, as well as our Rarity module to display ranking on every listing or sale.</span>
                            </div>
                        </div>
                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>Role <br />Verification</div>
                                <div>
                                    <img src={adminpanelsettings} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5  carouselCard-content'>
                                <span>Seamlessly integrate role verification into your Discord server in seconds, without waiting for setup, or granting anyone admin permissions to your server.<br /><br />

                                    Roles are granted in seconds after user verification, and importantly, removed just as quickly. No more waiting for 12 hours after a transfer for roles to update.</span>
                            </div>
                        </div>
                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>Marketplace<br />Data Aggregation</div>
                                <div>
                                    <img src={insights} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                                <span>Track the performance of your NFTs across all supported marketplaces in real-time.</span>
                            </div>
                        </div>

                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>Twitter<br />Integration</div>
                                <div>
                                    <img src={twitterIcon} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                                <span>Connect multiple twitter accounts to MetaHelix to easily cross-post any NFT sale, live mint, or new listing announcement directly to Twitter.</span>
                            </div>
                        </div>
                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>In-Discord<br />Rarity Queries</div>
                                <div>
                                    <img src={discordRarity} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                                <span>Easily calculate rarity data for your collection with a single click, calculating statistical rarity values for your entire collection with rankings.<br /><br />
                                    Rarity data integrates seamlessly throughout the MetaHelix ecosystem, including our Sales and Listing announcers, and even Account Verification by letting users query NFTs by Discord @Usernames.</span>
                            </div>
                        </div>
                        <div className='carouselCard p-0 mx-4' style={{ zIndex: '10' }}>
                            <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                                <div className='carouselCard-title'>Secure Web-based<br />Admin Panel</div>
                                <div>
                                    <img src={secureWebBased} alt='img' className='mt-3' />
                                </div>
                            </div>
                            <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                                <span>You don't have to contact anyone to add a new module, create a collection, update your marketplace, select an integration, or anything else.<br /><br />
                                    All MetaHelix functionalities are available through a web-based Admin-only control panel with live previews, documentation, and more.</span>
                            </div>
                        </div>
                    </Carousel>;
                </div>
                <div className='table-show' style={{ 'position': 'relative' }}>
                    <div className='p-0 ' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>Sales, Minting, <br />& Listings Announcers</div>
                            <div>
                                <img src={breakingnewsalt1} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className=' px-4 pt-4 pb-5 carouselCard-content' style={{ 'background': 'white' }}>
                            <span>Track multiple collections and announce any sale, live minting, or new listing to your Discord community as soon as they happen.<br /><br />
                                Easily customize the attributes you want to display, descriptions, and more. This module integrates with our Account Verification module to display the owner's @Username, as well as our Rarity module to display ranking on every listing or sale.</span>
                        </div>
                    </div>
                    <div className='p-0 mt-4' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>Role <br />Verification</div>
                            <div>
                                <img src={adminpanelsettings} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-5  carouselCard-content'>
                            <span>Seamlessly integrate role verification into your Discord server in seconds, without waiting for setup, or granting anyone admin permissions to your server.<br /><br />

                                Roles are granted in seconds after user verification, and importantly, removed just as quickly. No more waiting for 12 hours after a transfer for roles to update.</span>
                        </div>
                    </div>
                    <div className='p-0 mt-4' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>Marketplace<br />Data Aggregation</div>
                            <div>
                                <img src={insights} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                            <span>Track the performance of your NFTs across all supported marketplaces in real-time.</span>
                        </div>
                    </div>
                    <div className='p-0 mt-4' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>Twitter<br />Integration</div>
                            <div>
                                <img src={twitterIcon} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                            <span>Connect multiple twitter accounts to MetaHelix to easily cross-post any NFT sale, live mint, or new listing announcement directly to Twitter.</span>
                        </div>
                    </div>
                    <div className='p-0 mt-4' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>In-Discord<br />Rarity Queries</div>
                            <div>
                                <img src={discordRarity} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                            <span>Easily calculate rarity data for your collection with a single click, calculating statistical rarity values for your entire collection with rankings.<br /><br />
                                Rarity data integrates seamlessly throughout the MetaHelix ecosystem, including our Sales and Listing announcers, and even Account Verification by letting users query NFTs by Discord @Usernames.</span>
                        </div>
                    </div>
                    <div className='p-0  mt-4' style={{ zIndex: '10', 'boxShadow': '0px 15px 15px 5px rgba(0, 0, 0, 0.15)', 'borderRadius': '20px' }}>
                        <div className='d-flex justify-content-between px-4 py-5 carouselCard-header'>
                            <div className='carouselCard-title'>Secure Web-based<br />Admin Panel</div>
                            <div>
                                <img src={secureWebBased} alt='img' className='mt-3' />
                            </div>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-5 carouselCard-content'>
                            <span>You don't have to contact anyone to add a new module, create a collection, update your marketplace, select an integration, or anything else.<br /><br />
                                All MetaHelix functionalities are available through a web-based Admin-only control panel with live previews, documentation, and more.</span>
                        </div>
                    </div>
                </div>
                <img src={Holographic3Dshapemobile} className='mobile-view' alt='img' style={{ position: 'absolute', 'bottom': '-150px', 'right': '0px', zIndex: '-1' }} />
            </div>
        </React.Fragment>
    )
}
export default LandingCarousel;