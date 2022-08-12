import { INCREMENT_QUANTITY , DECREMENT_QUANTITY, DELETE_CART_ITEM } from './Constains'

export const incrementQuantity = (payload) => {
    return {
        type: INCREMENT_QUANTITY,
        payload
    }
}

export const decrementQuantity = (payload) => {
    return {
        type: DECREMENT_QUANTITY,
        payload
    }
}

export const deleteCartItem = (payload) => {
    return {
        type: DELETE_CART_ITEM,
        payload
    }
}