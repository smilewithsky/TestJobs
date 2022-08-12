import React from 'react';
import { SiteMenuWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faUser , faHeart , faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenMenu, selectListCart, selectListFavor } from './selector';
import { closeMenu, openLogin, openMenu } from '../../Header/Actions';
import { openCart } from '../Actions';

function SiteMenu(){
    const dispatch = useDispatch()
    const isOpen = useSelector(isOpenMenu)
    const selectCart = useSelector(selectListCart)
    const selectFavor = useSelector(selectListFavor)
    console.log("selectCart ",selectCart);

    // const sumQuantity = selectCart.reduce()

    const sumQuantity = selectCart.reduce( (total , item) => {
        return total + ( item.quantity )
    } , 0 )

    const sumPrice = selectCart.reduce( (total , item) => {
        return total + ( item.quantity * item.price )
    } , 0 )

    console.log("sumQuantity ",sumQuantity);

    if(!isOpen){
        return ""
    }

    const handleCloseMenu = () => {
        dispatch(closeMenu())
    }

    const handleOpenLogin = () => {
        dispatch(openLogin())
    }

    const handleOpenCart = () => {
        dispatch(openCart())
    }

    return (
        <SiteMenuWrapper>
            <div className='close'>
                <FontAwesomeIcon icon={faXmark} onClick={handleCloseMenu} />
            </div>
            <div className="site-cart__icon">
                <li>
                    <FontAwesomeIcon icon={faUser} onClick={() => handleOpenLogin()} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faHeart}  />
                    <div className='quantity'>{selectFavor.length}</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCartShopping} onClick={handleOpenCart} />
                    <div className='quantity'>{sumQuantity}</div>
                    <div className='sum-price'>
                        ${sumPrice},00
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSearch} />
                </li>
            </div>

            <div className='content'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/OurProduct">Our Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AboutUse">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ClientCenter">Client Center</NavLink>
                    </li>
                    <li>
                        <NavLink to="/FAQ">FAQ</NavLink>
                    </li>
                </ul>

                <div className='content-below'>
                    <div>
                        <NavLink to="/">Our Story</NavLink>
                        <NavLink to="/">Useful info</NavLink>
                        <NavLink to="/">Help</NavLink>
                    </div>
                </div>
            </div>
        </SiteMenuWrapper>
    )
}

export default SiteMenu;
