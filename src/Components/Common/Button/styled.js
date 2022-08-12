import styled from 'styled-components'
import { device } from '../../../Contain'
export const ButtonWrapper = styled.button`
    height: auto;
    background: ${props => props.backGround ? props.backGround : "#2a2b39" };
    padding: 1rem 2rem;
    font-size: 1.7rem;
    display: inline-block;
    cursor: pointer;
    color: ${props => props.color ? props.color : "white"};
    border-radius: 4px;
    outline: none;
    border: none;
    opacity: 1;

    &:disabled{
        opacity: 0.6;
    }

    &:enabled{
        opacity: 1;
    }

    & svg {
        margin-right: 1.5rem;
    }

    @media ${device.tablet}{
        font-size: 1.5rem;
    }

    &:hover{
        opacity: 0.8;
    }
`