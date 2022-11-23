import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
const Container = styled.div`
    background-color: #e2f7f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;   
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 30px;
`
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
     textAlign: 'center',
  })}
`

const InputContainer = styled.div`
    width: 50%;
    display: flex;
    ${mobile({
     width: '80%',
  })}
`
const Input = styled.input`
    flex: 8;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 16px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #0b7b3f;
    color: white;
    cursor: pointer;
`
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favourite products.</Description>
        <InputContainer>
            <Input placeholder='Your Email' />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter