import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import {sliderItems} from "../data";
import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: orange;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({
    display: 'none',
  })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #f1f1f1;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: '100%';
    display: flex;
    transform: translateX(${props => props.in * -100}vw);
    transition: all 1s ease;
    animation: 4s linear 0s infinite;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: ${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    border: 1px solid black;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
        border-color: white;
    }
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        console.log(slideIndex);
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper in={slideIndex}>
            {sliderItems.map(item => {
            return <Slide bg={item.bg}>
            <ImgContainer>
            {/* https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/1/3/13d7977LDRVCH01N28992564-GREEN.jpg?rnd=20200526195200 */}
                <Image src={item.img}/>         
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        })}   
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider