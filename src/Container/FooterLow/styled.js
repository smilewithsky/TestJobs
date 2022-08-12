import styled from 'styled-components'
import { device } from '../../Contain'
export const FooterLowWrapper = styled.div`
    height: auto;
    padding: 3rem 0 2rem;
    text-align: center;
    color: #444b57;
    font-size: 1.7rem;
    background-color: #f6f7f9;
    border-top: 1px solid #dddee0;
    @media ${device.tablet}{
        font-size: 1.3rem;
        padding-bottom: 10rem;
    }

    & a{
        color: #444b57;
        text-decoration: none;
        transition: 0.35s ease-in-out;

        &:hover{
            text-decoration: underline;
        }
    }
`