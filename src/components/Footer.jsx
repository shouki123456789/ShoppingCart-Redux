import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
      
  
<div style={{height:'400px'}} className="d-flex justify-content-center align-items-center p-1 bg-primary flex-column text-white">
  <div className="d-flex justify-content-evenly mb-5 w-100">
    <div style={{width:'300px'}} className="">
      <h5>Daily cart</h5>
      <div>Designed and built with all the love in the world by</div>
      <div>the Luminar team with the help of our contributors</div>
      <div>Code licensed Luminar, docs CC BY 3.0.</div>
      <div>Currently v5.3.2</div>
    </div>
    <div className="d-flex flex-column">
      <h5>Links</h5>
      <Link to={'/'} className="text-decoration-none text-light">Landing Page</Link>
      <Link to={'/'} className="text-decoration-none text-light">Home Page</Link>
      <Link to={'/'} className="text-decoration-none text-light">Watch History Page</Link>
    </div>
    <div className="d-flex flex-column ">
      <h5>Guides</h5>        
      <a className="text-decoration-none text-light" href='/'>React</a>
      <a className="text-decoration-none text-light" href='/'>React Bootstrap</a>
      <a className="text-decoration-none text-light" href='/'>React Router</a>
    </div>
    <div className="">
      <h5 className='mb-3'>Contact Us</h5>        
      <div className='d-flex jusify-content-center mb-4' ><input className='form-control' placeholder='enter your email here'/><FontAwesomeIcon className="mt-2 ms-2" icon={faArrowRight} /></div>
      <div className='d-flex jusify-content-center mt-2 ms-1 fs-3'>
        <FontAwesomeIcon icon={faFacebook} className="me-3 fs-3"/>
        <FontAwesomeIcon icon={faInstagram} className="me-3 fs-3" />
        <FontAwesomeIcon icon={faTwitter} className="me-3 fs-3" />
        <FontAwesomeIcon icon={faWhatsapp}  />
      </div>
    </div>
    
  </div>
  <p className='text-center'>copyright c aug 2025 Batch, Daily Cart. Built with React Redux</p>
</div>

    </>
  )
}

export default Footer
