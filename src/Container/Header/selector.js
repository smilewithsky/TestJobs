import { createSelector } from 'reselect'

const siteReducer = (state) => {
    // console.log("state ",state);
    return state.SiteReducer
};

export const SelectCart = createSelector(
    siteReducer,
    (state) => state.listCart
)

export const SelectFavor = createSelector(
    siteReducer,
    (state) => state.listFavor
)
