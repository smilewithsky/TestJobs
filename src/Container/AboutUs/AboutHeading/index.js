import React from 'react';
import { AboutHeadingWrapper } from './styled'
function AboutHeading(){
    return (
        <AboutHeadingWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 offset-lg-3 text-center">
                        <h3 className='heading'>Hello.</h3>
                        <p className='desc'>
                            Welcome in our <span>child's world.</span> All our products are made from generations with passion.
                        </p>
                    </div>
                </div>
            </div>
        </AboutHeadingWrapper>
    )
}

export default AboutHeading;
