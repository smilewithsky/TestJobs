import styled from 'styled-components'
export const SaleSliderWrapper = styled.div`
    height: auto;
    padding: 80px 20px 40px;
    background-color: #eaf0f7;
    text-align: center;

    & img{
        max-width: 100%;
        display: block;
    }

    & .slicer-image{
        height: 300px;
        object-fit: cover;
        margin: auto;
    }

    & .title{
        color: #171b20;
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }

    & .event{
        margin-bottom: 1.5rem;
        color: #2a3135;
        font-size: 4.1rem;

        & span{
            color: #94afc1;
        }
    }

    & .slider-desc{
        padding: 0 20%;

        & .slider-title{
            font-size: 1.3rem;
            color: #6A717C;
            margin-bottom: 0;
        }

        & .slicer-image__title{
            margin: 0 auto;
            margin-bottom: 3rem;
        }
    }


`