import React from 'react';
import { ColorItemWrapper } from './styled'
function ColorItem({colorItem}){
    // console.log("colorItem ",colorItem);
    const { text , color} = colorItem
    
    return (
        <ColorItemWrapper color={color}>
            <div className='color-item'>
                <p className='color-item__text'>{text}</p>
                <div className='color-item__color'>
                    
                </div>
            </div>
        </ColorItemWrapper>
    )
}

export default ColorItem;
