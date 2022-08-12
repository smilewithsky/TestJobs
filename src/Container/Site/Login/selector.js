import { createSelector } from 'reselect'

const SiteReducer = (state) => state.SiteReducer

export const isOpenLogin = createSelector(
    SiteReducer,
    (state) => state.isOpenLogin
)