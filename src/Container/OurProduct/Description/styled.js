import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
    height: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    & .list-text{
        justify-content: center;
        display: flex;
        font-size: 1.7rem;
        list-style: none;
        text-align: center;
        margin-bottom: 4rem;
        flex-wrap: wrap;
        
        &__item{
            cursor: pointer;
            margin: 1.5rem 2.5rem;
            position: relative;
            margin-bottom: 1.5rem;

            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 3px;
                bottom: -20px;
                left: 0;
                background-color: transparent;
                transition: all ease-in-out 0.35s;
            }
            
            &:hover::after{
                background: #ccc;
                bottom: -10px;
            }
        }
    }

    & .mbt-11{
        margin-bottom: 11rem;
    }

    & .item-desc{
        & .title{
            margin-top: 1.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }

        &__friendly{
            & .list-icon{
                & li{
                    & .active{
                        background-color: var(--hover-color);
                    }
                }
            }
        }
        
        &__washing{
            & .list-icon{
                & li{
                    & .active{
                        background-color: #558d97;
                    }
                }
            }
        }

        &__warmness{
            & .list-icon{
                & li{
                    & .active{
                        background-color: #b5aca0;
                    }
                }
            }
        }

        &__durability{
            & .list-icon{
                & li{
                    & .active{
                        background-color: #59616d;
                    }
                }
            }
        }

        & .list-icon{
            margin-bottom: 1.2rem;
            display: flex;
            justify-content: center;

            

            & li{
                display: inline-block;

                & svg{
                    margin-right: 7px;
                    width: 17px;
                    height: 17px;
                    padding: 4px;
                    border-radius: 50%;
                    color: white;
                    background-color: #0000000f;
                }
            }

            
        }

        
    }
`