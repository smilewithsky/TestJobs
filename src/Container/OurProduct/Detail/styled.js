import styled from 'styled-components'
import { device } from '../../../Contain'
export const DetailWrapper = styled.div`
    height: auto;

    & .detail{
        &-info{
            @media ${device.desktopL}{
                padding: 2.5rem;
            }

            @media ${device.tablet}{
                padding: 0;
            }

            &__size{
                display: flex;
                align-items: center;
                font-size: 1.7rem;
                cursor: pointer;
                color: var(--hover-color);

                & svg{
                    margin-right: 1.5rem;
                    display: block;
                }
            }

            &__name{
                color: #171b20;
                font-size: 55px;
                line-height: 65px;
                font-weight: 600;
                letter-spacing: 0px;
                margin-bottom: 1.5rem;

                @media ${device.laptop}{
                    line-height: 1.1;
                    font-size: 4.7rem;
                }

                @media ${device.tablet}{
                    line-height: 1.1;
                    font-size: 3.3rem;
                }
            }

            &__desc{
                color: #373f4b;
                font-size: 20px;
                line-height: 28px;
                font-weight: 400;
                letter-spacing: 0px;
                margin-bottom: 1.5rem;

                @media ${device.laptop}{
                    font-size: 1.7rem;
                }   
                @media ${device.mobileL}{
                    font-size: 1.3rem;
                }
            }

            &__description{
                margin-bottom: 1.5rem;
                &-item{
                    font-size: 1.7rem;
                    color: #6a717c;
                    margin-bottom: 10px;
                    list-style: circle;

                    &-composition{
                        list-style: none;
                        padding-left: 0;
                    }

                    @media ${device.mobileL}{
                        font-size: 1.3rem;
                    }
                }
            }
            &__price{
                color: var(--hover-color);
                margin: 0 1.2rem 2rem;
                align-items: center;
                justify-content: start;
                display: flex;
                &-currentPrice{
                    font-weight: bold;
                    font-size: 4rem;
                    @media ${device.tablet}{
                        font-size: 2.5rem;
                    }
                }

                &-oldPrice{
                    margin-right: 1.5rem;
                    font-weight: 500;
                    font-size: 3.4rem;
                    text-decoration: line-through;
                    @media ${device.tablet}{
                        font-size: 2rem;
                    }
                }
            }

            & .detail-info-t-title{
                flex-shrink: 0;
                margin: 0;
                font-weight: 500;
                margin-right: 10px;
                min-width: 18%;
                text-align: left;
                font-size: 1.7rem;

                @media ${device.mobileL}{
                    font-size: 1.3rem;
                }
            }

            &__height{
                display: flex;
                align-items: center;
                font-size: 1.7rem;
                flex-shrink: 0;
                margin: 0;
                font-weight: 500;
                margin-right: 10px;
                min-width: 18%;
                margin-bottom: 1.5rem;
                &-list{
                    &-item{
                        opacity: 0.3;
                        display: inline-block;
                        color: inherit;
                        text-decoration: none;
                        cursor: pointer;
                        border: 1px solid rgba(0,0,0,.1);
                        font-size: 14px;
                        line-height: 30px;
                        padding: 0 10px;
                        border-radius: 3px;
                        margin: 2px;
                        border-color: rgba(0,0,0,.8);

                        &.detail-info__height-list-item-active{
                            opacity: 1;
                        }
                    }
                }
            }
            &__age{
                display: flex;
                align-items: center;
                margin-bottom: 1.5rem;
                & select{
                    outline: none;
                    font-size: 1.7rem;
                    padding: 1rem 1rem 2rem 1rem;
                    color: #6a717c;
                    background-color: rgba(240,242,246,1);
                    border-color: #EBEBEB;
                    width: 100%;
                }
                &-list{
                    &-item{
                        
                    }
                }
            }
            &__color{
                margin-bottom: 1.5rem;
                display: flex;

                &-contain{
                    margin-right: 0.5rem;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    text-align: center;

                    &.active{
                        border: 1px solid green;
                    }
                
                    &:hover{
                        border: 1px solid green;
                    }
                }

                &-list{
                    display: flex;
                    list-style: none;
                    &-item{
                        cursor: pointer;
                        margin: 2px;
                        border: 5px solid transparent;
                        width: 34px;
                        height: 34px;
                        border-radius: 100%;
                        padding: 3px;
                        box-sizing: border-box;

                        @media ${device.tablet}{
                            width: 26px;
                            height: 26px;
                        }
                    }
                }
            }

            &__sep{
                margin-top: 2rem;
                &-title{
                    margin-bottom: 5px;
                    color: #6a717c;
                    text-align: center;
                    font-size: 1.7rem;

                    @media ${device.tablet}{
                        font-size: 1.3rem;
                    }
                }
                &-tags{
                    &-list{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        &__item{
                            display: inline-block;
                            text-decoration: none;
                            background-color: rgba(0,0,0,.02);
                            color: rgba(0,0,0,.8);
                            margin: 0 2px 2px;
                            border-radius: 4px;
                            padding: 2px 7px;
                            font-size: 90%;
                            @media ${device.tablet}{
                                font-size: 1.3rem;
                            }
                            &:hover{
                                background-color: rgba();
                            }
                        }
                    }
                }
                &-category{
                    &-list{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        &__item{
                            color: #cfb481;
                            @media ${device.tablet}{
                                font-size: 1.3rem;
                            }
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
                &-sku{
                    &-list{
                        &__item{
                            display: inline-block;
                            border: 1px solid rgba(0,0,0,.1);
                            border-radius: 5px;
                            padding: 0 10px;
                            font-size: 13px;
                            text-transform: uppercase;
                            @media ${device.tablet}{
                                font-size: 1.3rem;
                            }
                        }
                    }
                }
            }
            & .list-add{
                display: flex;
                justify-content: flex-start;
                align-items: center;

                & span{
                    padding: 1rem 2rem;
                }

                & .btn-overwrite{
                    width: 100%;
                    text-align: center;
                    font-weight: bold;
                }
            }

            & .detail-info__sep-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                & ul{
                    padding-left: 0;

                    & .detail-info__sep-tags-list__item{
                        display: inline-block;
                        text-decoration: none;
                        background-color: rgba(0,0,0,.02);
                        color: rgba(0,0,0,.8);
                        margin: 0 2px 2px;
                        border-radius: 4px;
                        padding: 2px 7px;
                        font-size: 90%;
                        transition: background-color 0.3s ease-in-out 0s;
                        font-size: 1.5rem;
                        margin-right: 1rem;
                        @media ${device.tablet}{
                            font-size: 1.3rem;
                        }
                    }

                    & .detail-info__sep-category-list__item{
                        font-size: 1.7rem;
                        margin-right: 5px;
                    }
                }
            }
        }

        & .quantity-product{
            display: flex;
            align-items: center;
            margin-right: 3rem;

            @media ${device.laptop}{
                margin-right: 1rem;
            }

            & .btn-overwrite{
                background-color: #f0f2f6;
                color: black;
                user-select: none;
            }

            & span{
                padding: 1.5rem 3rem;
                background-color: #f0f2f6;
            }
        }

        & .btn-overwrite{
            @media ${device.tablet}{
                font-size: 1.6rem;
            }
        }
    }
`