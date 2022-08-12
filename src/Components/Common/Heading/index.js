import React from 'react';
import { HeadingWrapper } from './styled'
function Heading({heading , desc , align , className , title}){
    return (
        <HeadingWrapper className={className} align={align}>
            {title && <p className='title-text'>{title}</p>}
            {heading && <h3 className='heading-text'>{heading}</h3>}
            {desc && <p className='desc-text'>{desc}</p>}
        </HeadingWrapper>
    )
}

export default Heading;
