import styled from 'styled-components'
export const DownIconWrapper = styled.div`
    height: auto;

    & .icon{
        animation: goDown 2s infinite ease-in-out alternate;
        font-size: 4rem;
        color: #cacaca;
    }

    @keyframes goDown {
        from{
            transform: translateY(-10px);
        }
        to{
            transform: translateY(10px);
        }
    }
`