import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import {mobile} from '../responsive';
const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const TopButton = styled.button`
    padding: 15px 20px;
    cursor: pointer;
    background-color: ${(props) => props.type === 'filled' ? '#000' : '#fff'};
    color: ${(props) => props.type === 'filled' ? '#fff' : '#000'};
    border: 2px solid black;
    outline: none;
    font-size: 16px;
    &:hover{
        background: ${(props) => props.type === 'filled' ? '#fff' : '#000'};
        color: ${(props) => props.type === 'filled' ? '#000' : '#fff'};
    }
    ${mobile({
       padding: '5px 10px',
       fontSize: '14px'
    })}
`
const TopTexts = styled.div`
    display: flex;
    gap: 20px;
    ${mobile({
      display: 'none',
    })}
`

const TopText = styled.span`
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
       flexDirection: 'column',
    })}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    ${mobile({
      flexDirection: 'column',
    })}
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    gap: 20px;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ProductName = styled.h3`
    
`
const ProductId = styled.p`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background: ${props => props.color};
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
`
const ProductSize = styled.div`
    
`

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    ${mobile({
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginTop: '10px'
    })}
`

const ProductQuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({
      alignItems: 'center',
      marginBottom: '0'
    })}
`
const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:200;
`

const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;
`

const Summary  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px
`

const SummaryTitle = styled.h3`
    
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
`
const SummaryItemText = styled.span`
    font-weight: ${props => props.type === 'total' ? 600 : 400}
`
const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background: #ffffff;
    border: 2px solid black;

    &:hover{
        background: #000;
        color: white;
    };
`



const Cart = () => {
const cart = useSelector(state => state.cart);
console.log(cart);
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                 { cart?.products?.map(item => {
                    return <>
                    <Product>
                        <ProductDetails>
                            <Image src={item?.img}/>
                            <Details>
                                <ProductName><b>Product : </b>{item?.title}</ProductName>
                                <ProductId><b>ID : </b> {item?._id}</ProductId>
                                <ProductColor color={item?.color}/>
                                <ProductSize><b>Size : </b>{item?.size}</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductQuantityContainer>
                                <Add/>
                                <ProductQuantity>
                                    {item?.quantity}
                                </ProductQuantity>
                                <Remove/>
                            </ProductQuantityContainer>
                            <ProductPrice>
                                {item?.price * item.quantity}
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    </>
                })  }
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shiping</SummaryItemText>
                        <SummaryItemPrice> $ 20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice> $ -5.8</SummaryItemPrice>
                    </SummaryItem>
                    <Hr/>
                    <SummaryItem>
                        <SummaryItemText type='total'>Total</SummaryItemText>
                        <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart