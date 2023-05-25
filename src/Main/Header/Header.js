import React from 'react';
import styled from 'styled-components';
export default function Header() {
    return (
        <>
            <Headers>
                <FirstText>About us</FirstText>
                <Line>I</Line>
                <SeoncdText>Members</SeoncdText>
            </Headers>
        </>
    );
}

const SeoncdText = styled.p`
    font-size: 1.5vw;
    font-family: 'TroyeS';
    margin-left: 3vw;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Line = styled.p`
    font-size: 1.5vw;
    font-family: 'TroyeS';
    margin-left: 3vw;
    font-weight: 600;
    color: white;
`
const FirstText = styled.p`
    font-size: 1.5vw;
    font-family: 'TroyeS';
    margin-left: 3.5vw;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
const Headers = styled.div`
    display: flex;
    position: absolute;
    margin-top: 2vh;
    width: 100%;
    height: 10vh;
    z-index: 1;
`