import { ADD_LIST_FAVOR } from "../Common/Product/Constain"
import { CLOSE_CART, CLOSE_MENU, CLOSE_SEARCH, OPEN_LOGIN, OPEN_MENU, OPEN_SEARCH } from "../Header/Contains"
import { ADD_TO_CART } from "../OurProduct/Detail/Contains"
import { DECREMENT_QUANTITY, DELETE_CART_ITEM, INCREMENT_QUANTITY } from "./Cart/Constains"
import { CLOSE_LOGIN, OPEN_CART } from "./Contains"

const initialState = {
    isOpenCart: false,
    isOpenLogin: false,
    isOpenSearch: false ,
    isOpenMenu: false,
    listFavor: [],
    listCart: []
}
const reducer = ( state = initialState , actions ) => {
    switch(actions.type){
        case ADD_TO_CART :{
            return {
                ...state ,
                listCart: [...state.listCart , actions.payload],
                isOpenCart: true,
            }
        }
        case OPEN_LOGIN: {
            return {
                ...state , 
                isOpenLogin: true,
                isOpenSearch: false ,
                isOpenMenu: false,
                isOpenCart: false,
            }
        }
        case OPEN_MENU: {
            return {
                ...state , 
                isOpenLogin: false,
                isOpenSearch: false ,
                isOpenMenu: true,
                isOpenCart: false,
            }
        }
        case OPEN_CART: {
            // console.log("openCart ");
            return {
                ...state , 
                isOpenCart: true,
                isOpenLogin: false,
                isOpenSearch: false ,
                isOpenMenu: false,
            }
        }
        case CLOSE_LOGIN: {
            return {
                ...state , 
                isOpenLogin: false,
                isOpenCart: false,
                isOpenSearch: false ,
                isOpenMenu: false,
            }
        }
        case CLOSE_MENU: {
            return {
                ...state , 
                isOpenMenu: false
            }
        }
        case CLOSE_CART: {
            return {
                ...state , 
                isOpenCart: false
            }
        }

        case OPEN_SEARCH: {
            return {
                ...state , 
                isOpenSearch: true
            }
        }

        case CLOSE_SEARCH : {
            return {
                ...state , 
                isOpenSearch: false
            }
        }

        case DELETE_CART_ITEM: {
            const newList = [...state.listCart].filter( item => item.idCartItem !== actions.payload )

            return {
                ...state,
                listCart: newList
            }
        }

        case DECREMENT_QUANTITY: {
            const newList = [...state.listCart].map( item => {
                if(item.idCartItem === actions.payload){
                    if(item.quantity < 1){
                        return item
                    }else
                    return {
                        ...item ,
                        quantity: item.quantity - 1
                    }
                }
                else return item
            } )
            return {
                ...state,
                listCart: newList
            }
        }

        case INCREMENT_QUANTITY: {
            const newList = [...state.listCart].map( item => {
                if(item.idCartItem === actions.payload){
                    return {
                        ...item ,
                        quantity: item.quantity + 1
                    }
                }
                return item
            } )
            return {
                ...state,
                listCart: newList
            }
        }

        case ADD_LIST_FAVOR: {
            console.log("vaof dday");
            const check = [...state.listFavor].includes( actions.payload );
            console.log("check ",check);
            if(check){
                return {
                    ...state ,
                    listFavor: [...state.listFavor].filter( item => item !== actions.payload )
                }
            }
            else{
                console.log("cũng vào đây");
                console.log("state.listFavor" , state.listFavor);
                return {
                    ...state,
                    listFavor: [...state.listFavor , actions.payload]
                }
            }
        }

        default: return state
    }
}

export default reducer