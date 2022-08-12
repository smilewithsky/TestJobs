import styled from 'styled-components'
import { device } from '../../../Contain'
export const CompareWrapper = styled.div`
    height: auto;
    margin-bottom: 4rem;

    & .heading{
        font-size: 5.5rem;
        text-align: center;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        
        @media ${device.laptop}{
            font-size: 4.7rem;
        }

        @media ${device.tablet}{
            font-size: 3.3rem;
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
                background: var(--hover-color);
                z-index: -1;
            }


        }

    }

    & .desc{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1.5rem;

        @media ${device.laptop}{
            font-size: 1.3rem;
        }
    }
`