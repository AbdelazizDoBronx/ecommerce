import React from 'react'

const TopCategories = () => {
  return (
    <div className='max-w-[1300px] mx-auto my-5'>
        <h2 className='text-3xl font-semibold tracking-wide mb-7'>Shop Our Top Categories</h2>
        <div className='flex flex-wrap gap-4 text-white'>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Furniture</h2>
            </div>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Hand Bag</h2>
            </div>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Books</h2>
            </div>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Texh</h2>
            </div>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Sneakers</h2>
            </div>
            <div className="card rounded-lg w-[200px] h-[250px]" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVybml0dXJlfGVufDB8fDB8fHww)',backgroundSize : 'cover'}} >
                <h2 className='text-center mt-4 font-semibold text-2xl'>Travel</h2>
            </div>
        </div>
    </div>
  )
}

export default TopCategories