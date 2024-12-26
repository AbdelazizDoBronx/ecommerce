import { Search, ShoppingCart, User ,Menu} from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        {/* small sizes nav */}
        <div className='flex sm:hidden justify-between items-center lg:hidden'>
          <h2 className='text-2xl font-bold text-[#003D29]'>Shopmine</h2>
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm p-2 w-full max-w-lg">
          <input
            className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none"
            type="text"
            name="search"
            placeholder="Search product"
          />
          <Search size="18px" className="ml-2 text-gray-500" />
        </div>
        <div>
          <Menu/>
        </div>
        </div>
        <div className='flex justify-between sm:hidden md:flex items-center p-3 w-full h-auto max-w-[1300px] mx-auto'>
        <h2 className='text-2xl font-bold text-[#003D29]'>Shopmine</h2>
        <div>
          <ul className='flex gap-4'>
            <li>Category</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="sm:flex hidden items-center border border-gray-300 rounded-md shadow-sm p-2 w-full max-w-lg">
          <input
            className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none"
            type="text"
            name="search"
            placeholder="Search product"
          />
          <Search size="18px" className="ml-2 text-gray-500" />
        </div>

        <div className='flex gap-4'>
          <p className='flex gap-2 items-center'>
            <User />
            Account
          </p>
          <p className='flex gap-2 items-center'>
           <ShoppingCart />
            Cart
          </p>
        </div>
    </div>
    </div>
  )
}

export default NavBar