import styled from 'styled-components'
import { device } from '../../../Contain'
export const SeparateWrapper = styled.div`
    height: auto;

    padding-top: 8rem;
    padding-bottom: 8rem;

    @media ${device.tablet}{
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    & img{
        width: 100%;
    }
`