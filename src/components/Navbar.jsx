import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart } from '@mui/icons-material';
import  Badge  from '@mui/material/Badge';
import {mobile} from '../responsive';
import {Link, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: '10px 0',
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  cursor: pointer;
  ${mobile({
    display: 'none',
  })}
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: .5px solid lightgray;
  margin-left: 10px;
`
const Input = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  ${mobile({
    width: '50px',
  })}
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: '20px',
  })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: flex-end;
  ${mobile({
     justifyContent: 'center',
     gap: '15px'
  })}
`
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  ${mobile({
     fontSize: '16px',
  })}
`


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const {id} = useParams();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type="text" placeholder='Search'/>
            <Search style={{color: 'gray', fontSize: '18px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopper</Logo>
        </Center>
        <Right>
          <Link to='/register'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to='/login'>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to={`/${id}/cart`}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar