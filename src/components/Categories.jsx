import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
     flexDirection: 'column',
  })}
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map(item => {
                return <CategoryItem item={item} />
            })
        }
    </Container>
  )
}

export default Categories