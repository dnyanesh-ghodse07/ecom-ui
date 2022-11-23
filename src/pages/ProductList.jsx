import React, {useState} from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import {mobile} from '../responsive';
import {useLocation} from 'react-router-dom';

const Container = styled.div`
    
`
const Title = styled.div`
    margin: 20px;
    font-size: 25px;
    color: #1c97ea;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
      fontSize: '14px',
    })}
`

const Select = styled.select`
    padding: 8px;
    margin-right: 10px;
    ${mobile({
      width: '80%',
      margin: '4px 0'
    })}
`

const Option = styled.option`
    padding: 8px;
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value
        });
    }

    console.log(filters)

    return (
        <Container>
            <Announcements />
            <Navbar />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products :
                    </FilterText>
                    <Select name='color' onChange={handleFilter}>
                        <Option selected disabled>Color</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select name='size' onChange={handleFilter}>
                        <Option selected disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products :
                    </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (high to low)</Option>
                        <Option value='desc'>Price (low to high)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList