import styled from 'styled-components'
import { device } from '../../Contain'
export const HomeWrapper = styled.div`
    height: auto;
    width: 100%;
    height: 100%;
    background-color: white;
    position: relative;

    & .container{
        @media ${device.mobileL}{
            padding: 0 3rem 7rem;
        }
    }

    & > div{
        padding-bottom: 4rem;
    }

    & .brands {
        & > div{
            margin-bottom: 4rem;
        }
    }

    & .list-button{
        display: flex;
        @media ${device.mobileL}{
            & > * {
                margin-bottom: 1.5rem;
            }
            align-items: center;
            flex-direction: column;
        }
    }

    & .brand-image{
        text-align: center;
        position: relative;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 7rem 0;
        background-image: url(${props => props.backGround ? props.backGround : ""});
    }

    & .brandFooter{
        padding: 7rem 0 6rem;
    }

    & .btn-overwrite{
        margin-left: 15px;
    }
`