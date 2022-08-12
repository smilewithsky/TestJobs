import React from 'react';
import { ButtonWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button({backGround , disabled , onClick , children , color , className , icon}){
    return (
        <ButtonWrapper disabled={disabled} backGround={backGround} onClick={onClick} color={color} className={className} >
            {icon ? <FontAwesomeIcon icon={icon} /> : ""}
            {children}
        </ButtonWrapper>
    )
}

export default Button;
