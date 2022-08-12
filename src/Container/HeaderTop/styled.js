import styled from 'styled-components'
import { device } from '../../Contain'
export const HeaderTopWrapper = styled.div`
    height: auto;

    & .logo {
        & a{
            text-decoration: none;
            text-align: center;
            margin-top: 5px;
            display: block;
            margin-bottom: 5px;
            
            & img{
                display: block;
                height: 50px;
                margin: auto;
            }
        }
    }

    & .navbar{
        justify-items: flex-end;
        font-size: 2.2rem;
        float: right;
        cursor: pointer;
    }

    & .col-lg-0{
        @media ${device.desktop}{
            display: none;
        }

        @media ${device.laptop}{
            display: block;
        }
    }
`