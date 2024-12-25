import { Minus, Plus, Trash } from 'lucide-react';
import React from 'react';

const Cart = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-4 flex gap-3 mt-10">
      {/* Cart Details Section */}
      <div className="cart-details  bg-neutral-100 flex-1 rounded-md shadow-md">
        <div className="flex justify-around items-center  text-center py-3 bg-neutral-200 rounded-t-md">
          <h2>Product</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
        </div>

        <div className="flex items-center justify-around bg-white p-4 border-b border-neutral-300">
          {/* Product Details */}
          <div className="flex items-center flex-1 gap-4">
            <img
              src="https://m.media-amazon.com/images/I/71Re8OntVjL._SL1500_.jpg"
              alt="Smart Camera AI"
              className="w-24 h-24 object-cover rounded-md shadow-sm"
            />
            <h2 className="text-lg font-medium text-neutral-700">Smart Camera AI</h2>
          </div>

          {/* Quantity Control */}
          <div className="flex  flex-col text-sm items-center gap-2 flex-1 justify-center bg-neutral-100 p-2 rounded-md">
            <div className='flex gap-2 items-center'>
                <Plus className="cursor-pointer text-neutral-600" size={18} />
                <input
                type="text"
                className="w-12 h-8 text-center border border-neutral-300 rounded-md focus:outline-none"
                defaultValue={1}/>
                <Minus className="cursor-pointer text-neutral-600" size={18} />
            </div>
            <div className='flex items-center gap-1'>
                <Trash size={16}  color='red'/>
                Remove
            </div>
          </div>

          {/* Price */}
          <div className="text-center flex-1">
            <p className="text-xl font-semibold text-neutral-800">$430.00</p>
          </div>
        </div>
        <div className="flex items-center justify-around bg-white p-4 border-b border-neutral-300">
          {/* Product Details */}
          <div className="flex items-center flex-1 gap-4">
            <img
              src="https://m.media-amazon.com/images/I/71Re8OntVjL._SL1500_.jpg"
              alt="Smart Camera AI"
              className="w-24 h-24 object-cover rounded-md shadow-sm"
            />
            <h2 className="text-lg font-medium text-neutral-700">Smart Camera AI</h2>
          </div>

          {/* Quantity Control */}
          <div className="flex  flex-col text-sm items-center gap-2 flex-1 justify-center bg-neutral-100 p-2 rounded-md">
            <div className='flex gap-2 items-center'>
                <Plus className="cursor-pointer text-neutral-600" size={18} />
                <input
                type="text"
                className="w-12 h-8 text-center border border-neutral-300 rounded-md focus:outline-none"
                defaultValue={1}/>
                <Minus className="cursor-pointer text-neutral-600" size={18} />
            </div>
            <div className='flex items-center gap-1'>
                <Trash size={16}  color='red'/>
                Remove
            </div>
          </div>

          {/* Price */}
          <div className="text-center flex-1">
            <p className="text-xl font-semibold text-neutral-800">$430.00</p>
          </div>
        </div>
        
      </div>

      {/* Checkout Section */}
      <div className="card-checkout  flex flex-col  p-5 rounded-md shadow-md">
        <div className='flex flex-col gap-1 my-auto'>
           <span className='flex gap-5 justify-between items-center'>
            <h4 className='font-medium'>Subtotal</h4>
            <p className='text-sm text-neutral-500'>$3500,00</p>
           </span>
           <span className='flex gap-5 justify-between items-center'>
            <h4 className='font-medium'>Discount</h4>
            <p className='text-sm text-neutral-500'>$0</p>
           </span>
           <span className='flex gap-5 justify-between items-center'>
            <h4 className='font-medium'>Grand total</h4>
            <p className='text-sm text-neutral-500'>$2500,00</p>
           </span>
        </div>
        <div className='my-auto'>
        <button className='bg-neutral-800  text-white p-3 font-medium rounded-md shadow-md w-full'>Checkout now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
