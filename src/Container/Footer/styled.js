import styled from 'styled-components'
import { device } from '../../Contain'
export const FooterWrapper = styled.div`
    height: auto;
    padding: 6rem 0 5rem;
    background-color: #f6f7f9;

    & .footer-item{
        @media ${device.laptop}{
            text-align: center;
            margin: 0 auto !important;
        }

        & img{
            width: 200px;
            margin-bottom: 2rem;

            @media ${device.laptop}{
                text-align: center;
                margin: 0 auto !important;
            }
        }

        & .btn-overwrite{
            margin-bottom: 3rem;
        }
    }

    img{
        display: block;
        width: 100%;
    }

    p{
        font-size: 1.7rem;
        margin-bottom: 1.5rem;
    }

    & .bank{
        & img{
            max-width: 100%;
            display: block;
        }
    }

    & .open{
        @media ${device.laptop}{
            text-align: center;
        }

        & ul{
            padding-left: 0;
        }

        & h3{
            color: #6a717c;
            margin-bottom: 1.5rem;
        
            
            @media ${device.mobileL}{
                font-size: 1.3rem;
            }
        }

        & li{
            color: #6a717c;

            font-size: 1.7rem;
            & span{
                color: var(--bold-color);
            }
            

            @media ${device.mobileL}{
                font-size: 1.3rem;
            }
        }
    }
`