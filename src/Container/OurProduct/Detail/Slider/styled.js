import styled from 'styled-components'
import { device } from '../../../../Contain'
export const SliderDetailWrapper = styled.div`
    height: auto;

    & .contains{
        display: flex;
        align-items: center;
        & > img{
            width: 100%;
            height: 100%;
            display: block;
        }

        & .list-image{
            margin-right: 1rem;
            & > .item-image{
                width: 95px;
                height: 95px;
                opacity: 0.6;
                margin-bottom: 1rem;

                @media ${device.tablet}{
                    width: 50px;
                    height: 50px;
                }

                &.active{
                    opacity: 1;
                }

                & > img{
                    width: 100%;
                    cursor: pointer;
                }
            }
        }
    }
`