import { Minus, Plus } from 'lucide-react'
import React from 'react'

const Faq = () => {
  return (
    <div className='max-w-[1300px] mx-auto  gap-7 my-20'>
        <h2 className='text-2xl font-semibold mb-7 text-center'>FAQs</h2>
        <div className='flex flex-wrap justify-between gap-5'>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        <div className="single-faq">
            <span className='font-medium flex justify-between items-center'>Delivrey Time? <span className='cursor-pointer'><Plus size={16} /><Minus size={16} /></span></span>
            <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing. </p>
        </div>
        </div>
    </div>
  )
}

export default Faq