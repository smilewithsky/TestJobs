import Image from './../../Images/babyshop-home-pic1.webp'
import styled from 'styled-components'
export const SaleWrapper = styled.div`
    width: 100%;
    padding: 240px 20px 40px;
    background-color: #e9efef;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-position: top;
    
    & .contain{
        text-align: center;
        position: relative;
        top: 50%;

        & .contain-content{
            &__title{
                font-size: 14px;
                line-height: 26px;
                font-weight: 700;
                letter-spacing: 0px;
                color: #171b20;
            }

            & .sale-number{
                color: var(--hover-color);
                font-size: 12rem;
                line-height: 1em;
            }

            & .event{
                font-size: 55px;
                line-height: 65px;
                font-weight: 600;
                letter-spacing: 0px;
                color: #171b20;
                margin-top: -60px;
            }


        }

        & .countdown{
            min-width: 100%;
            display: flex;
            justify-content: center;
            color: var(--hover-color);
            font-size: 3rem;
            margin-bottom: 4rem;
            & > .row{
                width: 100%;


                & span{
                    color: #171b20;
                    margin-bottom: 1.5rem;
                }
            }
        }
    }
`