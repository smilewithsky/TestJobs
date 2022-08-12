import styled from 'styled-components'
export const BrandItemWrapper = styled.div`
    height: auto;
    width: 100%;
    transition: 0.35s ease-in-out;
    display: flex;
    justify-content: center;
    img{
        display: block;
        padding: 1rem 1.5rem;
        margin: 1rem;
        cursor: pointer;
    }

    &:hover{
        background: rgba(0,0,0,.05);
    }
`