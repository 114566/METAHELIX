import React from 'react';
import './index.css';
//importing the images
import footerImageLogo from '../../images/META HELIX.png';
import divider from '../../images/divider.png';
import discordIcon from '../../images/discordIcon.png';
import twitter from '../../images/twitter.png';


const Footer = () => {
    return (
        <React.Fragment>
            <div className='landing-page-footer text-center' style={{ position: 'relative' }}>
                <div className=' container py-5 ' >
                    <div className='row py-5'>
                        <div className='col-lg-6 col-sm-12 offset-lg-3 col-md-6 offset-md-3 col-sm-12'>
                            <div className='row m-auto'>
                                <div className='col-1 text-center'>
                                </div>
                                <div className='col-4 text-center'>
                                    <img src={footerImageLogo} alt='img' width='100%' className='m-auto px-3' />
                                </div>
                                <div className='col-2 m-auto'>
                                    <img src={divider} alt='img' />
                                </div>
                                <div className='col-4 m-auto text-start responsive-hide'>
                                    <div className='inline-block me-3'>
                                        <a href='https://discord.gg/metahelix' target='_blank'><img src={discordIcon} alt='img' /></a>
                                    </div>
                                    <div className='inline-block col-mg-ms-3'>
                                        <a href='https://twitter.com/metahelixio' target='_blank'><img src={twitter} alt='img' /></a>
                                    </div>
                                </div>
                                <div className='col-4 m-auto text-start responsive-show text-center'>
                                    <div className='inline-block me-3'>
                                        <img src={discordIcon} alt='img' />
                                    </div>
                                    <div className='inline-block col-mg-ms-3'>
                                        <img src={twitter} alt='img' />
                                    </div>
                                </div>
                                <div className='col-1 text-center'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='footer-hr' />
                <div className='container'>
                    <div className='footer-bottom-text py-4'>
                        Copyright &copy; 2021 All rights reserved
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;