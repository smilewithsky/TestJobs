import styled from 'styled-components'
export const HeaderIconWrapper = styled.div`
    height: auto;

    & .list-icon{
        display: flex;
        align-items: center;
        justify-content: end;

        & .header-item , & .sum-price{
            margin: 0 10px;
            color: #333333;
            cursor: pointer;
            font-size: 1.4rem;
            position: relative;
            &:last-child{
                padding-top: 15px;
                padding-bottom: 15px;
            }

            & svg{
                
            }

            & .sum{
                position: absolute;
                top: -10px;
                right: -10px;
                display: inline-block;
                width: 18px;
                line-height: 18px;
                text-align: center;
                font-size: 11px;
                background-color: var(--hover-color);
                color: #fff;
                border-radius: 100%;
            }
        }

    }
`