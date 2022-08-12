import styled from 'styled-components'
import { device } from '../../../../Contain'
export const ColorItemWrapper = styled.div`
    height: auto;
    position: relative;
    border: 1px solid #ccc;
    padding: 2px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   

    &:hover{
        border: 1px solid lightblue;
    }

    & .color-item{
        @media ${device.laptop}{
            width: 16px;
            height: 16px;
        }
        width: 26px;
        height: 26px;
        position: relative;
        &__text{
            transition: all ease-in-out 0.35s;
            bottom: 100%;
            color: white;
            background-color: black;
            position: absolute;
            padding: 0.4rem;
            visibility: hidden;
            width: 38px;
            opacity: 0;
            &::after{
                content: "";
                position: absolute;
                bottom: -80%;
                left: 0;
                z-index: 1;

                width: 100%; 
                height: 0; 
                border-left: 18px solid transparent;
                border-right: 18px solid transparent;
                
                border-top: 20px solid black;
            }
        }

        &:hover > .color-item__text{
            visibility: visible;
            opacity: 1;
        }
        
        &__color{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            margin-right: 0.5rem;
            background-color: ${props => props.color};
        }
    }
`