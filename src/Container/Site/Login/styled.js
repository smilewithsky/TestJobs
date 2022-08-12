import styled from 'styled-components'
import { device } from '../../../Contain'
export const LoginWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 25%;
    /* width: 100vw; */
    background-color: white;
    box-shadow: 0 0 1px black;
    z-index: 9999999999999;
    top: 0;
    right: 0;
    text-align: center;
    padding: 4rem 2rem;
    overflow-x: scroll;

    & .close{
        text-align: right;
        margin-bottom: 1.5rem;
        svg{
            font-size: 2.4rem;
            text-align: right;
        }
    }

    & h2{
        margin-bottom: 1.5rem;
    }

    & .form-group{
        width: 100%;
        display: flex;
        margin-bottom: 1.5rem;

        & span{
            font-size: 1.4rem;
            margin-left: 1rem;
            display: block;
        }

        & input[type="checkbox"]{
        }

        & input[type="text"]{
            padding: 2.5rem 1rem 1rem 4rem;
            font-size: 1.7rem;
            color: black;
            width: 100%;
            position: relative;
            margin-bottom: 1.5rem;
            border: none;
            background: #f0f2f6;
            outline: none;
            transition: all ease-in-out 0.35s;
        }

        & input:focus .form-icon {
            transform: translate(10px , 30%);
        }

        & p{
            margin-bottom: 0;
        }

        & .form-icon{
            font-size: 1.7rem;
            transform: translate(30px , 60%);
            z-index: 10;
            display: flex;
            position: absolute;
            align-items: center;

            & svg {
                margin-right: 1rem;
            }
        }

        & input[type="password"]{
            outline: none;
            background: #f0f2f6;
            border: none;
            padding: 2.5rem 1rem 1rem 4rem;
            font-size: 1.7rem;
            color: black;
            width: 100%;
            position: relative;
            margin-bottom: 1.5rem;
            transition: all ease-in-out 0.35s;
        }
    }

    & .btn-overwrite{
        width: 100%;
        margin-bottom: 1rem;
    }

    @media ${device.laptopL}{
        width: 40%;
    }

    @media ${device.tablet}{
        width: 80%;
    }

    @media ${device.mobileL}{
        width: 100%;
    }

    & a{
        font-size: 1.4rem;
        color: #ccc;
        text-decoration: none;
        transition: all ease 0.35s;
        &:hover{
            color: black;
        }
    }
`