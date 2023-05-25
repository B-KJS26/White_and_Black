import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import chung from '../images/Chung.png';
import master from '../images/dohwa.png';
import effect from '../images/effect.png';
import effectwo from '../images/effect2.png';
import effecthree from '../images/fire.png';
import bg from '../images/background.png';
import ruyeonss from '../images/ruyeonss.png';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
    },
    slide2: {
    },
    slide3: {
    },
};

export default function Members() {
    return (
        <>
            <AutoPlaySwipeableViews>
                <Firstpage style={Object.assign({}, styles.slide1)}>
                    <FirstText>MEMBERS</FirstText>
                    <Information>
                        <Name>
                            <Na>청정수</Na>
                            <Identity>Team W</Identity>
                        </Name>
                        <BlackLine></BlackLine>
                    </Information>
                    <Middle>
                        <Express>W팀 소속이다.</Express>
                    </Middle>
                    <Profile>
                    </Profile>
                    <Effect>
                    </Effect>
                </Firstpage>
                <Secondpage style={Object.assign({}, styles.slide2)}>
                    <SecondText>MEM<Differ>BERS</Differ></SecondText>
                    <Informationtwo>
                        <Name>
                            <Natwo>DOHWA</Natwo>
                            <Identitytwo>Master</Identitytwo>
                        </Name>
                        <WhiteLine></WhiteLine>
                        <Expresstwo>W&B의 마스터이다.</Expresstwo>
                        <Profiletwo>
                        </Profiletwo>
                        <Effectwo>
                        </Effectwo>
                        <SubEffectwo>
                        </SubEffectwo>
                    </Informationtwo>
                </Secondpage>
                <Thirdpage style={Object.assign({}, styles.slide3)}>
                    <ThirdText>MEMBERS</ThirdText>
                    <Informationthree>
                        <Name>
                            <Nathree>류연</Nathree>
                            <Identitythree>Team B</Identitythree>
                            <BlackLinetwo></BlackLinetwo>
                        </Name>
                    </Informationthree>
                    <Middletwo>
                        <Expressthree>B팀 소속이다.</Expressthree>
                    </Middletwo>
                    <Profilethree>
                    </Profilethree>
                    <Effecthree>
                    </Effecthree>
                    <SubEffecthree>
                    </SubEffecthree>
                </Thirdpage>
            </AutoPlaySwipeableViews>
        </>
    );
}
const Differ = styled.span`
    color: black;
`
const Effect = styled.img.attrs({
    src: `${effect}`
})`
    position: absolute;
    width: 35vw;
    margin-left: 5vw;
    transform: rotate(30deg);
`
const Effectwo = styled.img.attrs({
    src: `${effectwo}`
})`
    position: absolute;
    width: 28vw;
    margin-left: 0vw;
    transform: rotate(10deg);
`
const Effecthree = styled.img.attrs({
    src: `${effecthree}`
})`
    position: absolute;
    width: 35vw;
    margin-left: 45vw;
    margin-top: 7vw;
    transform: rotate(10deg);
`
const SubEffectwo = styled.img.attrs({
    src: `${effectwo}`
})`
    position: absolute;
    width: 28vw;
    margin-left: 20vw;
    transform: rotate(200deg);
`
const SubEffecthree = styled.img.attrs({
    src: `${effecthree}`
})`
    position: absolute;
    width: 30vw;
    margin-left: 65vw;
    margin-top: 10vw;
    transform: rotate(200deg);
`
const Profilethree = styled.img.attrs({
    src: `${ruyeonss}`
})`
position: absolute;
width: 30vw;
margin-left: 59vw;
margin-top: 10vw;
z-index: 3;
`
const Profiletwo = styled.img.attrs({
    src: `${master}`
})`
position: absolute;
width: 35vw;
margin-left: 12vw;
margin-top: -2vw;
z-index: 3;
`
const Profile = styled.img.attrs({
    src: `${chung}`
})`
    position: absolute;
    width: 25vw;
    margin-left: 11vw;
    margin-top: 1vw;
    z-index: 3;
`
const Express = styled.h1`
    position: absolute;
    font-size: 4vw;
    font-family: Pcre;
    margin-left: 6vw;
    margin-top: -0.3vw;
    color: white;
`
const Expresstwo = styled.h1`
    position: absolute;
    font-size: 4vw;
    font-family: Pcre;
    margin-top: 14vw;
    color: white;
`
const Expressthree = styled.h1`
    position: absolute;
    font-size: 4vw;
    font-family: Pcre;
    margin-top: -0.3vw;
    margin-left: 5vw;
    color: black;
`
const BlackLine = styled.div`
    position: absolute;
    width: 13vw;
    height: 0.5vw;
    margin-top: 10.5vw;
    background-color: black;
`
const BlackLinetwo = styled.div`
position: absolute;
width: 10vw;
height: 0.5vw;
margin-top: 8.5vw;
background-color: white;
`
const WhiteLine = styled.div`
    position: absolute;
    width: 13vw;
    height: 0.5vw;
    margin-top: 10.5vw;
    background-color: white;
`
const Identity = styled.p`
    font-family: Troyes;
    font-size: 2.5vw;
    font-weight: bold;
    margin-left: 1.5vw;
`
const Identitytwo = styled.p`
    font-family: Troyes;
    font-size: 2.5vw;
    font-weight: bold;
    margin-left: 2vw;
    color: white;
`
const Identitythree = styled.p`
    font-family: Troyes;
    font-size: 2.5vw;
    font-weight: bold;
    margin-left: 2vw;
    color: white;
`
const Na = styled.span`
    font-family: Pcpbold;
    font-size: 5vw;
`
const Natwo = styled.span`
    font-family: Pcpbold;
    font-size: 5vw;
    color: white;
`
const Nathree = styled.span`
    font-family: Pcpbold;
    font-size: 5vw;
    color: white;
`
const Name = styled.div`
    display: flex;
    position: absolute;
    width: 45vw;
    height: 20vh;
    margin-top: 3vw;
`
const Middle = styled.div`
    position: absolute;
    width: 100%;
    height: 5vw;
    margin-top: 15vw;
    background-color: black;
`
const Middletwo = styled.div`
    position: absolute;
    width: 100%;
    height: 5vw;
    margin-top: 25vw;
    background-color: white;
`
const Information = styled.div`
    position: absolute;
    width: 80vw;
    height: 55vh;
    margin-left: 5vw;
`
const Informationtwo = styled.div`
    position: absolute;
    width: 80vw;
    height: 55vh;
    margin-left: 5vw;
    margin-top: 12vw;
`
const Informationthree = styled.div`
    position: absolute;
    width: 80vw;
    height: 55vh;
    margin-left: 5vw;
    margin-top: 10vw;
`
const FirstText = styled.h1`
    letter-spacing: 5vw;
    color: black;
    font-family: Troyes;
    font-size: 3.5vw;
    margin-left: 5vw;
    margin-top: 8vh;
`
const SecondText = styled.h1`
    position: absolute;
    letter-spacing: 5vw;
    color: white;
    font-family: Troyes;
    font-size: 3.5vw;
    margin-left: 26.5vw;
    margin-top: 8vh;
`
const ThirdText = styled.h1`
    position: absolute;
    letter-spacing: 5vw;
    color: white;
    font-family: Troyes;
    font-size: 3.5vw;
    margin-left: 26.5vw;
    margin-top: 8vh;
`
const Firstpage = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
`
const Secondpage = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background: linear-gradient(
    to right,
    black 0%,
    black 45%,
    white 46%,
    white 100%
    );
`
const Thirdpage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
`