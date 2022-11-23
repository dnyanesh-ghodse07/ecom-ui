import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Info  = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e4f4fb;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }

`

const Image = styled.img`
    height: 100%;
    z-index: 2;
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    &:hover{
        background: black;
        color: white;
        transition: all .5s ease-in-out;
        transform: scale(1.2);
    }

`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                    <Search/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product