import React from 'react';
import { BrandFooterItemWrapper } from './styled'
function BrandFooterItem({brandFooterItem}){
    const { text , image } = brandFooterItem
    // console.log("text ",text , "image ", image);
    return (
        <BrandFooterItemWrapper>
            <img src={image} alt="" />
            <p>{text}</p>
        </BrandFooterItemWrapper>
    )
}

export default BrandFooterItem;
