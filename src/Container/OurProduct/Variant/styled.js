import styled from 'styled-components'
export const VariantWrapper = styled.div`
    height: auto;

    & .variant-item{
        text-align: center;
        & .order{
            color: white;
            display: inline-block;
            font-size: 2rem;
            padding: 1rem 2rem;
            border-radius: 50%;
            margin-bottom: 1.5rem;
        }

        & .name{
            margin-bottom: 2rem;
        }

        & .title{
            font-size: 1.7rem;
            color: #6a717c;
            min-height: 8rem;
        }

        & .arr-item{
            padding: 1.1rem 1rem;
            text-align: center;
            color: #6a717c;
            font-size: 1.7rem;
            border-bottom: 1px solid #e5e5e5;
        
            &:last-child{
                border: none;
            }
        }
    }
`