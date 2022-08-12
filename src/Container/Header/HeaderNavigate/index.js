import React from 'react';
import { NavLink } from 'react-router-dom'
import { HeaderNavigateWrapper } from './styled'
function HeaderNavigate(){
    return (
        <HeaderNavigateWrapper>
            <div className="list-icon">
                <NavLink to = "/">
                    Home
                </NavLink>
                <NavLink to = "/OurProducts">
                    Our Products
                </NavLink>
                <NavLink to = "/AboutUs">
                    About Us
                </NavLink>
                <NavLink to = "">
                    Blog
                </NavLink>
                <NavLink to = "">
                    Client Center
                </NavLink>
                <NavLink to = "">
                    Fag
                </NavLink>
            </div>
        </HeaderNavigateWrapper>
    )
}

export default HeaderNavigate;
