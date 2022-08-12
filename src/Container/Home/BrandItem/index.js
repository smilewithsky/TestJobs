import React from 'react';
import { BrandItemWrapper } from './styled'
function BrandItem({brandItem}){
    // console.log("brandItem" ,brandItem);

    return (
        <BrandItemWrapper>
            <img src={brandItem} alt="" />
        </BrandItemWrapper>
    )
}

export default BrandItem;
