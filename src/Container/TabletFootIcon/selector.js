import { createSelector } from 'reselect'

const siteReducer = (state) => state.SiteReducer
const homeReducer = (state) => state.HomeReducer

export const selectListCart = createSelector(
    siteReducer,
    (state) => state.listCart
)

export const selectIsOpenCart = createSelector(
    siteReducer,
    (state) => state.isOpenCart
)

export const selectIsOpenLogin = createSelector(
    siteReducer,
    (state) => state.isOpenLogin
)

export const selectListFavor = createSelector(
    siteReducer,
    (state) => state.listFavor
)   