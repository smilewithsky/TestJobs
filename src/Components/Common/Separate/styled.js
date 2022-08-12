import styled from 'styled-components'
export const SeparateWrapper = styled.div`
    height: auto;
    text-align: ${props => props.align ? props.align : "left"};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : "40px"};
    & .text-separate{
        color: var(--bold-color);
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    & img{
        margin: 0 auto;
        display: block;
        object-fit: cover;
        margin-bottom: 1.5rem;
    }
`