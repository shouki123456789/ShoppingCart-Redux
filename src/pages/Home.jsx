import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch()
  const {allProducts,loading,error}= useSelector((state)=>
state.productReducer 
  )
  //console.log(allProducts);

  //pagination
  const [currentPage,setCurrentpage] =useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageLastIndex = currentPage*productsPerPage
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage 
  const visibleProductArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])


  
  const navigateNext = ()=>{
    if(currentPage!=totalPages){
      setCurrentpage(currentPage+1)
    }
  } 
   const navigateprev = ()=>{
    if(currentPage!=1){
      setCurrentpage(currentPage-1)
    }
  } 
  return (
    <>
     <Header/> 
     <div className='m-5'>
      {
        loading ? 
        <div className='p-5 text-center'>
          <img width={'200px'} src="https://cdn.dribbble.com/userupload/24031440/file/original-09559e5c3ffd3116a53cc071716e4d88.gif"/>
          
        </div>
        :
        <div className='row pt-5'>
        {
          allProducts?.length>0 ?
            visibleProductArray?.map(pdt=>(
           
              <div key={pdt?.id} className='col-md-3 mb-2'>
                <Card >
                  <Card.Img height={'200px'} variant="top" src={pdt.thumbnail} />
                  <Card.Body className='text-center'>
                    <Card.Title>{pdt?.title.slice(0,18)}..</Card.Title>
              
                    <Link to={`/products/${pdt?.id}/view`} className='btn btn-primary'>View More...</Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          :
          <p>product not found</p>
        }
        <div className="text-center fw-bold my-3">
          <button onClick={navigateprev} className='btn'><FontAwesomeIcon icon={faBackward} /></button>
          {currentPage} of {totalPages} <button onClick={navigateNext} className='btn'><FontAwesomeIcon icon={faForward} /></button>
        </div>
      </div>
      }
     </div>

    </>
  )
}

export default Home
