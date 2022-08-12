import styled from 'styled-components'
export const PopUpWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    /* height: 100%; */
    z-index: 777777777;
    top: 0;
    left: 0;
    background-color: white;
    overflow: hidden;
    & .over-lay{
        position: absolute;
        position: 8888888888;
        background-color: rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        & .content{
            & .close{
                position: absolute;
                top: 10px;
                right: 40px;
                z-index: 99999999999999;
                & svg{
                    color: #ccc;
                    font-weight: bold;
                    font-size: 2rem;
                    text-align: right;
                }
            }

            background-color: white;
            z-index: 8888888889;
            position: absolute;
            width: 700px;
            margin: auto;
            display: flex;

            & .slick-list{
                margin: auto;
                max-width: 350px !important;
                max-height: 400px !important;
            }

            & .list-info{
                overflow-y: scroll;
                padding: 3rem;
                max-height: 400px;

                & .list-info__name-product{
                    margin-bottom: 7px;
                    font-size: 2.6rem;
                    font-weight: 500;
                }

                & .list-info__price{
                    display: flex;
                    justify-content: left;
                    align-items: center;
                
                    &-oldPrice{
                        font-size: 1.5rem;
                        text-decoration: line-through;
                        color: var(--hover-color);
                        margin-right: 1.5rem;
                    }

                    &-currentPrice{
                        font-size: 1.7rem;
                        color: var(--hover-color);
                        font-weight: bold;
                    }
                }

                & .list-info__desc{
                    text-align: left;
                    &-title{
                        font-size: 1.7rem;
                        margin-bottom: 1.5rem;
                        font-weight: 600;
                        text-align: justify;
                    }

                    &-description{
                        margin-bottom: 1.5rem;
                        padding-left: 0;
                        & li{
                            font-size: 1.4rem;
                            color: #6a717c;
                        }
                    }
                }

                & .list-text{
                    flex-shrink: 0;
                    margin: 0;
                    font-weight: 500;
                    margin-right: 10px;
                    min-width: 18%;
                    font-size: 1.4rem;
                    text-align: left;
                }

                & .list-info__height{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;

                    & .list-height{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: right;
                        align-items: center;

                        & .item-height{
                            display: block;
                            color: inherit;
                            text-decoration: none;
                            cursor: pointer;
                            border: 1px solid rgba(0,0,0,.1);
                            font-size: 14px;
                            line-height: 30px;
                            padding: 0 10px;
                            border-radius: 3px;
                            margin: 2px;
                        }
                    }
                }

                & .list-info__age{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    
                    & select{
                        outline: none;
                        padding: 1rem;
                        padding-right: 2rem;
                        width: 100%;
                        font-size: 1.4rem;
                        color: #6a717c;
                        background-color: rgba(240,242,246,1);
                        border-color: #EBEBEB;
                    }
                }

                & .list-info__color{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    margin-bottom: 1.5rem;

                    & .list-color{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;

                        & .color-item{
                            background-color: black;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            padding: 0.5rem;
                            border: 1px solid black;
                            margin-right: 0.5rem;
                            cursor: pointer;

                            &:hover{
                                border: 1px solid lightblue;
                            }
                        }
                    }
                }

                & .list-add{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    & .quantity-product{
                        display: flex;
                        align-items: center;
                        & span{
                            background-color: #f0f2f6;
                            padding: 1.5rem 2rem;
                        }

                        & .btn-overwrite {
                            background-color: #f0f2f6;
                            user-select: none;
                            color: black;
                            margin: 0 !important;
                        }
                    }
                }

                & .list-info__category{
                    display: flex;
                    justify-content: left;
                    flex-wrap: wrap;
                    color: #a8a8a8;
                    font-size: 1.4rem;      

                    & > * {
                        margin-right: 0.4rem;
                    }

                    &-tags{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        & .tags-list{
                            display: flex;
                        }

                        & .tags-item{
                            padding: 2px 7px;
                            font-size: 1.2rem;
                            color: black;
                        }
                    }
                    &-cate{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        & .cate-list{
                            display: flex;

                            & .cate-item{
                                color: var(--hover-color);
                                transition: all ease-in-out 0.35s;
                                margin-left: 0.5rem;
                                cursor: pointer;

                                &:hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                    &-SKU{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                    }
                }
            }
        }
    }
`