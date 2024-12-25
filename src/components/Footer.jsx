import React from 'react'
import { Copyright, Gem, Gift, Info } from 'lucide-react'
const Footer = () => {
  return (
        <div className='mt-20 max-w-[1300px] mx-auto'>
            <hr />
            <div className='flex  gap-10 mt-9 font-light'>
                <div >
                    <h2 className='text-neutral-500 text-3xl font-semibold my-2'>ShopMine</h2>
                    <p className='text-pretty text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa?</p>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Department</h3>
                    <h4>Fashion</h4>
                    <h4>Education Product</h4>
                    <h4>Frozen Food</h4>
                    <h4>Beverages</h4>
                    <h4>organic Grocery</h4>
                    <h4>Office Supplies</h4>
                    <h4>Beauty Product</h4>
                    <h4>Books</h4>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>About Us</h3>
                    <h4>About ShopMine</h4>
                    <h4>Careers</h4>
                    <h4>News & Blog</h4>
                    <h4>Help</h4>
                    <h4>Press Center</h4>
                    <h4>Shop By Location</h4>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Services</h3>
                    <h4>Gift Card</h4>
                    <h4>Mobile App</h4>
                    <h4>Shipping & Delivery</h4>
                    <h4>Order Pickup</h4>
                    <h4>Account Signup</h4>
                </div>
                <div >
                    <h3 className='font-semibold mb-4'>Help</h3>
                    <h4>ShopMine</h4>
                    <h4>Returns</h4>
                    <h4>Track Orders</h4>
                    <h4>Contact Us</h4>
                    <h4>Feedback</h4>
                    <h4>Security & Fraud</h4>
                </div>
            </div>
            <hr className='my-14'/> 
            <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center p-3 gap-7'>
                <span className='flex gap-2 items-center text-red-500'>
                    <Gem/>
                    <span className='text-neutral-500'>Become seller</span>
                </span>
                <span className='flex gap-2 items-center text-red-500'>
                    <Gift/>
                    <span className='text-neutral-500'>Gift Card</span>
                </span>
                <span className='flex gap-2 items-center text-red-500'>
                    <Info/>
                    <span className='text-neutral-500'> Help Center</span>
                </span>
            </div>
            <div>
                <span className='flex gap-2'>
                    <Copyright />
                    All rightes reserved to ShopMine.com 
                </span>
            </div>
            </div>
    </div>
  )
}

export default Footer