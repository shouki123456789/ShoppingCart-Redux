import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PageNotf() {
  return (
    <>
    <Header/>
    <div style={{height:'70vh'}}className=' my-5 fw-1 d-flex justify-content-center align-items-center flex-column'>
        <h1 className='my-5 fw-bold text-danger'>Look like you lost..!!!</h1>
        <img width={'500'} src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="/>
    
    </div>
    <div className='text-center my-5'>
      <Link to={'/'} className='btn btn-primary'>Home</Link>
     
    </div> 
    </>
  )
}

export default PageNotf
