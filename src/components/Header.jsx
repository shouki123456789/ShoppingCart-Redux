import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar,Nav,Container, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/slices/productSlice'

function Header() {
  const dispatch = useDispatch()

 const userWishList = useSelector(state=>state.wishlistReducer)
 const userCart = useSelector(state=>state.cartReducer) 
 // console.log(userWishList);
  
  //console.log(userWishList);
  
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='text-decoration-none text-light fw-bold'>
              <FontAwesomeIcon icon={faTruckFast} className='me-1'/>
                Daily Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Item><input type="text" onChange={e=>dispatch(search(e.target.value))} className="form-control" placeholder='search product'/></Nav.Item>
            <Link to={'/wishlist'} className='m-4 text-decoration-none text-light fw-bold'>
            <FontAwesomeIcon icon={faHeart} className='text-danger me-1'/>
            Wishlist
            <Badge pill bg='secondary'>
            {userWishList.length}
            </Badge>
            </Link>
            <Link to={'/cart'} className='ms-4 text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faCartPlus} className='text-success me-1'/>Cart
            <Badge pill bg='secondary'>
             {userCart.length}
            </Badge></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
