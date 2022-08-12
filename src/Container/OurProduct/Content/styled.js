import styled from 'styled-components'
import { device } from '../../../Contain'
export const ContentWrapper = styled.div`
    height: auto;
    
    & .sep{
        margin-bottom: 12rem;

        @media ${device.laptop}{
            margin-bottom: 6rem;
        }

        @media ${device.tablet}{
            margin-bottom: 4rem;
        }
    }

    & .content-item{
        & img{
            width: 100%;
        }
        padding: 0 5rem;
        &__content{
            &-name{
                font-size: 1.4rem;
                margin-bottom: 1.5rem;
                color: var(--hover-color);
            }

            &-title{
                margin-bottom: 1.5rem;
                color: var(--hover-color);
                font-size: 1.4rem;


            }

            &-title{
                font-size: 5.5rem;
                color: black;
                font-weight: 400;
                line-height: 1.1;
                margin-bottom: 1.5rem;
                font-weight: 600;

                @media ${device.laptop}{
                    
                }

                @media ${device.tablet}{
                    font-size: 3.3rem;
                }
            }

            &-desc{
                font-size: 2rem;
                margin-bottom: 1.5rem;
                font-weight: 500;
                color: #373737;
            }

            &-list{
                &__item{
                    display: flex;
                    align-items: center;
                    color: #737E86;
                    margin-bottom: 2rem;
                    font-size: 1.3rem;
                    & span{
                        & svg{
                            display: block;
                            margin-right: 1.5rem;
                            color: var(--hover-color);
                        }
                    }
                }
            }
        }
    }
`