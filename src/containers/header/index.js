import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

//importing the images
import discordIconblack from '../../images/discordIcon-black.png';
import twitterblack from '../../images/twitter-black.png';
import Logo from '../../images/logo.png';
import bars from '../../images/bars.png';
import closeButton from '../../images/menu_open.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = React.useState(0);
    const [navbarStatus, setNavbar] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const mobileView = () => {
        setNavbar(true);
    }

    const mobileViewClose = () => {
        setNavbar(false);
    }

    return (
        <React.Fragment>
            <div className='container my-4 header-navbar header-desktop' >
                <div className='row'>
                    <div className='col-lg-3 header-logo m-auto text-start'>
                        <img src={Logo} alt='png' className='d-block ms-5 bars' />
                    </div>
                    <div className='col-lg-6 text-center  m-auto justify-content-center' >
                        <Box className='navbar-section'>
                            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}  >
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
                                    <Tab label="About" href='#about' onClick={function () { window.location.replace(window.location.pathname + "#about") }} />
                                    <Tab label="Holders Benefits" href='#benefits' onClick={function () { window.location.replace(window.location.pathname + "#benefits") }} />
                                    <Tab label="Mint Details" href='#mintdetail' onClick={function () { window.location.replace(window.location.pathname + "#mintdetail") }} />
                                    <Tab label="HelixMap" href='#helixmapgo' onClick={function () { window.location.replace(window.location.pathname + "#helixmapgo") }} />
                                </Tabs>
                            </Box>
                        </Box>
                    </div>
                    <div className='col-lg-3 text-end m-auto'>
                        <div className='me-5'>
                            <a href='https://discord.gg/metahelix' target='_blank'><img src={discordIconblack} alt='png' className='inline-block mx-3' /></a>
                            <a href='https://twitter.com/metahelixio' target='_blank'><img src={twitterblack} alt='png' className='inline-block me-2' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4 header-navbar-mobile py-3' >
                <div className='row'>
                    <div className='col-8 header-logo m-auto text-start'>
                        <img src={Logo} alt='png' className='d-block ms-5 bars' />
                    </div>
                    <div className='col-1 text-center  m-auto justify-content-center' >

                    </div>
                    <div className='col-3 text-end m-auto'>
                        <div className='me-5'>
                            {navbarStatus === false ? <img src={bars} alt='bars' className='bars' onClick={mobileView} /> : <img src={closeButton} alt='bars' className='bars' onClick={mobileViewClose} />}

                        </div>
                    </div>
                </div>
                <div>
                    {
                        navbarStatus === false ? " " : <div className='row'>
                            <a href='#about' style={{ 'textDecoration': 'none' }}><div className='text-center mobile-navbar1 mt-4 mb-2 '>
                                About
                            </div></a>
                            <a href='#benefits' style={{ 'textDecoration': 'none' }}><div className='text-center mobile-navbar2 my-2 py-2'>
                                Holders Benefits
                            </div></a>
                            <a href='#mintdetail' style={{ 'textDecoration': 'none' }}><div className='text-center mobile-navbar3 my-2 py-2'>
                                Mint Details
                            </div></a>
                            <a href='#helixmapgo' style={{ 'textDecoration': 'none' }}><div className='text-center mobile-navbar4 my-2 py-2'>
                                HelixMap
                            </div></a>
                        </div>
                    }
                </div>
            </div>
            {
                navbarStatus == true ? <div style={{ backgroundColor: 'transparent' }} className='header-navbar-mobile mobile-icon-box'>
                    <img src={discordIconblack} alt='png' className='inline-block mx-3' style={{ 'cursor': 'pointer' }} />
                    <img src={twitterblack} alt='png' className='inline-block me-2' style={{ 'cursor': 'pointer' }} />
                </div> : ''
            }
        </React.Fragment>
    )
}


export default Header;