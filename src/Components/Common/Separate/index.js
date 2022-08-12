import React from 'react';
import Sep from './../../../Container/Images/babyshop-sep1.png'
import { SeparateWrapper } from './styled'
function Separate({text , marginBottom , align}){
    return (
        <SeparateWrapper align={align}>
            <img src={Sep} alt="" />
            {text && <div className='text-separate'>{text.map( itemText => <p>{itemText}</p> )}</div>}
        </SeparateWrapper>
    )
}

export default Separate;
