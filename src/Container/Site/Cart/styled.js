import styled from 'styled-components'
import { device } from '../../../Contain'
export const CartWrapper = styled.div`
    position: fixed;
    height: 100vh;
    /* width: 100vw; */
    background-color: white;
    z-index: 9999999999999;
    top: 0;
    right: 0;
    width: 25%;
    text-align: center;
    padding: 4rem 2rem;
    box-shadow: 0 0 1px black;
    overflow-x: scroll;

    & .close{
        text-align: right;
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
        & svg{
            cursor: pointer;
        }
    }

    & .logic{
        bottom: 0;
        left: 0;
        padding: 2rem;
        width: 100%;
        text-align: left;
        font-size: 1.7rem;

        &-item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            & .total-number{
                font-size: 2.2rem;
                font-weight: bold;
            }
        }

        & .logic-item:first-child{
            margin-bottom: 2rem;
            border-bottom: 1px solid #ccc;
        }
    }

    @media ${device.laptopL}{
        width: 40%;
    }

    @media ${device.tablet}{
        width: 80%;
    }

    @media ${device.mobileL}{
        width: 100%;
    }

    & .list-cart {
        max-height: 700px;
        overflow-y: scroll;

        & .cart-item{
            margin-top: 1.5rem;
            & .contain{
                display: flex;
                align-items: center;
                justify-content: space-between;

                & img{
                    width: 100px;
                    height: 125px;
                    display: block;
                }

                & .cart-item__content{
                    text-align: left;
                    font-size: 1.4rem;
                    color: black;
                    margin-bottom: 5px;
                    border-right: 1px solid #ccc;
                    padding-right: 1rem;
                    &-name{
                        text-decoration: none;
                        font-size: 1.6rem;
                        color: black;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }

                    &-price{
                        color: #ebc989;
                    }

                }

            }  
            
            & .contain-sum__price{
                font-size: 1.7rem;
                color: #ebc989;
                font-weight: 600;
                @media ${device.laptop}{
                    margin-left: 1rem;
                }
            }
        & .nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            & .quantity{
                & .btn-overwrite{
                    font-size: 2rem;
                }


                span{
                    font-size: 2rem;
                    padding: 1rem 2rem;
                }
            }

            & .delete-item{
                font-size: 1.7rem;
                cursor: pointer;
                color: #6a717c;
            }
        }
        }
    }

    & .cart-empty{
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        @media ${device.tablet}{
            transform: none;
        }

        & svg{
            font-size: 5rem;
            @media ${device.laptop}{
                font-size: 4rem;
                margin-bottom: 1rem;
            }

            @media ${device.tablet}{
                font-size: 3rem;
            }
        }

        & .text-empty{
            font-size: 1.7rem;
            font-weight: 500;
            color: black;

            @media ${device.laptop}{
                font-size: 1.3rem;
            }
        }
    }
`