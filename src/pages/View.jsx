import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice';

function View() {
  const {id} = useParams()
  
  //console.log(id);
  
  const [products,setProduct] = useState({})
  
  //console.log(products) 
  const dispatch = useDispatch()
  const userWishList = useSelector(state=>state.wishlistReducer)
   
  useEffect(()=>{
    getProductDetails()
  },[])

  const getProductDetails = ()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("products"))
    setProduct(allProducts?.find(item=>item.id==id))
  } 
   

  const handleAddToWishlist = ()=>{
    const existingProduct = userWishList?.find(item=>item.id==id)
    if(existingProduct){
  
      Swal.fire({
         title: "Sorry!!!",
        text: "Product already in your wishlist",
        icon:'error',
        confirmButtonText:'Ok'
              
      })
       

  }else{
    dispatch(addToWishlist(products))
  }
  }
 

  const userCart = useSelector(state=>state.cartReducer)

  const handleAddToCart =()=>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(products))
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
    <div className='container-fluid my-5'>
      <div className="row pt-5 align-items-center">
        <div className='col-md-6 text-center'>
          <img className='img-fluid' width={'400px'} src={products?.thumbnail}/>
          <div className='d-flex  justify-content-evenly mt-5'>
            <button onClick={handleAddToWishlist} className='btn btn-info'>Add to wishlist</button>
            <button onClick={handleAddToCart} className='btn btn-success me-5'>Add to Cart</button>
          </div>
        </div>
        <div className='col-md-6 mt-5 ms-3'>
          <h1>Title:{products?.title}</h1>
          <h2>$ Price:{products?.price}</h2>
          <h3>Brand:{products?.brand}</h3>
          <h4>Description:{products?.description}</h4>
          <h5>Client reviews:</h5>
          {
          products?.reviews?.length >0 &&
          products?.reviews?.map((item,index)=>(
          <div key={index} className='my-2 border rounded shadow p-2'>
            <p className='fw-bold'>{item.reviewerName} : <span>{item.comment}</span></p>
             <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar}  className='text-warning'/></p>
          </div>
          ))
          }
        </div>
        
      </div></div>
    </>
  )
}

export default View
