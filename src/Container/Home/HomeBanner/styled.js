import styled from 'styled-components'
import { device } from '../../../Contain'
export const HomeBannerWrapper = styled.div`
    height: auto;

    & .slick-dots{
        position: absolute;
        bottom: 10px;
    }
    
    & .slick-arrow.slick-next{
        visibility: hidden;
        opacity: 0;
    }

    & .slick-arrow.slick-prev{
        visibility: hidden;
        opacity: 0;
    }

    & .Home-banner__slider{
        position: relative;
        width: 100%;
        text-align: center;
        &-button{
            background-color: black;
            color: white;
            border-radius: 50%;
            transition: all 0.35s ease-in-out;
            padding: 1.5rem 2.2rem;
            font-weight: bold;
            font-size: 1.7rem;

            &:hover{
                transform: scale(1.1);
            }
        }

        & img{
            height: 100%;
            width: 100%;
            display: block;
        }

        & .Home-banner__slider-content{
            text-align: center;
            width: 100%;
            position: absolute;
            top: 0;
            text-align: center;
            color: #171B20;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &__title{
                @media ${device.laptopL}{
                    font-size: 5.3rem;
                }

                @media ${device.laptop}{
                    font-size: 3.2rem;
                }

                font-style: italic;
                font-weight: 400;
                font-size: 6.5rem;
            }

            &__bold{
                font-size: 7.5rem;
                font-weight: bold;

                @media ${device.laptopL}{
                    font-size: 5.7rem;
                }

                @media ${device.laptop}{
                    font-size: 3.8rem;
                }

                
                @media ${device.tablet}{
                    font-size: 3.2rem;
                }
            }

            &__time{
                color: var(--hover-color);
                font-weight: bold;
                font-size: 12rem;

                @media ${device.laptopL}{
                    font-size: 9rem;
                }

                @media ${device.laptop}{
                    font-size: 6rem;
                }

                
                @media ${device.tablet}{
                    font-size: 4.7rem;
                }
            }
        }
    }

    & .Home-banner__slider{

    }

    & .item{
        padding: 4rem 2.5rem;
        text-align: center;
        margin-bottom: 1.5rem;

        &-image{
            width: 100%;
            display: block;
        }
    }

    & .title{
        margin-bottom: 1.5rem;
        font-size: 3rem;
        font-weight: bold;
        color: #171B20;
    }

    & .name-product{
        font-size: 3rem;
        margin-bottom: 3rem;
    }

    & .sale-product{
        font-weight: bold;
    }
`