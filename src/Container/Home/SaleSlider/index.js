import React from 'react';
import { SaleSliderWrapper } from './styled'
import TitleImage1 from './../../Images/brands-2.png'
import Image1 from './../../Images/babyshop-bebear.webp'
import TitleImage2 from './../../Images/brands-3.png'
import Image2 from './../../Images/babyshop-features-pic1.webp'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SaleSlider(){
    const listImage = [
        {
            id: 1,
            Image: Image1,
            title: "Win a big ",
            TitleImage: TitleImage1
        },
        {
            id: 2,
            Image: Image2,
            title: "Win a big ",
            TitleImage: TitleImage2
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <SaleSliderWrapper>
            <div className="contain">
                <p className="title">USE DISCOUNTS AND PROMOTIONS</p>
                <h3 className='event'>
                    Special <span> Offers</span>
                </h3>

                <div className='slider'>
                    <Slider {...settings}>
                        {listImage.map( itemList => (
                            <div className="slider-item">
                                <img className='slicer-image' src={itemList.Image} alt="" />
                                <div className='slider-desc'>
                                    <p className='slider-title'>
                                        {itemList.title}
                                    </p>
                                    <img className='slicer-image__title' src={itemList.TitleImage} alt="" />
                                </div>
                            </div>
                        ) )}
                    </Slider>
                    
                </div>
            </div>
        </SaleSliderWrapper>
    )
}

export default SaleSlider;
