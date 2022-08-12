import styled from 'styled-components'
import { device } from '../../../Contain'
export const SiteMenuWrapper = styled.div`
    position: fixed; 
    height: 100vh;
    /* width: 100vw; */
    background-color: #232c38;
    z-index: 9999999999999;
    top: 0;
    right: 0;
    width: 25%;
    text-align: center;
    padding: 4rem 2rem;
    box-shadow: 0 0 1px black;
    overflow-x: scroll;

    @media ${device.desktopL}{

    }

    & .over-flow{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100%;
        
    }

    & .close{
        text-align: right;
        cursor: pointer;
        margin-bottom: 1.5rem;

        & svg{
            width: 30px;
            height: 30px;
            color: white;
        }
    }
    
    & .site-cart__icon{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        & li{
            font-size: 1.6rem;
            display: flex;
            color: white;
            transition: all ease-in-out 0.35s;
            cursor: pointer;
            font-weight: 300;
            &:hover{
                color: #ebc989;
            }

            & .quantity{
                margin-left: 0.4rem;
                margin-top: -1rem;

            }

            & svg{
                width: 26px;
                height: 26px;
            }
            padding: 5px;

            & .sum-price{
                font-size: 1.8rem;
                font-weight: bold;
            }
        }
    }

    & .content{
        text-align: left;
        & li {
            & a{
                display: block;
                padding: 11px 5px 10px 20px;
                padding-left: 0;
                margin-right: 50px;
                text-decoration: none;
                line-height: 19px;
                color: #ffffff;
                transition: all ease 0.35s;
                font-size: 1.3rem;
                &:hover{
                    color: #ebc989;
                }
            }


        }

        &-below{
            & div{
                display: flex;
                justify-content: center;

                & a{
                    display: inline-block;
                    margin-right: 6px;
                    padding-right: 6px;
                    border-right: 1px solid rgba(255,255,255,.1);
                    font-size: 1.3rem;
                    text-decoration: none;
                    transition: all ease 0.35s;
                    color: white;
                    &:hover{    
                        text-decoration: underline;
                        color: #ebc989;
                    }
                }
            }

            
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

    & .form-group{

    }
`