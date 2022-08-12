import { listProduct , bestseller } from './../data'

const initialState = {
    listProduct: listProduct,
    bestseller: bestseller
}

const Reducer = ( state = initialState , actions ) => {
    switch(actions.type){
        default: return state
    }
}

export default Reducer