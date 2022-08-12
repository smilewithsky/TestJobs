import { createSelector } from 'reselect'
const SiteReducer = (state) => state.SiteReducer

export const isOpenMenu = createSelector(
    SiteReducer,
    (state) => state.isOpenMenu
)

export const selectListCart = createSelector(
    SiteReducer,
    (state) => state.listCart
)

export const selectListFavor = createSelector(
    SiteReducer,
    (state) => state.listFavor
)