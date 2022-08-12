import React from 'react';
import { TabletFooterIconWrapper } from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping , faHeart , faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpenCart, selectIsOpenLogin, selectListCart, selectListFavor } from './selector';
import { openCart, openLogin } from '../Header/Actions';

function TabletFooterIcon(){
    const selectCart = useSelector(selectListCart)
    const selectFavor = useSelector(selectListFavor)

    console.log("selectFavor ",selectFavor);

    const dispatch = useDispatch()
    const handleOpenLogin = () => {
        dispatch(openLogin())
    }

    const handleOpenCart = () => {
        dispatch(openCart())
    }

    return (
        <TabletFooterIconWrapper>
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-3">
                        <div className='item'>
                            <FontAwesomeIcon icon={faUsersViewfinder} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='item'>
                            <FontAwesomeIcon icon={faUser} onClick={handleOpenLogin} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='item'>
                            <FontAwesomeIcon icon={faCartShopping} onClick={handleOpenCart} />
                            <span className='sum'>{selectCart.length}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='item'>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='sum'>{selectFavor.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </TabletFooterIconWrapper>
    )
}

export default TabletFooterIcon;
