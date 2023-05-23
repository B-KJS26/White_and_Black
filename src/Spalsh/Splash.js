import React, { useState } from 'react';
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
import styled, { keyframes } from 'styled-components';

const deleteanimation = keyframes`
	from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const wbanimation = keyframes`
	from {
        margin-left: 5vw;
        letter-spacing: 60px;
        animation-timing-function:ease-in-out;
    }
    to {
        margin-left: 18vw;
        letter-spacing: 10px;
        animation-timing-function:ease-in-out;
    }
`;
const setposition = keyframes`
    from {
    }
    to{
        margin-left: 15.5vw;
    }
`
const mining = keyframes`
    from {
        margin-left: 8vw;
    }
    to {
        margin-left: -7.5vw;
    }
`
export default function Splash() {
    const text1Ref = useSpringRef();
    const text1Style = useAnimation(text1Ref);
    useChain([text1Ref]);
    return (
        <SplashMain>
            <Texting>
                <animated.h1 style={text1Style}><Exceptions>W</Exceptions><Disappearing>hite</Disappearing>
                    <Minusmargin>
                        & B<Disappearing>lack</Disappearing>
                    </Minusmargin>
                </animated.h1>
            </Texting>
        </SplashMain>
    );
}
const Minusmargin = styled.span`
    animation: ${mining} 1s 1s;
    margin-left: 8vw;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`
const Exceptions = styled.span`
    animation: ${setposition} 1s 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`
const Disappearing = styled.span`
    animation: ${deleteanimation} 1s 1s;
    animation-timing-function:ease-in-out;
    //애니메이션 끝나더라도 유지하깅
    animation-fill-mode: forwards;
`

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
    margin-left: 5vw;
    letter-spacing: 60px;
    margin-top: 25vh;
    font-size: 4.1vw;
    font-family: 'Readline';
    color: #fff;
    text-shadow: 0 0 0px #f8f8ff, 0 0 0px #f8f8ff, 0 0 10px #f8f8ff, 0 0 70px #f8f8ff, 0 0 100px #f8f8ff;
    animation: ${wbanimation} 1s 1s;
    animation-timing-function:ease-in-out;
    //애니메이션 끝나더라도 유지하깅
    animation-fill-mode: forwards;
`
