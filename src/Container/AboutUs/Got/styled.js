import styled from 'styled-components'
export const GotWrapper = styled.div`
    height: auto;
    
    & .got-item{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & img{
            width: 60px;
            height: 60px;
            margin-bottom: 1.5rem;
        }

        & .title{
            color: #171b20;
            margin-bottom: 1.5rem;
        }

        & .desc{
            color: #6a717c;
            font-size: 1.7rem;
        }
    }
`