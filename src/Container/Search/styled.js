import styled from 'styled-components'
import { device } from '../../Contain'
export const SearchWrapper = styled.div`
    height: auto;
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0 0 0 1 #ccc;
    position: fixed;
    width: 100%;
    margin: auto;
    z-index: 999999;

    & .contain{
        margin: auto;
        max-width: 500px;
        & .search{
            position: relative;

            & input{
                border-radius: 4px;
                padding: 1rem 2rem 1rem 3rem;
                border: 1px solid #ccc;
                width: 100%;
                outline: none;
                font-size: 1.7rem;
                color: black;
            }

            & .list-icon{
                position: absolute;
                top: 0;
                left: 10px;
                transform: translateY(100%);
                width: 95%;
                justify-content: space-between;
                display: flex;
            
                & svg{
                    cursor: pointer;
                    font-size: 1.7rem;
                }
            }
        }

        & .list-search{
            background-color: white;
            border: 1px solid #ccc;
            padding: 1rem 2.5rem;
            overflow: hidden;
            overflow-y: scroll;
            max-height: 300px;
            img{
                margin-right: 2rem;
                width: 55px;
                height: 50px;
            }

            & .item-search {
                cursor: pointer;
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;

                & a{
                    color: #cfb481;
                    margin-bottom: 0.5rem;
                    font-size: 1.7rem;

                    @media ${device.tablet}{
                        font-size: 1.3rem;
                    }
                }

                & p {
                    color: black;
                    font-size: 1.4rem;
                }
            }

            & .item-search__list-price{
                display: flex;
                justify-content: end;

                & .item-search__list-price-oldPrice{
                    margin-right: 0.5rem;
                    text-decoration: line-through;
                }
            }

            & .search-title{
                color: #ccc;
                margin: 1.5rem 0;
                font-size: 1.6rem;
            }
        }

    }

`