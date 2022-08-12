import styled from 'styled-components'
export const ListItemScrollWrapper = styled.div`
    height: auto;
    /* background-color: red; */
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 777777777;

    & svg{
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        color: black;
    }
`