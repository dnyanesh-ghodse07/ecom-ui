import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { publicRequest } from '../requestMethods'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import {mobile} from '../responsive';
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
      flexDirection: 'column',
      padding: '20px'
    })}

`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 50%;
    ${mobile({
      width: '100%',
    })}

`

const InfoContainer = styled.div`
    flex: 1;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; */
    padding: 50px;
    ${mobile({
     padding: '10px',
    })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
    
`

const Price = styled.span`
    font-weight: 100;  
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 20px;
    ${mobile({
     justifyContent: 'space-between',
    })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const FilterTitle = styled.h3`
    
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`

const FilterSize = styled.select`
padding: 5px;

`

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 60px;
    align-items: center;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
`

const Quantity = styled.div`
    width: 25px;
    height: 25px;
    border: 2px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`

const Button = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    background: #ffffff;
    border: 2px solid black;
    cursor: pointer;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &:hover{
        background: #000000;
        color: white;
        border: 2px solid white;
    }
`


const Product = () => {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`)
                    setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[id])

    const handleQuantity = (qunt) => {
        if( qunt === 'dec'){
            setQuantity(prev => prev > 0 ? prev - 1 : 0);
        }else if(qunt === 'inc'){
            setQuantity(prev => prev >= 0 ? prev + 1 : 0);
        }
    }

    const handleAddToCart = () => {
        dispatch(addProduct({...product, quantity, color, size}))
    }

    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImageContainer>
                    <Image src={product?.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product?.title}
                    </Title>
                    <Desc>{product?.desc}</Desc>
                    <Price>₹{product?.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color : </FilterTitle>
                            {
                                product?.color.map(item => {
                                    return <FilterColor key={item} color={item} onClick={() => setColor(item)}/>
                                })
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size : </FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {
                                    product?.size?.map(item => {
                                        return  <FilterSizeOption key={item}  >{item}</FilterSizeOption>
                                    })
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove onClick={() => handleQuantity('dec')} style={{cursor: 'pointer'}}/>
                            <Quantity>
                                {quantity}
                            </Quantity>
                            <Add onClick={() => handleQuantity('inc')} style={{cursor: 'pointer'}}/>
                        </QuantityContainer>
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product