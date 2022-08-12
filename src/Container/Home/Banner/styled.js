import styled from 'styled-components'
export const BannerWrapper = styled.div`
    height: auto;

    & img{
        width: 100%;
    }

    & .row > * {
        padding: 0;
    }

    & .banner-item{
        cursor: pointer;
        position: relative;
        transition: all ease-in-out 0.35s;

        
        &:hover .content-title {
            margin-bottom: 3rem;
        }
        
        &:hover .content::after{
            width: 20%;
            height: 3px;
        }

        
        
        & .content{
            background-image: url(${props => props.BlogImage ? props.BlogImage : ""});
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 4;
            transition: all ease-in-out 0.35s;
            padding: 70px 25px 30px;

            &:after{
                margin-top: 3rem;
                transition: all ease-in-out 0.35s;
                content: "";
                position: absolute;
                bottom: 15%;
                width: 0%;
                height: 0px;
                background-color: white;
            }

            & .content-info{
                font-size: 1.7rem;
                color: rgba(255,255,255,.7);
                margin-bottom: 8px;
            }

            & .content-title{
                transition: all ease-in-out 0.35s;
                font-size: 3rem;
                color: #fff;
            }
        }
    }
`