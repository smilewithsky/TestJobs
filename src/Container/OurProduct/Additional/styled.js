import styled from 'styled-components'
import { device } from '../../../Contain'
export const AdditionalWrapper = styled.div`
    height: auto;

    & .heading{
        font-size: 30px;
        line-height: 40px;
        font-weight: 400;
        letter-spacing: 0px;
        color: #171b20;
        margin-bottom: 1.5rem;
        @media ${device.tablet}{
            font-size: 1.8rem;
        }
    }

    & .status{
        @media ${device.tablet}{
            font-size: 1.3rem !important;
        }

        &-item{
            display: flex;
            justify-content: space-between;
            align-items: center;

            

            &__name{
                text-align: center;
                flex: 1;
                font-size: 1.7rem;
                font-weight: 600;
                padding: 8px;
            }

            &__info{
                font-size: 1.7rem;
                font-style: italic  ;
                padding-left: 8rem;
                flex: 3;
                text-align: right;
            }
        }
    }
`