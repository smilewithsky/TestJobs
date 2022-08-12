import React, { useState } from 'react';
import { SliderDetailWrapper } from './styled'
function SliderDetail({listImage}){
    const [imageIndex , setImageIndex] = useState(0)

    const handleChangeImage = (index) => {
        setImageIndex(index)
    }
    return (
        <SliderDetailWrapper>
            <div className='contains'>
                <div className='list-image'>
                    {listImage.map( (item , index) => (
                        <div className={`item-image ${index === imageIndex ? "active" : ""}  `} onClick={ () => handleChangeImage(index)} >
                            <img src={item} alt="" />
                        </div>
                    ) )}
                </div>
                <img src={listImage[imageIndex]} alt="" />
            </div>
        </SliderDetailWrapper>
    )
}

export default SliderDetail;
