import React, { memo } from 'react';
import { useState } from 'react';
import Button from '../../../../Components/Common/Button';
import { PopUpWrapper } from './styled'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image1 from './../../../Images/Baby Robe A big dream/1.webp'
import Image2 from './../../../Images/Baby Robe A big dream/2.webp'
import { v4 as uuidv4 } from 'uuid';
function PopUp({item , setIsPopUpOpen}){
    const [count , setCount] = useState(-1)
    if(count < 1){
        setCount(1)
    }

    const { SKU,
        Tags,
        age,
        categories,
        composition,
        currentPriceProduct,
        description,
        descriptionTitle,
        height,
        idProduct,
        imageProduct,
        isSale,
        ListColor,
        nameProduct,
        salePriceProduct,
        size, } = item

    console.log("item ",item);

    const handleClose = () => {
        setIsPopUpOpen(false)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <PopUpWrapper>
            <div className="over-lay">
                <div className="content">
                    <div className='close' onClick={() => handleClose()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div div className='list-image'>
                                <Slider {...settings}>
                                    {imageProduct.map( item=> (
                                        <img src={item} alt="" />
                                    ) )}
                                </Slider>
                                {/* <img src={Image2} alt="" /> */}
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                        <div className="list-info">
                        <h3 className='list-info__name-product'>
                            {nameProduct}
                        </h3>
                        <div className='list-info__price'>
                            {salePriceProduct && <p className='list-info__price-oldPrice'>
                                ${salePriceProduct}
                            </p>}
                            
                            <p className='list-info__price-currentPrice'>
                                ${currentPriceProduct}
                            </p>
                        </div>
                        <div className="list-info__desc">
                            <p className='list-info__desc-title'>
                                {descriptionTitle}
                            </p>
                            <ul className='list-info__desc-description'>
                                {description.map( item => (
                                    <li key={uuidv4()}>
                                        {item}
                                    </li>

                                ) )}
                                <li>
                                    {composition}
                                </li>
                            </ul>
                        </div>

                        <div className="list-info__height">
                            <span className='list-info__height-text list-text'>Height: </span>
                            <div className='list-height'>
                                {height.map( item => (
                                    <div key={uuidv4()} className='item-height'>{item}</div>
                                ) )}
                            </div>
                        </div>

                        <div className="list-info__age">
                            <span className='list-info__age-text list-text'>Age: </span>
                            <select name="" id="">
                                {age.map( item => (
                                    <option key={uuidv4()} value={item}>{item}</option>
                                ) )}
                            </select>
                        </div>

                        <div className='list-info__color'>
                            <span className='list-info__color-text list-text'>Color: </span>
                            <div className="list-color">
                                {ListColor.map( item => (
                                    <div key={uuidv4()} className='color-item' style={{backgroundColor:item.color}} ></div>
                                ) )}
                            </div>
                        </div>

                        <div className="list-add">
                            <div className='quantity-product'>
                                <Button className="btn-overwrite" onClick={() => setCount(prev => prev - 1 )}>-</Button>
                                <span>{count}</span>
                                <Button className="btn-overwrite" onClick={() => setCount(prev => prev + 1 )}>+</Button>
                            </div>

                            <Button>Add To Cart</Button>
                        </div>

                        <div className='list-info__category'>
                            <div className='list-info__category-tags'>
                                Tags: 
                                <div className='tags-list'>
                                    {Tags.map( item => (
                                        <div key={uuidv4()} className="tags-item">
                                            {item}
                                        </div>
                                    ) )}
                                </div>
                            </div>
                            <div className='list-info__category-cate'>
                                Category:
                                <div className='cate-list'>
                                    {categories.map( item => (
                                        <div  className="cate-item" key={uuidv4()}>
                                            {item}
                                        </div>
                                    ) )}
                                </div>
                            </div>
                            <div className='list-info__category-SKU'>
                                {SKU}
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>


                </div>
            </div>
        </PopUpWrapper>
    )
}

export default memo(PopUp);
