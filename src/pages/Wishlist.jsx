
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,  faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {
  // console.log(useSelector(state=>state.wishlistReducer));
  const userWishList = useSelector(state=>state.wishlistReducer)
  
  const dispatch = useDispatch()

  const userCart = useSelector(state=>state.cartReducer)

  const handleAddToCart =(products)=>{
      const existingProduct = userCart?.find(item=>item.id==products.id)
      dispatch(addToCart(products))
      dispatch(removeWishlistItem(products.id))
      Swal.fire({
           title: "Success!!!",
          text: existingProduct ?"Product quantity updated in your wishlist": "product added to your cart",
          icon:'success',
          confirmButtonText:'Ok'
                
        })
  
    }
    
  
  return (
    <>
      <Header/>
      <div className='my-5 container'>
        {
          userWishList.length>0 ?
          <>
          <h1 className='pt-5 fw-bold text-primary'>WishList</h1>
          
            <div className='row pt-5'>
              {
              userWishList?.map(pdt=>(
                <div key={pdt?.id} className='col-md-3 mb-2'>
                <Card >
                  <Card.Img height={'250px'} variant="top" src={pdt?.thumbnail} />
                  <Card.Body className='text-center'>
                    <Card.Title>{pdt?.title}</Card.Title>
                    <div className='d-flex  justify-content-evenly mt-5'>
                      <button onClick={()=>dispatch(removeWishlistItem(pdt?.id))} className='btn text-danger fs-1'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                      <button onClick={()=>handleAddToCart(pdt)} className='btn btn-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              )
                
              )  
              }
            </div>
          </>
       
          :
          <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img width={'50%'} src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAg1AAZAA0" alt="empty cart"/>
            <h3>your wishlist is empty</h3>
            <Link to={'/'} className='btn btn-primary'>Shop More</Link>
          </div>
         
        }
      
      </div>
    </>
  )
}

export default Wishlist
