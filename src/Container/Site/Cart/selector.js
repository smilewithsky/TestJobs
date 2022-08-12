import { createSelector } from 'reselect'

const SiteReducer = (state) => state.SiteReducer

export const isOpenCart = createSelector(
    SiteReducer,
    (state) => state.isOpenCart
)

export const selectListCart = createSelector(
    SiteReducer,
    (state) => state.listCart
)