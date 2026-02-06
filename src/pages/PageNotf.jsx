import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PageNotf() {
  return (
    <>
    <Header/>
    <div className='text-center mt-5 fw-1'>
        <h1 className='pt-5 fw-bold text-danger'>Look like you lost..!!!</h1>
        <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="/>
    <Link to={'/'} className='btn btn-primary'>Home</Link>
    </div>
    </>
  )
}

export default PageNotf
