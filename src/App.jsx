import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
   return(
      <div className='font-Poppins'>
        {/* max-w-[1200px] mx-auto  */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
   )
}

export default App