import React, { useState } from 'react'
import  {Menu, X} from 'lucide-react'
const LandingPage = () => {
  const [menu,setMenu] = useState(false);
  return (
    <div className='max-w-7xl mx-auto'>
      {/* nav for large devices */}
        <header className='hidden sm:flex justify-between items-center p-3 shadow-md rounded-md '>
          <h2 className='text-4xl font-semibold'>LogoHere</h2>
          <nav className='flex gap-5 font-medium'>
            <p>More</p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Conatxt US</p>
          </nav>
        </header>
        {/* nav for sm devices */}
        <header className=' sm:hidden flex justify-between items-center p-3 shadow-md rounded-md'>
          <h2 className='text-4xl font-semibold'>LogoHere</h2>
          <div>
            {!menu && <Menu className='cursor-pointer' onClick={()=>setMenu(!menu)}/>}
          </div>
        </header>
        <nav className={`${menu ? 'flex' : 'hidden'} p-4 shadow-md rounded-md  flex-col gap-2 border-b-2 border`}>
              <X className='w-full cursor-pointer hover:bg-neutral-500' size={24} onClick={()=>setMenu(!menu)}/>
              <p>More</p>
              <p>Protfolio</p>
              <p>About us</p>
              <p>Contact us</p>
            </nav>
    </div>
  )
}

export default LandingPage