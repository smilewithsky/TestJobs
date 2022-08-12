import React from 'react';
import Sep from './../../Images/AboutUs/babyshop-about-pic5.webp'

import { SeparateWrapper } from './styled'
function Separate(){
    return (
        <SeparateWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={Sep} alt="" />
                    </div>
                </div>
            </div>
        </SeparateWrapper>
    )
}

export default Separate;
