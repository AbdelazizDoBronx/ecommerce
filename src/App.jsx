import React from 'react'
import HomePage from './pages/HomePage'
import NoticeBar from './components/NoticeBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

const App = () => {
   return(
      <div className='font-Poppins'>
        {/* max-w-[1200px] mx-auto  */}
        <NoticeBar/>
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
   )
}

export default App