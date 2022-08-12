import styled from 'styled-components'
import { device } from '../../../Contain'
export const BottomWrapper = styled.div`
    height: auto;
    padding: 4rem 0;

    & > div:first-child{
        margin-bottom: 8rem;
    }

    @media ${device.tablet}{
        font-size: 1.3rem;
    }

    & .btn-overwrite{
        text-align: center;
        justify-content: center;
        width: 100%;
        display: flex;
        padding: 4rem 3rem;
        font-size: 1.7rem;
        color: white;
        & span{
            opacity: 0.6;
        }
        & u{
            opacity: 1;
            text-decoration: underline;
            color: white;
            opacity: 1;
            margin-bottom: 0;
            text-decoration: none;  
        }
        
        @media ${device.tablet}{
            font-size: 1.3rem;
        }
        &:hover{
            background-color: var(--hover-color);
        }
    }
`