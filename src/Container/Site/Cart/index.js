import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isOpenCart, selectListCart } from './selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { CartWrapper } from './styled'
import { closeCart } from '../Actions';
import Button from '../../../Components/Common/Button';
import { decrementQuantity, deleteCartItem, incrementQuantity } from './Actions';
function Cart() {
    const isOpen = useSelector(isOpenCart);
    const listCart = useSelector(selectListCart);
    console.log("listCart", listCart);
    const dispatch = useDispatch()
    const handleCloseCart = () => {
        console.log("123");

        dispatch(closeCart())
    }

    const handleDeleteItem = (id) => {
        console.log("id ", id);
        dispatch(deleteCartItem(id))
    }

    const handleIncreaseQuantity = (id) => {
        console.log("id ", id);
        dispatch(incrementQuantity(id))
    }

    const handleDecreaseQuantity = (id) => {
        console.log("id ", id);
        dispatch(decrementQuantity(id))
    }

    if (!isOpen) {
        return ""
    }
    return (
        <CartWrapper>
            <div className="close" onClick={handleCloseCart}>
                <FontAwesomeIcon icon={faXmark}  />
            </div>
            <h2>CART</h2>

            {listCart.length ?
                <div className='list-cart'>
                    {listCart.map(item => (
                        <div className="cart-item">
                                <div className="row">
                                    <div className="col-12 col-lg-10">
                                        <div className="contain">
                                        <img src={item.image} alt="" />
                                        <div className='cart-item__content'>
                                            <NavLink to="/" className='cart-item__content-name'>{item.name}</NavLink>
                                            <p className='cart-item__content-height'>Height: {item.height}</p>
                                            <p className='cart-item__content-age'>
                                                Age: {item.age}
                                            </p>
                                            <p className='cart-item__content-color'>
                                                Color: {item.color.text}
                                            </p>
                                            <p className='cart-item__content-price'>
                                                Price: <span>${item.price}.00</span>
                                            </p>
                                        </div>
                                       </div>
                                    </div>

                                    <div className="col-12 col-lg-2">
                                        <p className='contain-sum__price'>
                                            ${item.quantity * item.price}.00
                                        </p>
                                    </div>
                                </div>
                            <div className='nav'>
                                <div className="quantity">
                                    <Button className="btn-overwrite" onClick={() => handleDecreaseQuantity(item.idCartItem)}>-</Button>
                                    <span>{item.quantity}</span>
                                    <Button className="btn-overwrite" onClick={() => handleIncreaseQuantity(item.idCartItem)}>+</Button>
                                </div>
                                <div className="delete-item" onClick={() => handleDeleteItem(item.idCartItem)}>
                                    <FontAwesomeIcon icon={faTrash} /> Remove
                                </div>
                            </div>
                        </div>
                    ))}
                </div> :
                <div className='cart-empty'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p className='text-empty'>Your cart is currently empty.</p>
                </div>
            }

            <div className='logic'>
                <div className='logic-item'>
                    <p className='subtotal'>Subtotal:</p>
                    <p className='subtotal-number'>${listCart.reduce((total, item) => {
                        return total + (item.price * item.quantity)
                    }, 0)}.00</p>
                </div>
                <div className='logic-item'>
                    <p className='total'>Total:</p>
                    <p className='total-number'>${listCart.reduce((total, item) => {
                        return total + (item.price * item.quantity)
                    }, 0)}.00</p>
                </div>
            </div>
        </CartWrapper>
    )
}

export default Cart;
