import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import ColorItem from './ColorItem';
import { ProductItemWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faLink , faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import PopUp from './PopUp';
import { useDispatch } from 'react-redux'

import { useState } from 'react';
import { addListFavor } from './Actions';
function ProductItem({productItem}){
    // console.log("productItem ",productItem);
    const dispatch = useDispatch()
    const [isPopUpOpen , setIsPopUpOpen] = useState(false)
    const { idProduct,
        nameProduct,
        imageProduct,
        salePriceProduct,
        currentPriceProduct,
        descriptionTitle,
        description,
        composition,
        age,
        height,
        size,
        ListColor,
        categories,
        Tags,
        SKU,
        isSale } = productItem
    
    const navigation = useNavigate()
    const handleAddHeart = (id) => {
        console.log("id" ,id);
        dispatch(addListFavor(id))
    }
    const handleChange = (idProduct) => {
        navigation(`/OurProduct/${idProduct}`)
    }
    const firstImage = imageProduct[0]
    const secondImage = imageProduct[1]
    return (
        <ProductItemWrapper isSale={isSale}>
            <div className="contain">
                <div className='image'>
                    <div className='sale'>{isSale ? isSale : ""}</div>
                    <img className='image-1' src={firstImage} alt="" />
                    <img className='image-2' src={secondImage} alt="" />
                    <div className='hover-image'>
                        <p>
                            <FontAwesomeIcon className='link-icon' icon={faLink} onClick={() => handleChange(idProduct)} />
                        </p>
                        <p>
                            <FontAwesomeIcon className='heart-icon' icon={faHeart} onClick={() => handleAddHeart(idProduct)} />
                        </p>
                        <p>
                            <FontAwesomeIcon className='view-icon' icon={faUsersViewfinder} onClick={() => setIsPopUpOpen(true)} />
                        </p>
                    </div>
                </div>
                <div className='product-item__info'>
                    <h3 className='product-item__info-name'>{nameProduct}</h3>
                    <div className='list-color'>
                        {ListColor.map( colorItem => (
                            <ColorItem key={uuidv4()} colorItem={colorItem}></ColorItem>
                        ) )}
                    </div>
                    <p className='product-item__info-price'>
                        <div className="product-item__info-oldPrice">${salePriceProduct ? salePriceProduct : ""}</div>
                        <div className="product-item__info-currentPrice">${currentPriceProduct}</div>
                    </p>
                </div>
                {isPopUpOpen && <PopUp item={productItem} setIsPopUpOpen={setIsPopUpOpen} />}
            </div>

        </ProductItemWrapper>
    )
}

export default ProductItem;
