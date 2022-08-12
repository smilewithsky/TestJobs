import React from 'react';
import { HeaderIconWrapper } from './styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faHeart , faMagnifyingGlass , faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SelectCart, SelectFavor } from './../selector'
import { openCart, openLogin, openSearch } from '../Actions';

function HeaderIcon(){
    const dispatch = useDispatch()

    const selectCart = useSelector(SelectCart)
    const selectFavor = useSelector(SelectFavor)

    console.log("selectCart ",selectCart);

    const sumPrice = selectCart.reduce( (total , item) => {
        return total + ( item.price * item.quantity ) 
    } ,0 )

    const sumCart = selectCart.reduce( ( value , item ) => {
        return value + item.quantity
    } ,0 )

    console.log('Sumcart ',sumCart);

    // console.log("sumPrice ",sumPrice);

    const handleOpenLogin = () => {
        dispatch(openLogin())
    }

    const handleOpenCart = () => {
        console.log("openCart ", openCart);
        dispatch(openCart())
    }

    const handleOpenSearch = () => {
        dispatch(openSearch())
    }


    return (
        <HeaderIconWrapper>
            <div className='list-icon'>
                <p className="header-item" to="">
                    <FontAwesomeIcon icon={faUser} onClick={(e) => handleOpenLogin(e)} />
                    {/* Login */}
                </p>
                <p className="header-item" to="">
                    <p className='sum'>
                        {selectFavor.length}
                    </p>
                    <FontAwesomeIcon icon={faHeart} /> 
                    {/* yêu thích */}
                </p>
                <p className="header-item" to="">
                    <p className='sum'>
                        {sumCart}
                    </p>
                    <FontAwesomeIcon icon={faCartShopping} onClick={(e) => handleOpenCart(e)} />
                    {/* Shopping */}
                </p>
                <p className='sum-price'>
                    $ {sumPrice}.00
                </p>
                <p className="header-item" to="" onClick={(e) => handleOpenSearch(e)} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {/* search */}
                </p>
            </div>
        </HeaderIconWrapper>
    )
}

export default HeaderIcon;
