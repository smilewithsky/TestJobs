import { createSelector } from 'reselect'

const listProductReducer = (state) => state.HomeReducer;

export const selectListProduct = createSelector(
    listProductReducer,
    (state) => state.listProduct
)

export const listProductRelate = createSelector(
    listProductReducer,
    (state) => state.bestseller
)