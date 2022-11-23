import { FacebookOutlined, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive';
const Container = styled.div`
    color: #e7e6e6; 
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    ${mobile({
     flexDirection: 'column',
  })}  
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;     
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
     display: 'none',
  })}
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin:0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`
const ListItems = styled.li`
    margin:0;
    padding: 0;
    width: 49%;
    font-size: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        /* color: #; */
        filter: brightness(300%);
    }   
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1`
`

const Desc = styled.p`
`
const SocialContainer = styled.div`
    display: flex;  
    gap: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 10px 0;
    font-size: 16px;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
    }

`

const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    Shopper
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus expedita ut reprehenderit molestias, eos deserunt labore dolorum quia quidem eligendi.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems>
                        Women
                    </ListItems>
                    <ListItems>
                        Men
                    </ListItems>
                    <ListItems>
                        Women
                    </ListItems>
                    <ListItems>
                        Men
                    </ListItems>
                    <ListItems>
                        Kids
                    </ListItems>
                    <ListItems>
                        Ethinic
                    </ListItems>
                    <ListItems>
                        Women
                    </ListItems>
                    <ListItems>
                        Men
                    </ListItems>
                    <ListItems>
                        Kids
                    </ListItems>
                    <ListItems>
                        Ethinic
                    </ListItems>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem><Room/> 221B, Baker Street, London, UK.</ContactItem>
                <ContactItem><Phone/> +91 123467324</ContactItem>
                <ContactItem><Mail/> support@shopper@com</ContactItem>
                <Payment src="https://static.vitra.com/media-resized/Q9d3vWQN0fRmXUKB_BBuyWrRHf7Ujq-Mu27jFzt7zxM/fill/750/274/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYwOTUzNDMvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82Njk0Mjc5My5qcGc.jpg" />
            </Right>
        </Container>
    )
}

export default Footer