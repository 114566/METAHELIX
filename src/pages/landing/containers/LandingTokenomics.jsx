import React from 'react';
import Vector from '../../../images/Vector.png';
import { useState } from 'react';


const LandingTokenomics = () => {
    const [firstSection, setFirstSection] = useState(true);
    const [secondSection, setSecondSection] = useState(false);
    const [thirdSection, setThirdSection] = useState(false);

    const firstshow = () => {
        setFirstSection(true);
        setSecondSection(false);
        setThirdSection(false);
    }

    const secondshow = () => {
        setFirstSection(false);
        setSecondSection(true);
        setThirdSection(false);
    }

    const thirdshow = () => {
        setFirstSection(false);
        setSecondSection(false);
        setThirdSection(true);
    }
    return (
        <React.Fragment>
            <div className='responsive-hide landingTokenomics mt-10 p-4' id='mintdetail' style={{ marginBottom: '200px' }}>

                <div className='row'>
                    <div className='d-flex flex-row'>
                        <div className='me-3 my-auto'>
                            <img src={Vector} alt='img' />
                        </div>
                        <div className='me-3 tokenText'>Mint Details</div>
                        <div className='col-lg-5 my-auto' >
                            <hr className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex'>
                        <div className='vr mx-2 mt-3 d-block verticleLine' style={{ 'border': '1px solid white' }}></div>
                        <div className='col-lg-7 ms-4'>
                            <div className='my-4'>
                                <div className='tokenText1'>Mint date:</div>
                                <div className='tokenText2'>10th January</div>
                            </div>
                            <div className='my-4'>
                                <div className='tokenText1'>Mint price:</div>
                                <div className='tokenText2'>0.1ETH</div>
                            </div>
                            <div className='my-4'>
                                <div className='tokenText3'>Supply: 6,500</div>
                                <div className='tokenText1'>

                                </div>
                            </div>
                        </div>
                        {
                            firstSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex'>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={thirdshow}>
                                            <g opacity="0.25">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                                <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='p-3'>
                                        <div className="donut instalment1">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>6,500</span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={secondshow}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>MetaHelix NFTs will be available</i>
                                </div>
                            </div> : ''
                        }
                        {
                            secondSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex'>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={firstshow} >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                            <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                        </svg>
                                    </div>
                                    <div className='p-3'>
                                        <div className="donut instalment2">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>500 </span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={thirdshow} >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>Up to 500 MetaHelix NFTs will be given away to SOL holders</i>
                                </div>
                            </div> : ''
                        }
                        {
                            thirdSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex'>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={secondshow}>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                            <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                        </svg>
                                    </div>
                                    <div className='p-3'>
                                        <div className="donut instalment3">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>100</span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>
                                    <div className='m-auto'>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={firstshow}>
                                            <g opacity="0.25">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                                <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>NFTs will be kept by the team for marketing and general promotional purposes</i>
                                </div>
                            </div> : ''
                        }


                    </div>
                </div>
            </div>
            <div className='landingTokenomics responsive-show mt-10 p5-4' style={{ marginBottom: '200px' }}>
                <div className=' text-center'>
                    <div>
                        <img src={Vector} alt='img' />
                    </div>
                    <div className='tokenText mt-2'>Mint Details</div>
                    <hr className='text-white' />
                    <div className='my-4 text-center'>
                        <div className='tokenText1 text-center'>Mint date:</div>
                        <div className='tokenText2 text-center'>10th January</div>
                    </div>
                    <div className='my-4'>
                        <div className='tokenText1 text-center'>Mint price:</div>
                        <div className='tokenText2 text-center'>0.1ETH</div>
                    </div>
                    <div className='my-4'>
                        <div className='tokenText2 text-center'>Supply: 6,500</div>
                    </div>
                    <hr className='text-white' />
                    <div className='mt-5'>
                        {
                            firstSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex ' style={{ flexDirection: 'column' }}>
                                    <div className='d-flex justify-content-center m-auto' style={{ 'maxWidth': '30px' }}>
                                        <div className='mx-2'>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={thirdshow}>
                                                <g opacity="0.25">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                                    <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='mx-2 '>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={secondshow}>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                                <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='p-3 m-auto'>
                                        <div className="donut instalment1">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>6,500</span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>MetaHelix NFTs will be available</i>
                                </div>
                            </div> : ''
                        }
                        {
                            secondSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex ' style={{ flexDirection: 'column' }}>
                                    <div className='d-flex justify-content-center m-auto' style={{ 'maxWidth': '30px' }}>
                                        <div className='mx-2'>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={firstshow}>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                                <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div className='mx-2 '>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={thirdshow}>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                                <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='p-3 m-auto'>
                                        <div className="donut instalment2">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>500 </span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>Up to 500 MetaHelix NFTs will be given away to SOL holders</i>
                                </div>
                            </div> : ''
                        }
                        {
                            thirdSection == true ? <div className='m-auto col-lg-3 text-start'>
                                <div className='d-flex ' style={{ flexDirection: 'column' }}>
                                    <div className='d-flex justify-content-center m-auto' style={{ 'maxWidth': '30px' }}>
                                        <div className='mx-2'>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={secondshow}>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 24.7348C17.5032 25.1094 16.8706 25.0841 16.496 24.6783L13.2652 21.1783C12.9116 20.7953 12.9116 20.2048 13.2652 19.8218L16.496 16.3217C16.8706 15.9159 17.5032 15.8906 17.9091 16.2652C18.3149 16.6398 18.3402 17.2724 17.9656 17.6783L16.284 19.5L26 19.5C26.5523 19.5 27 19.9477 27 20.5C27 21.0523 26.5523 21.5 26 21.5L16.284 21.5L17.9656 23.3217C18.3402 23.7275 18.3149 24.3602 17.9091 24.7348Z" fill="white" />
                                                <rect x="39" y="39" width="38" height="38" rx="19" transform="rotate(-180 39 39)" stroke="white" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div className='mx-2 '>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'cursor': 'pointer' }} onClick={firstshow}>
                                                <g opacity="0.25">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="white" />
                                                    <rect x="1" y="1" width="38" height="38" rx="19" stroke="white" stroke-width="2" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className='p-3 m-auto'>
                                        <div className="donut instalment3">
                                            <div className="donut-default"></div>
                                            <div className="donut-line"></div>
                                            <div className="donut-other">1</div>
                                            <div className="donut-text">
                                                <span>100</span>
                                            </div>
                                            <div className="donut-case"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className='text-center'>
                                    <i className='piecharttext1'>NFTs will be kept by the team for marketing and general promotional purposes</i>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default LandingTokenomics;