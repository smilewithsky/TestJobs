import { createSelector } from 'reselect'

const HomeReducerSelect = (state) => state.HomeReducer;

export const listProductSelector = createSelector(
    HomeReducerSelect,
    (state) => state.listProduct
)

export const listProductSeller = createSelector(
    HomeReducerSelect,
    (state) => state.bestseller
)