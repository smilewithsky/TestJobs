import React, { useState } from 'react';
import BabyShopBanner from './../../Images/AboutUs/babyshop-wrap-bg1.webp'
import Play from './../../Images/AboutUs/babyshop-about-icon1.webp'
import Video from './../videoplayback.mp4'
import { AboutBannerWrapper } from './styled'
import { useRef } from 'react';
function AboutBanner(){
    const [isVideoOpen , setIsVideoOpen] = useState(false)

    const videoRef = useRef()

    const handlePlay = () => {
        // videoRef.current.play()
        console.log("video ",videoRef.current);
        setIsVideoOpen(true)
    }

    return (
        <AboutBannerWrapper backGround = {BabyShopBanner}>
            <div className="container">
                <div className="col-12">
                    <div className="banner">
                        <div className='play'>
                            <img src={Play} alt="" onClick={() => handlePlay()} />
                            {isVideoOpen && <div className="video" >
                                <div className='video-container'>
                                    <div className='close'>
                                        <span onClick={() => setIsVideoOpen(false)}>X</span>
                                    </div>
                                    <video ref={videoRef} src={Video} controls ></video>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </AboutBannerWrapper>
    )
}

export default AboutBanner;
