import styled from 'styled-components'
import { device } from '../../../Contain'
export const BrandFooterItemWrapper = styled.div`
    height: auto;
    display: flex;
    align-items: center;

    @media ${device.laptop}{
        flex-direction: column;
        justify-content: center;
    }

    & img{
        @media ${device.laptop}{
            margin-bottom: 1rem;
        }

        width: 50px;
    }

    & p{
        @media ${device.laptop}{
            padding-top: 1rem;
            padding-left: 0;
            margin-bottom: 1.5rem;
        }

        font-weight: bold;
        padding-left: 2rem;
        color: #171b20;
        font-size: 1.4rem;
    }
`