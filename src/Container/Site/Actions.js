import { OPEN_LOGIN , CLOSE_LOGIN , CLOSE_CART , OPEN_CART } from './Contains'

export const closeCart = () => {
    return {
        type: CLOSE_CART
    }
}

export const openCart = () => {
    return {
        type: OPEN_CART
    }
}

export const closeLogin = () => {
    return {
        type: CLOSE_LOGIN
    }
}