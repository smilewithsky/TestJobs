import styled from 'styled-components'
import { device } from '../../../Contain'
export const StatusWrapper = styled.div`
    height: auto;

    * .name{
        font-size: 1.5rem;
        font-weight: bold;
        @media ${device.tablet}{
            text-align: center;
            margin-bottom: 1.5rem;
        }
    }

    & .number{
        font-size: 4.7rem;
        font-weight: bold;
        margin-bottom: 5px;

        @media ${device.tablet}{
            font-size: 4.1rem;
            text-align: center;
        }
    }

    & .title{
        @media ${device.tablet}{
            text-align: center;
        }
        font-size: 1.7rem;
    }
`