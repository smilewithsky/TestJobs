import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import HeaderIcon from './HeaderIcon';
import Logo from './../Images/Logo.png'
import HeaderNavigate from './HeaderNavigate';
import { HeaderWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { openMenu } from './Actions';
function Header(){
    const [ isOpen , setIsOpen ] = useState(false)
    window.addEventListener("scroll" , function() {
        // console.log("window" , window.scrollY);
        if(window.scrollY > 150){
            setIsOpen(true)
        }
        else{
            setIsOpen(false)
        }
    })

    const dispatch = useDispatch()

    const navigation = useNavigate()

    const handleChangeLink = () => {
        navigation('/');
    }

    const handleOpenMenu = () => {
        dispatch(openMenu())
    }

    return (
        <HeaderWrapper className='show'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-9">
                        <div className="row align-items-center">
                            <div className="col-0 col-lg-2 col-xl-2">
                                <img className='logo' src={Logo} alt="" onClick={handleChangeLink} />
                            </div>
                            <div className="col-0 col-lg-10 col-xl-10">
                                <HeaderNavigate />
                            </div>

                            <div className="col-12 col-xl-0">
                                <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <HeaderIcon />
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default memo(Header);
