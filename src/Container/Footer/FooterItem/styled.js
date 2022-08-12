import styled from 'styled-components'
import { device } from '../../../Contain'
export const FooterItemWrapper = styled.div`
    height: auto;

    @media ${device.laptop}{
        & .footer-item__heading{
            margin-top: 1.5rem;
        }
    }

    @media ${device.mobileL}{
        & .footer-item__heading{
            margin-top: 1.3rem;
        }
    }

    @media ${device.laptop}{
        text-align: center;
    }

    ul{
        padding-left: 0;
        margin: 3rem 0;

        & li{
            & a{
                text-decoration: none;
                color: var(--text-color);
                font-size: 1.7rem;
                border-bottom: 1px solid transparent;

                @media ${device.mobileL}{
                    font-size: 1.3rem;
                }

                &:hover{
                    text-decoration: underline;
                }
            }

            & .phone-link{
                margin-bottom: 1.5rem;
                display: block;
            }
        }
    }
`