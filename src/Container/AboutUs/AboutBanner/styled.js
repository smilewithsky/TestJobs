import styled from 'styled-components'
export const AboutBannerWrapper = styled.div`
    height: auto;
    margin-top: 3rem;

    & .banner{
        background-image: url( ${props => props.backGround} );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 50%;
        position: relative;

        & .play{
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            height: 100%;
            cursor: pointer;

            & .video{
                top: 0;
                left: 0;
                position: fixed;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100000000000000000000000000;
                & .video-container{
                    background: transparent;
                    background-color: white;
                    position: absolute;
                    max-width: 1000px;
                    max-height: 800px;
                    padding: 0;
                    overflow: hidden;
                    & video{
                        width: 100%;
                        height: 100%;
                    }
                }

                & .close{
                    margin-right: 0 !important;
                    margin-bottom: 0 !important;
                    background: rgba(0,0,0,0.6);
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                    text-align: right;
                    margin-right: 2rem;
                    cursor: pointer;
                    /* padding: 1rem; */
                    /* background-color: transparent; */
                }
            }
        }
    }
`