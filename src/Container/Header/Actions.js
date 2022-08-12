import { CLOSE_CART , CLOSE_LOGIN , CLOSE_MENU , CLOSE_SEARCH, OPEN_CART , OPEN_LOGIN , OPEN_MENU, OPEN_SEARCH } from './Contains'

export const openCart = () => {
    return {
        type: OPEN_CART
    }
}

export const openSearch = () => {
    return {
        type: OPEN_SEARCH
    }
}

export const closeSearch = () => {
    return {
        type: CLOSE_SEARCH
    }
}

export const openLogin = () => {
    return {
        type: OPEN_LOGIN
    }
}

export const openMenu = () => {
    return {
        type: OPEN_MENU
    }
}


export const closeMenu = () => {
    return {
        type: CLOSE_MENU
    }
}