import React from 'react';
import styled, { keyframes } from 'styled-components';
import bg from '../images/background.jpg';
import { useRef } from 'react';
import About from '../pages/About';
import Members from '../pages/Member';
import masterypic from '../images/mastery.png'
const create = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const scroll = keyframes`
    0% { opacity: 0; }
    10% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(25px); opacity: 0;}
`

export default function Main() {
    const secondform = useRef();  //특정 DOM을 가리킬 때 사용하는 Hook함수, SecondDiv에 적용
    const thirdform = useRef();
    //Twomain으로 이동
    const godown = () => {
        secondform.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const gomember = () => {
        thirdform.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <Yo>
            <Mainbg>
                <Headers>
                    <FirstText onClick={godown}>About us</FirstText>
                    <Line>I</Line>
                    <SeoncdText on onClick={gomember}>Members</SeoncdText>
                </Headers>
                <Mainback />
                <Groups>
                    <Groupname>W&B</Groupname>
                    <Groupfullname>White and Black</Groupfullname>
                    <Morebutton onClick={godown}>
                        <Texts>
                            More +
                        </Texts>
                    </Morebutton>
                </Groups>
                <Scrolldenote onClick={godown}>
                    <Mousey>
                        <Scroller></Scroller>
                    </Mousey>
                </Scrolldenote>
                <Matext>DOHWA</Matext>
                <SubMa>W&B MASTER</SubMa>
                <Mastery>
                </Mastery>
            </Mainbg>
            <TwoMain ref={secondform}>
                <About />
            </TwoMain>
            <ThreeMain ref={thirdform}>
                <Members />
            </ThreeMain>
        </Yo>
    );
}

const Matext = styled.h1`
    z-index: 5;
    font-size: 4vw;
    margin-left: 65vw;
    margin-top: 10vw;
    position: absolute;
    font-family: Troyes;
    color: white;
`
const SubMa = styled.h1`
    z-index: 5;
    font-size: 3vw;
    margin-left: 70vw;
    margin-top: 14vw;
    position: absolute;
    font-family: Troyes;
    color: white;
`
const Mastery = styled.img.attrs({
    src: `${masterypic}`
})`
    position: absolute;
    margin-left: 57vw;
    margin-top: 20vw;
    width: 35vw;
`
const ThreeMain = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -ms-overflow-style:none;
    scrollbar-width:none;
    &::-webkit-scrollbar {
        display: none;
    }
`
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
const Yo = styled.div`
    width: 100%;
    height: 300vh;
    overflow: hidden;
`
const Scroller = styled.div`
    width: 0.3vw;
    height: 1vh;
    border-radius: 25%;
    background-color: #fff;
    animation: ${scroll};
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(.15,.41,.69,.94);
    animation-iteration-count: infinite;
`
const Mousey = styled.div`
    width: 0.3vw;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
`
const Scrolldenote = styled.div`
    position: absolute;
    margin-left: 50%;
    margin-top: 88vh;
    transform: translateX(-50%);
    width : 2vw;
    height: 8vh;
    cursor: pointer;
`
const TwoMain = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
`
const Texts = styled.p`
    padding-top: 0.9vw;
    font-family: TroyeS;
    font-weight: bold;
    font-size: 2vw;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-left: 1.5vw;
`
const Morebutton = styled.div`
    width: 20vw;
    height: 5vw;
    background-color: white;
    margin-top: -5vh;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        transition: all ease-in-out .5s;
    }
`
const Groups = styled.div`
    display: block;
    position: absolute;
    margin-left: 3.5vw;
    width: 40vw;
    height: 50vh;
    margin-top: 17vh;
    
`
const Groupfullname = styled.p`
    margin-top: -5vh;
    font-size: 5vw;
    font-family: 'TroyeS';
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 40px rgba(255, 255, 255, 1);
`
const Groupname = styled.p`
    font-size: 3.5vw;
    font-family: 'TroyeS';
    font-weight: bold;
    color: white;
`
const Mainback = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${bg});
    background-size: cover;
    box-shadow: inset 0px 0px 50px 150px rgba(0, 0, 0, 0.5);
    filter: blur(3.5px);
`
const Mainbg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gray;
    animation: ${create} 1s 3.5s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
    
`