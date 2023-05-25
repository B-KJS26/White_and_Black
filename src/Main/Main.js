import React from 'react';
import styled, { keyframes } from 'styled-components';
import bg from '../images/background.jpg';
import Header from './Header/Header';
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
        <>
            <Mainbg>
                <Header />
                <Mainback />
                <Groups>
                    <Groupname>W&B</Groupname>
                    <Groupfullname>White and Black</Groupfullname>
                    <Morebutton>
                        <Texts>
                            More +
                        </Texts>
                    </Morebutton>
                </Groups>
            </Mainbg>
            <TwoMain>

            </TwoMain>
        </>
    );
}
const TwoMain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: yellow;
    margin-top: 100vh;
`
const Texts = styled.p`
    padding-top: 1.8vh;
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
    height: 10vh;
    background-color: white;
    margin-top: -5vh;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        transition: all ease-in-out .5s;
    }
`
const Groups = styled.div`
    position: absolute;
    margin-left: 3.5vw;
    width: 40vw;
    height: 50vh;
    margin-top: 20vh;
    
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
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    animation: ${create} 1s 3.5s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
    
`