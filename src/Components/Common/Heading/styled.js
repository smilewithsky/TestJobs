import styled from 'styled-components'
import { device } from '../../../Contain'
export const HeadingWrapper = styled.div`
    height: auto;
    text-align: ${props => props.align ? props.align : "left"};

    & .heading-text{
        margin-bottom: 1.5rem;
        font-size: 5.5rem;
        color: var(--bold-color);

        @media ${device.laptop}{
            font-size: 4.7rem;
        }

        @media ${device.tablet}{
            font-size: 3.3rem;
        }
    }

    & .title-text{
        color: #ebc989;
        font-size: 1.4rem;
        font-weight: 600;
    }

    & .desc-text{
        color: #373f4b;
        font-size: 2rem;
        margin-bottom: 1.5rem;

        @media ${device.laptop}{
            font-size: 1.7rem;
        }

        @media ${device.tablet}{
            font-size: 1.4rem;
        }
    }
`