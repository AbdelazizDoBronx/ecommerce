import { Star } from 'lucide-react'
import React from 'react'

const MightAlsoLike = () => {
  return (
    <div className='mt-20 max-w-[1300px] mx-auto'>
        <h2 className='text-2xl font-semibold mb-9'>You may also like</h2>
        <div className='flex gap-5 justify-center'>
            <div className="card shadow-md p-3">
                <img className='w-64 rounded-md' src="https://m.media-amazon.com/images/I/51CZMhkr3rL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <p className='text-2xl font-medium mt-1'>$22</p>
                <p className='text-neutral-500 mb-1 text-xl'>wooden Brush</p>
                <span className='flex gap-2 items-center text-sm'><span className='flex'><Star/><Star/><Star/><Star/><Star/></span><p>521(4.5/5)</p></span>
            </div>
            <div className="card shadow-md p-3">
                <img className='w-64 rounded-md' src="https://m.media-amazon.com/images/I/51CZMhkr3rL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <p className='text-2xl font-medium mt-1'>$22</p>
                <p className='text-neutral-500 mb-1 text-xl'>wooden Brush</p>
                <span className='flex gap-2 items-center text-sm'><span className='flex'><Star/><Star/><Star/><Star/><Star/></span><p>521(4.5/5)</p></span>
            </div>
            <div className="card shadow-md p-3">
                <img className='w-64 rounded-md' src="https://m.media-amazon.com/images/I/51CZMhkr3rL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <p className='text-2xl font-medium mt-1'>$22</p>
                <p className='text-neutral-500 mb-1 text-xl'>wooden Brush</p>
                <span className='flex gap-2 items-center text-sm'><span className='flex'><Star/><Star/><Star/><Star/><Star/></span><p>521(4.5/5)</p></span>
            </div>
            <div className="card shadow-md p-3">
                <img className='w-64 rounded-md' src="https://m.media-amazon.com/images/I/51CZMhkr3rL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                <p className='text-2xl font-medium mt-1'>$22</p>
                <p className='text-neutral-500 mb-1 text-xl'>wooden Brush</p>
                <span className='flex gap-2 items-center text-sm'><span className='flex'><Star/><Star/><Star/><Star/><Star/></span><p>521(4.5/5)</p></span>
            </div>
        </div>
    </div>
  )
}

export default MightAlsoLike