import React from 'react';
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
import styled, { keyframes } from 'styled-components';
import logo from '../images/light.png';
import Main from '../Main/Main';
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
        margin-left: 12vw;
        letter-spacing: 1vw;
        animation-timing-function:ease-in-out;
    }
    to {
        margin-left: 22vw;
        letter-spacing: 0.75vw;
        animation-timing-function:ease-in-out;
    }
`;
const setposition = keyframes`
    from {
    }
    to{
        margin-left: 10.5vw;
    }
`
const mining = keyframes`
    from {
        margin-left: 8vw;
    }
    to {
        margin-left: -12vw;
    }
`
const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1.0;
    }
`
const noneing = keyframes`
    from {
        visibility: visible;
    }
    to {
        opacity: 0;
        visibility: hidden;
    }
`
export default function Splash() {
    const text1Ref = useSpringRef();
    const text1Style = useAnimation(text1Ref);
    useChain([text1Ref]);
    return (
        <>
            <SplashMain>
                <Texting>
                    <animated.h1 style={text1Style}><Exceptions>W</Exceptions><Disappearing>hite</Disappearing>
                        <Minusmargin>
                            & <Blacktext>B</Blacktext><Disappearingtwo>lack</Disappearingtwo>
                        </Minusmargin>
                    </animated.h1>
                </Texting>
                <Needle></Needle>
            </SplashMain>
            <Main />
        </>
    );
}
const Blacktext = styled.span`
    color: black;
    margin-left: 4.4vw;
`
const Needle = styled.img.attrs({
    src: `${logo}`
})`
    position: absolute;
    width: 45vw;
    height: auto;
    margin-left: 28.1vw;
    margin-top: 21vh;
    z-index: 0;
    opacity: 0;
    animation: ${fadein} 2s 1.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`;
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
    color: black;
`
const Disappearingtwo = styled.span`
    animation: ${deleteanimation} 1s 1s;
    animation-timing-function:ease-in-out;
    //애니메이션 끝나더라도 유지하깅
    animation-fill-mode: forwards;
    color: white;
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
    animation: ${noneing} 1s 3.5s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
    
`
const Texting = styled.span`
    position: absolute;
    margin-left: 12vw;
    letter-spacing: 1vw;
    margin-top: 29vh;
    font-size: 3vw;
    font-family: 'TroyeSe';
    color: #fff;
    text-shadow: 0 0 0px #f8f8ff, 0 0 0px #f8f8ff, 0 0 10px #f8f8ff, 0 0 70px #f8f8ff, 0 0 100px #f8f8ff;
    -webkit-box-reflect: below -21vh -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.35, transparent), to(rgba(255, 255, 255, 1)));
    animation: ${wbanimation} 1s 1s;
    animation-timing-function:ease-in-out;
    //애니메이션 끝나더라도 유지하깅
    animation-fill-mode: forwards;
    z-index: 10;
`
