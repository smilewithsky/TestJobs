import styled from 'styled-components'
import { device } from '../../Contain'
export const OurProductWrapper = styled.div`
    height: auto;
    & > .container{
        @media ${device.mobileL}{
            padding: 0 3rem 2rem;
        }
    }
    & > div {
        margin-bottom: 8rem;

        @media ${device.tablet}{
            margin-bottom: 6rem
        }

        @media ${device.tablet}{
            margin-bottom: 6rem
        }
    }

    & .sep{
        margin-bottom: 11rem;
    }

    & .mbt-11{
        margin-bottom: 11rem;
    }
`