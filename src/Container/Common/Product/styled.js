import styled from 'styled-components'
import { device } from '../../../Contain'
export const ProductItemWrapper = styled.div`
    cursor: pointer;
    @media ${device.tablet}{
        margin-bottom: 3rem;
    }

    & a{
        height: auto;
        text-align: center;
        text-decoration: none;
        color: #373f4b;

        @media ${device.laptop}{

        }
    }

    & .product-item__info-name{
            text-align: center;
        }

    &:hover .image-1 {
        display: none;
    }

    &:hover .image-2 {
        display: block;
    }

    & .image-1 {
        display: block;
    }

    & .image-2 {
        display: none;
    }
    & .image{
        @media ${device.tablet}{
            margin-bottom: 1rem;
        }

        overflow: hidden;
        position: relative;
        width: 100%;

        &:hover .hover-image{
            transform: translateY(0%);
        }

        & img{
            object-fit: cover;
            width: 100%;
            height: 330px;
        }
    
        /* & .image-1{
            width: 100%;
            display: block;
        }
    
        & .image-2{
            width: 100%;
            display: none;
        } */



        & .hover-image{
            transition: all ease-in-out 0.35s;
            transform: translateY(100%);
            position: absolute;
            bottom: 0;
            left: 0;
            height: 60px;
            display: flex;
            justify-content: space-around;
            width: 100%;
            background-color: white;
            align-items: center;

            & p svg{
                /* font-size: 3rem; */
                width: 24px;
                height: 24px;
            
                &:hover{
                    color: var(--hover-color);
                }
            }
        }
    }

    & .list-color{
        display: flex;
        justify-content: center;
    }

    & .product-item__info-price{
        display: flex;
        justify-content: center;
        font-size: 1.7rem;
        color: var(--hover-color);

        & .product-item__info-oldPrice{
            text-decoration: line-through;
            margin-right: 5px;
        }
    }
`