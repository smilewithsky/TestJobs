import styled from 'styled-components'
export const TypeItemWrapper = styled.div`
    height: auto;
    width: 100%;

    & .contain{
        text-align: center;
        margin: 0 12px 4rem;
        position: relative;
        z-index: 2;
        transition: all ease-in-out;
        cursor: pointer;
        p{
            font-size: 2.4rem;
            color: var(--bold-color);
        }
        & svg{
            top: 10%;
            position: absolute;
            z-index: -1;
            visibility: hidden;
            opacity: 0;
            transition: all ease-in-out;
        }

        &:hover & svg{
            z-index: 3;
            visibility: visible;
            opacity: 1;
        }
    }
`