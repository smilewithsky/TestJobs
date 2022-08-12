import styled from 'styled-components'
export const BenefitsWrapper = styled.div`    
    & .image-center{
        width: 100%;
    }

    & .benefits-item{
        text-align: center;
        & img{
            margin: auto;
            width: 82px;
            display: block;
            margin-bottom: 1.5rem;
        }


        & h4{
            color: #171b20;
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            font-weight: bold;
        }

        & p{
            font-size: 1.7rem;
            margin-bottom: 1.5rem;
        }
    }

    & .col-6 img{
        width: 100%;
        display: block;
    }
`