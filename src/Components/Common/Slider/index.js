import React from 'react';
import ListSlider from "react-slick";
import { SliderWrapper } from './styled'
function Slider({slides}){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <SliderWrapper>
            <ListSlider {...settings}>
                {slides.map( item => <div><img src={item} alt="" /></div> )}
            </ListSlider>
        </SliderWrapper>
    )
}

export default Slider;
