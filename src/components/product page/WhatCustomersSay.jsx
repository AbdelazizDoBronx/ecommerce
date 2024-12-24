import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import React from 'react'

const WhatCustomersSay = () => {
  return (
    <div className='my-20 max-w-[1300px] mx-auto'>
        <h2 className='text-xl font-semibold text-center mb-5'>What Our Customers Say</h2>
        <div className='flex gap-5'>
            <div className='p-5 text-pretty flex-1 bg-neutral-100  rounded-lg flex flex-col items-center'>
                <img className='w-12' src="https://avatar.iran.liara.run/public/1" alt="" />
                <h2 className='my-2 font-semibold text-xl'>Jamica May</h2>
                <span className='flex gap-2 text-sm items-center mb-1'><Star color='gold'/><p>4.5/5 Star rating</p></span>
                <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='p-5 text-pretty flex-1 bg-neutral-100  rounded-lg flex flex-col items-center'>
                <img className='w-12' src="https://avatar.iran.liara.run/public/1" alt="" />
                <h2 className='my-2 font-semibold text-xl'>Joe Done</h2>
                <span className='flex gap-2 text-sm items-center mb-1'><Star color='gold'/><p>4.5/5 Star rating</p></span>
                <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='p-5 text-pretty flex-1 bg-neutral-100  rounded-lg flex flex-col items-center'>
                <img className='w-12' src="https://avatar.iran.liara.run/public/1" alt="" />
                <h2 className='my-2 font-semibold text-xl'>Lynda F.</h2>
                <span className='flex gap-2 text-sm items-center mb-1'><Star color='gold'/><p>4.5/5 Star rating</p></span>
                <p className='text-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='controllers text-center mt-5'>
            <button className='cursor-pointer shadow-md p-2 rounded-md'><ArrowLeft/></button>
            <button className='cursor-pointer shadow-md p-2 rounded-md'><ArrowRight/></button>
        </div>
    </div>
  )
}

export default WhatCustomersSay