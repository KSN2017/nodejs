import styled, { keyframes } from 'styled-components'

export const FormBox = styled.div`
    background: #fff;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-block;
    width: 188.62px;
    height: 237.27px;
    margin-right: 20px;
    margin-bottom: 20px;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
`

const progress = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 300px 0;
    }
`

export const AnimatedTop = styled.div`
    animation-name: ${progress};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 41.57%;
`

export const AnimatedMiddle = styled.div`
    display: block;
    width: 100%;
    height: 45.79%;
`

export const AnimatedBottom = styled.div`
    animation-name: ${progress};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 12.64%;
`

export const SingleLineLoader = styled.div`
    animation-name: ${progress};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: ${(props ) => props.borderRadius || '4px'};
    margin-left: ${(props ) => props.marginLeft || '0px'};
    margin-bottom: ${(props ) => props.marginBottom || '0px'};
    margin-right: ${(props ) => props.marginRight || '0px'};
    margin-top: ${(props ) => props.marginTop || '0px'};
    display: inline-block;
    line-height: 1;
    width: ${(props ) => props.width || '45%'};
    height: ${(props ) => props.height || '15px'};
`