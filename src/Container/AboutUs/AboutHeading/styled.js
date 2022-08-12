import styled from 'styled-components'
import { device } from '../../../Contain'
export const AboutHeadingWrapper = styled.div`
    height: auto;

    & .heading{
        font-size: 11rem;
        margin-bottom: 1.5rem;

        @media ${device.tablet}{
            font-size: 7rem;
        }
    }

    & .desc{
        font-size: 3rem;
        margin-bottom: 1.5rem;

        @media ${device.tablet}{
            font-size: 2.4rem;
        }

        & span{
            position: relative;

            &::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: 20%;
                width: calc(100% + 0.3em);
                height: 15%;
                margin-left: -0.15em;
                transform: skew(-12deg) translateX(0);
                background: #ebc989;
                z-index: -1;
            }
        }
    }
`