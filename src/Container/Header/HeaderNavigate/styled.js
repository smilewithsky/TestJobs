import styled from 'styled-components'
export const HeaderNavigateWrapper = styled.div`
    height: auto;

    & .list-icon{
        display: flex;
        align-items: center;
        justify-content: center;
    
        & a{
            display: block;
            font-weight: 600;
            min-height: 6rem;
            text-decoration: none;
            font-size: 1.4rem;
            padding: 0 2rem;
            color: var(--default-color);
            border-bottom: 3px solid transparent;
            transition: all 0.35s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
            &:hover{
                color: var(--hover-color);
                border-bottom: 3px solid var(--hover-color);
            }
        }
    }
`