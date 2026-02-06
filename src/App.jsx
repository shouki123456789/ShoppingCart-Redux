import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Footer from './components/Footer'
import PageNotf from './pages/PageNotf'
import Cart from './pages/Cart'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/products/:id/view' element={<View/>}/>
        <Route path='/*' element={<PageNotf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
