import React, { useEffect } from 'react';
import TextHover from '../../Common/TextHover';
import { HomeBannerWrapper } from './styled'
import SliderBanner1 from './../../Images/HomeBanner/1.webp'
import SliderBanner2 from './../../Images/HomeBanner/2.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image2 from './../../Images/babyshop-promo-pic1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomeBanner(){
    useEffect( () => {
        AOS.init({duration: 1000});
    } , [] )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const bannerSlider = [
        {
            title: "Collection",
            bold: "Autumn Winter",
            time: "2021",
            Image: SliderBanner1
        },
        {
            title: "What's Trending",
            time: "in 2022",
            Image: SliderBanner2
        }
    ]

    return (
        <HomeBannerWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <Slider {...settings}>
                            {bannerSlider.map( item => (
                                <div className="Home-banner__slider">
                                    <img src={SliderBanner1} alt="" />
                                    <div className='Home-banner__slider-content' data-aos="fade-up">
                                        <h3 className='Home-banner__slider-content__title'>{item.title}</h3>
                                        <p className='Home-banner__slider-content__bold'>{item?.bold}</p>
                                        <p className='Home-banner__slider-content__time'>{item?.time}</p>
                                        <button className='Home-banner__slider-button'>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </button>
                                    </div>
                                </div>
                            ) )}
                        </Slider>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="item" style={{backgroundColor: "#eef2f3"}}>
                            <h3 className="title">
                                Select your <br />
                                <span>
                                    child’s age
                                </span>
                            </h3>
                            <div className='time'>
                                <TextHover>0-2</TextHover>
                                <TextHover>2-4</TextHover>
                                <TextHover>4-6</TextHover>
                            </div>
                        </div>

                        <div className="item" style={{backgroundColor: "#eef2f3"}}>
                            <img className='item-image' src={Image2} alt="" />
                            
                            <h3 className="name-product">
                                Duvet Cover Set <br />
                                <span className='sale-product'>
                                    40% off
                                </span>
                            </h3>
                            
                            <div className='time'>
                                <TextHover>VIEW COLLECTION</TextHover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeBannerWrapper>
    )
}

export default HomeBanner;
