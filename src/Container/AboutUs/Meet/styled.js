import styled from 'styled-components'
import { device } from '../../../Contain'
export const MeetWrapper = styled.div`
    height: auto;
    margin-bottom: 8rem;

    @media ${device.tablet}{
        margin-bottom: 4rem;
    }
    & .contain-item{
            padding-top: 11rem;
            background-color: #f6f7f9;
            text-align: center;
            padding-bottom: 4rem;
            & > * {
                text-align: center;
                padding-bottom: 1.5rem;
            }
        }

    & .meet-item{
        position: relative;

        & img{
            width: 100%;
        }

        

        &__content{
            padding: 1rem;
            position: absolute;
            left: 0;
            width: 100%;
            text-align: center;
            bottom: 10px;
            transition: all ease 0.35s;
            &:hover .line{
                width: 60%;
            }

            &-jobs{
                display: inline-block;
                font-size: 1.3rem;
                color: white;
                background-color: black;
                border-radius: 4px;
                padding: 4px 8px;
                margin-bottom: 1.5rem;
                margin-bottom: 1.5rem;
                transition: all ease-in-out 0.35s;
            }

            &-name{
                font-size: 2.4rem;
                color: black;
                transition: all ease-in-out 0.35s;

            }

            &:hover .meet-item__content-name{
                margin-bottom: 2.5rem;
            }

            & .line{
                transition: all ease 0.35s;
                height: 1px;
                margin: 0 auto;
                width: 0%;
                background-color: black;
            }
        }
    }
`