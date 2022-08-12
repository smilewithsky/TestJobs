import { ADD_TO_CART } from './Contains'

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}