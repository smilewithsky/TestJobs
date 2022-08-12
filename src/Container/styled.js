import styled from 'styled-components'
import { device } from '../Contain'
export const BabyShopWrapper = styled.div`
    height: auto;

    /* & .footer{
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: -1;
    } */

    & .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    --bs-gutter-x: 1.5rem !important;
    --bs-gutter-y: 0 !important;
    width: 100% !important;
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
    padding-left: calc(var(--bs-gutter-x) * .5) !important;
    margin-right: auto !important;
    margin-left: auto !important;
    overflow: hidden !important;
}

`