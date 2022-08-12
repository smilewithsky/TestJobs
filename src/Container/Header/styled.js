import styled from 'styled-components'
import { device } from '../../Contain'
export const HeaderWrapper = styled.div`
    height: auto;

    & .logo{
        width: 100%;
        padding: 15px 0;
    }

    & .col-0{
        @media ${device.desktopL}{
            display: block !important;
        }
        
        @media ${device.laptopL}{
            display: none !important;
        }
    }

    & .col-xl-12{
        @media ${device.desktopL}{
            display: block !important;
        }
    }

    & .col-xl-0{
        @media ${device.desktopL}{
            display: none !important;
        }

        @media ${device.laptopL}{
            display: block !important;
        }

        & svg{
            width: 22px;
            height: 22px;
            cursor: pointer;
        }
    }

    &.show{
        @media ${device.desktopL}{
            display: block;
        }
        @media ${device.laptop}{
            display: none;
        }
    }
`