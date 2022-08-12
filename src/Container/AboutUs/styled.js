import styled from 'styled-components'
import { device } from '../../Contain'
export const AboutUsWrapper = styled.div`
    height: auto;

    & .container{
        @media ${device.tablet}{
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }
`