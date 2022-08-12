import styled from 'styled-components'
import { device } from '../../../Contain'
export const AboutManagerWrapper = styled.div`
    height: auto;

    @media ${device.desktopL}{
        margin-top: 6rem;
        margin-bottom: 6rem;
    }

    @media ${device.tablet}{
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    & .title{
        font-size: 5.5rem;
        text-align: left;

        @media ${device.tablet}{
            font-size: 4.7rem;
        }
    }

    & .contains{
        & .desc{
            font-size: 2rem;
            margin-bottom: 3rem;

            @media ${device.laptop}{
                font-size: 1.7rem;
            }

            & span{
                font-size: 6rem;
                color: var(--hover-color);
                padding: 1rem;
                padding-top: 0;

                @media ${device.tablet}{
                    font-size: 4rem;
                }
            }
        }
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        & .desc-item{
            font-size: 3rem;
            margin-bottom: 1.5rem;
            font-weight: 500;

            @media ${device.tablet}{
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }

    }
    & .author{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        & .author-info{
            @media ${device.tablet}{
                text-align: center;
            }

            &__name{
                font-size: 1.4rem;
                margin-bottom: 1rem;
                font-weight: bold;
            }

            &__job{
                font-size: 1.7rem;
                color: #6a717c;
            }
        }

        & .author-signature{
            & img{
                width: 100%;
                
            }
        }
    }

`