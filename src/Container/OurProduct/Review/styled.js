import styled from 'styled-components'
export const ReviewWrapper = styled.div`
    height: auto;

    & .heading{
        font-size: 30px;
        line-height: 40px;
        font-weight: 400;
        letter-spacing: 0px;
        color: #171b20;
        margin-bottom: 1.5rem;
    }

    & .content{
        & > * {
            color: #171b20;
            margin-bottom: 1.5rem;
        }

        & .review{
            font-size: 1.7rem;
            color: #171b20;
        }

        & .review-name__product{
            font-size: 2.1rem;
        }

        & .should{
            font-size: 1.7rem;
            color: #171b20;
            & a{
                text-decoration: none;
                color: var(--hover-color);
            }
        }
    }

`