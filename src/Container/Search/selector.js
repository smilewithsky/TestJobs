import { createSelector } from 'reselect'

const HomeReducer = (state) => state.HomeReducer

export const selectListProduct = createSelector(
    HomeReducer,
    (state) => state.listProduct
)

const SiteReducer = (state) => state.SiteReducer;

export const selectIsOpenSearch = createSelector(
    SiteReducer,
    (state) => state.isOpenSearch
)