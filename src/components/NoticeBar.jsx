import { Phone } from 'lucide-react'
import React from 'react'

const NoticeBar = () => {
  return (
    <div className='bg-[#003D29] w-full h-10 flex justify-around text-sm items-center text-white'>
        <p className='flex items-center gap-2'>
            <Phone size='20px'  />
            +001234567890
        </p>
        <p>Get 50% Off on Selected items | Shop Now</p>
        {/* todo : needs to be a select tag  */}
        <p>eng | location</p>
    </div>
  )
}

export default NoticeBar