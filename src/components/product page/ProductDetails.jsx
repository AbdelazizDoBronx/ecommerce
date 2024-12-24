import { ArrowRight, Facebook, Instagram,Plus ,Minus, Star, Twitter } from 'lucide-react'
import React from 'react'

const ProductDetails = () => {
  return (
    <div className='flex  max-w-[1300px]  mx-auto gap-10 my-12'>
        <div className="product-imgs  w-1/2 flex flex-col gap-1">
            <div className="main-img">
                <img className='bg-cover rounded-lg flex flex-1' src="/src/assets/img3.png" alt="main-img" />
            </div>
            <div className="other-imgs flex gap-1">
                <img className='w-24 rounded-lg' src="/src/assets/img1.png" alt="img" />
                <img className='w-24 rounded-lg' src="/src/assets/img2.png" alt="img" />
                <img className='w-24 rounded-lg' src="/src/assets/img4.png" alt="img" />
                <img className='w-24 rounded-lg' src="/src/assets/img5.jpg" alt="img" />
                <img className='w-24 rounded-lg' src="/src/assets/img6.png" alt="img" />
            </div>
        </div>
        <div className="product-details w-1/3 p-2">
            <p className='font-semibold text-2xl '>$89</p>
            <div className='ratings flex gap-3 text-sm items-center my-2'>
                <span className='flex'><Star/><Star/><Star/><Star/><Star/></span>
                <p>4.8/5 Star rating</p>
            </div>
            <div className="desc my-4">
                <h2 className='text-2xl font-semibold'>Nike New Sneakers</h2>
                <p className='text-pretty text-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum enim magnam alias voluptatem animi dicta! Quo aliquam omnis cum!</p>
            </div>
            <div className="qte flex items-center gap-1">
                <div className="qte-controller flex gap-1 items-center">
                    <button className='cursor-pointer font-semibold'>+</button>
                    <input className='w-10 p-2  border border-neutral-500 rounded-md' type="text"/>
                    <button className='cursor-pointer font-semibold'>-</button>
                </div>
                <button className='bg-blue-700 p-3 text-white rounded-md flex-1 shadow-md'>Add to Cart</button>
            </div>
            <div>
            <button className='btn btn-accent w-full mt-2 mb-1'>Buy Now</button>
            </div>
            <span className='flex  items-center gap-2 justify-center my-1'>Share:  <Facebook size={16}/><Instagram size={16}/><Twitter size={16}/></span>
            <span className='my-2 flex justify-between items-center'>
                We Accept
                <div className='flex gap-1 text-2xl'>
                    <i className="fa-brands fa-paypal"></i>
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-apple-pay"></i>
                </div>
            </span>
            <span className='flex justify-between my-3'>30-days Free Returns
                <span className='flex gap-1 text-sm items-center'>read More
                <ArrowRight size={16}/>
                </span>
            </span>
            <div className="product-detailes flex flex-col gap-3">
                <div  className='bg-slate-100 px-3 py-4 rounded-md' >
                    <span className='flex items-center justify-between font-medium'>Details <span className='flex items-center'><Plus className='cursor-pointer' size={16}/><Minus className='cursor-pointer' size={16}/></span></span>
                    <p className='text-sm text-neutral-500 text-balance'>
                        - Lorem ipsum dolor sit amet.
                        - Lorem ipsum dolor sit amet.
                        - Lorem ipsum dolor sit amet.
                        - Lorem ipsum dolor sit amet.
                        - Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className='bg-slate-100 px-3 py-4 rounded-md' >
                <span className='flex items-center justify-between font-medium'>Shipping & Returns <span className='flex items-center'><Plus className='cursor-pointer' size={16}/><Minus className='cursor-pointer' size={16}/></span></span>
                <p className='text-sm text-neutral-500 text-balance'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails