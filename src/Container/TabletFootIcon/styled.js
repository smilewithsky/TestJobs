import styled from 'styled-components'
import { device } from '../../Contain'
export const TabletFooterIconWrapper = styled.div`
    height: auto;
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    background: white;
    z-index: 999999999;

    & .container{
        overflow: hidden;
    }

    & .row.no-gutters > div{
        padding-left: 0;
        padding-right: 0;
    }

    & .item{
        cursor: pointer;
        position: relative;
        text-align: center;
        padding: 2rem 1.5rem;
        display: flex;
        justify-content: center;

        & .sum{
            height: 18px;
            color: white;
            width: 18px;
            line-height: 18px;
            /* padding: 0.4rem 0.8rem; */
            margin-top: -10px;
            border-radius: 50%;
            margin-right: -3px;
            background-color: var(--hover-color);
        }
    }

    & svg{
        width: 40px;
        height: 30px;

        @media ${device.mobileL}{
            width: 30px;
            height: 26px;
        }
    }

    @media ${device.tablet}{
        display: block;
    }

    @media ${device.mobileL}{
        & .item{
        text-align: center;
        padding: 1.6rem 0;
        display: flex;
        justify-content: center;

        & .sum{
            height: 18px;
            color: white;
            width: 18px;
            line-height: 18px;
            /* padding: 0.4rem 0.8rem; */
            margin-top: -10px;
            border-radius: 50%;
            margin-right: -3px;
            background-color: var(--hover-color);
        }
    }
    }
`