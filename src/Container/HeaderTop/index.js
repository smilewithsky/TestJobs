import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { HeaderTopWrapper } from './styled'

import Logo from './../Images/Logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from './../Header/Actions'


function HeaderTop(){
    const dispatch = useDispatch()
    const handleOpenMenu = () => {
        dispatch(openMenu())
    }

    return (
        <HeaderTopWrapper>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-10 col-lg-12">
                        <h1 className="logo">
                            <NavLink to="/"> <img src={Logo} alt="" /></NavLink>
                        </h1>
                    </div>
                    <div className="col-2 col-lg-0">
                        <div className="navbar">
                            <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderTopWrapper>
    )
}

export default HeaderTop;
