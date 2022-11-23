import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
`
const Logo = styled.div`
    font-size: 20vw;
    opacity: .2;
    position: absolute;
    top: 0;
    left:10px;
    z-index: 1;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
      flex: 3,
    })}
`

const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 50px;
    color: #000000;
    background-color: white;
    z-index: 5;
`
const Link = styled.a`
    color: 001;
    text-decoration: none;
`
const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap:15px;
`

const Input = styled.input`
    width: 60%;
    font-size: 18px;
    padding: 10px;
    outline: none;
    border: 2px solid black;
    z-index: 2;
    ${mobile({
      width: '80%',
    })}
`

const Button = styled.button`
    width: 100px;
    padding: 10px 20px;
    margin-top: 30px;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    color: #000;
    border: 2px solid black;
    outline: none;
    &:hover{
        background: #000000;
        color: white;
        border: 2px solid white;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Shopper</Logo>
                <Image src='https://images.pexels.com/photos/2346735/pexels-photo-2346735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </Left>
            <Right>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Link href='#'>Forgot password ?</Link>
                <Link href='#'>Create a new account.</Link>
                <Button>Login</Button>
            </Form>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Login