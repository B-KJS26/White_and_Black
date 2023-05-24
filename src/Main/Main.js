import React from 'react';
import styled, { keyframes } from 'styled-components';
const create = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
export default function Main() {
    return (
        <Mainbg>
            <h1>yoyoyoyoyyo</h1>
        </Mainbg>
    );
}
const Mainbg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    animation: ${create} 1s 3.5s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
`