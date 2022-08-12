import styled from 'styled-components'
export const TextHoverWrapper = styled.div`
    height: auto;
    position: relative;
    padding: 1.2rem 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;


    
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #ccc;
        bottom: 0;
        left: 0;
    }



    &::after{
        top: 0;
        left: 0;
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #ccc;
    }

    &:hover &::after{
        background-color: lightblue;
    }
`