import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'
function Cart() {
  const navigate =useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [sum,setSum] =useState(0)

  useEffect(()=>{
    setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (products)=>{
    if(products.quantity>1){
      dispatch(decrementCartItem(products.id))
    }else{
      dispatch(removeCartItem(products.id))
    }
  }


  const checkout = ()=>{
    Swal.fire({
             title: "Success!!!",
            text: "Thank you for purchase with us",
            icon:'success',
            confirmButtonText:'Ok'
                  
          })
          dispatch(emptyCart)
          navigate('/')
  }
  return (
    <>
    <Header/>
    <div>
      {
        userCart?.length>0 ?
        <div className='container pt-5 mb-5'>
        <h1 className='text-danger my-5'>Cart Summery</h1>
        <div className="row">
          <div className="col-md-8 border p-5 rounded">
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>....</th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart?.map((pdt,index)=>(
                    <tr >
                  <td>{index+1}</td>
                  <td>{pdt?.title}</td>
                  <td><img style={{width:'50px'}} src={pdt?.thumbnail}/></td>
                  <td><div className='d-flex'>
                    <button  onClick={()=>dispatch(handleDecrementCart(pdt))} className='btn fs-4'>-</button>
                    <input style={{width:'50px'}} type='text' value={pdt?.quantity} className='form-control' readOnly/>
                    <button onClick={()=>dispatch(incrementCartItem(pdt?.id))} className='btn fs-4'>+</button></div></td>
                  <td>${pdt.totalPrice}</td>
                  <td><button onClick={()=>dispatch(removeCartItem(pdt?.id))} className='btn'><FontAwesomeIcon className='text-danger' icon={faTrash} /></button></td>
                </tr>
                  ))
                }
              </tbody>
            </table>
            <div className='float-end mt-3'>
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-5'>Empty Cart</button>
              <Link to={'/'} className="btn btn-info">Shop More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className='bordr p-5 rounded shadow'>
              <h3>TotalAmount : <span className='text-danger'>${sum}</span></h3>
               <hr/>
               <div className='d-grid'>
                <button onClick={checkout} className='btn btn-success'>CHECKOUT</button>
               </div>
            </div>
          </div>
        </div>
      </div>
      :

      <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img width={'50%'} src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAg1AAZAA0" alt="empty cart"/>
            <h3>your cart is empty</h3>
            <Link to={'/'} className='btn btn-primary'>Shop More</Link>
          </div>
      }
    </div>
    </>
  )
}

export default Cart
