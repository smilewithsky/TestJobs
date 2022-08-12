import React from 'react';
import { TextHoverWrapper } from './styled'
function TextHover({children}){
    return (
        <TextHoverWrapper>
            <span>{children}</span>
        </TextHoverWrapper>
    )
}

export default TextHover;
