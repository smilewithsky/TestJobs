import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterLowWrapper } from './styled'
function FooterLow(){
    return (
        <FooterLowWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <p>
                            © 2022 Betheme by <NavLink to="/"> Muffin group</NavLink> | All Rights Reserved | Powered by <NavLink to="/">WordPress</NavLink>
                        </p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <NavLink to="">Terms and conditions</NavLink>
                        <NavLink to=""> Privacy policy</NavLink>
                        <NavLink to="" >Cookies</NavLink>
                    </div>
                </div>
            </div>
        </FooterLowWrapper>
    )
}

export default FooterLow;
