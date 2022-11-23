import styled from "styled-components"
import {mobile} from '../responsive';

const Container = styled.div`
    background-color: #4faac8;
    padding: 5px;
    color: white;
    text-align: center;
    ${mobile({
      display: 'none',
  })}
`

const Announcements = () => {
  return (
    <Container>
        Super Deal ! Free shipping on order above Rs.500.
    </Container>
  )
}

export default Announcements