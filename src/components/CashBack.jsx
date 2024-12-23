import React from 'react'
import Cardimg from '../assets/card.png'
const CashBack = () => {

  return (
    <div className='mt-16 bg-[#ffd5a8] flex justify-center items-center'>
        <div>
            <h2 className='text-4xl font-semibold my-2 text-neutral-500'>Get 5% Cash back</h2>
            <p className='font-medium tracking-wide mb-5 text-2xl'>on Shopmine.com</p>
            <button className='btn btn-accent rounded-xl text-white shadow-md '>Learn more</button>
        </div>
        <div>
            <img className='w-72' src={Cardimg} alt="creditcard" />
        </div>
    </div>
  )
}

export default CashBack