import React, { useState } from 'react';
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
import styled, { keyframes } from 'styled-components';
export default function Splash() {
    const [text, setText] = useState('White and Black');
    const text1Ref = useSpringRef();
    const text2Ref = useSpringRef();
    const text3Ref = useSpringRef();

    const text1Style = useAnimation(text1Ref);
    const text2Style = useAnimation(text2Ref);
    const text3Style = useAnimation(text3Ref);

    useChain([text1Ref, text2Ref, text3Ref]);
    return (
        <SplashMain>
            <Texting>
                <animated.h1 style={text1Style}>{text}</animated.h1>
            </Texting>
        </SplashMain>
    );
}

const wbanimation = keyframes`
	from {
        margin-left: 2.5%;
        letter-spacing: 50px;
        animation-timing-function:ease-in-out;
    }
    to {
        margin-left: 18%;
        letter-spacing: 10px;
        animation-timing-function:ease-in-out;
    }
`;

const useAnimation = ref => {
    const spring = useSpring({
        from: {
            opacity: 1
        },
        to: [{
            opacity: 1
        },
        {
            opacity: 1
        },
        ],
        ref: ref
    });
    return spring;
};

const SplashMain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 9999;
`
const Texting = styled.span`
    position: absolute;
    margin-left: 2.5%;
    letter-spacing: 50px;
    margin-top: 13%;
    font-size: 80px;
    font-family: 'Readline';
    color: #fff;
    text-shadow: 0 0 0px #f8f8ff, 0 0 0px #f8f8ff, 0 0 10px #f8f8ff, 0 0 70px #f8f8ff, 0 0 100px #f8f8ff;
    animation: ${wbanimation} 1s 1s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
`
