import React from 'react';
import styled from 'styled-components';
import master from '../images/master2.png';
import ruyeon from '../images/ruyeon.png';
export default function About() {
    return (
        <>
            <Aboutbg></Aboutbg>
            <Masterpic></Masterpic>
            <Ruyeonpic></Ruyeonpic>
            <Info>
                <MainT>ABOUT US</MainT>
                <Lines></Lines>
                <SubT>
                    W&B 는 기본적으로 마스터의 아래<br></br>
                    밝고 웃음이 많은 W조와<br></br>
                    조용한 분위기가 강한 B조로 나누어져 있습니다.
                </SubT>
            </Info>
        </>
    );
}
const SubT = styled.p`
    font-size: 3vw;
    color: white;
    font-family: Pcpre;
    font-weight: 500;
`
const Lines = styled.div`
    width: 30vw;
    height: 0.5vw;
    margin-top: -1vw;
    background: white;
`
const MainT = styled.h1`
    font-family: TroyeS;
    font-weight: bold;
    font-size: 4vw;
    color: white;
`
const Info = styled.div`
    position: absolute;
    width: 90vw;
    height: 60vh;
    margin-left: 4vw;
    margin-top: 16vh;
    z-index: 4;
`
const Masterpic = styled.img.attrs({
    src: `${master}`
})`
    position: absolute;
    margin-left: 10vw;
    margin-top: 5vh;
    height: 25vw;
    z-index: 1
`
const Ruyeonpic = styled.img.attrs({
    src: `${ruyeon}`
})`
    position: absolute;
    z-index: 1;
    margin-left: 55vw;
    margin-top: 22.5vw;
    width: 40vw;
`
const Aboutbg = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    z-index: 2;
`