import React from 'react'

const Trusted = () => {
    const vogue = 'https://download.logo.wine/logo/Vogue_(magazine)/Vogue_(magazine)-Logo.wine.png'
    const walmart = 'https://purepng.com/public/uploads/large/purepng.com-walmart-logologobrand-logoiconslogos-251519939045oqelv.png'
    const samsung = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png'
    const nike = 'https://purepng.com/public/uploads/large/purepng.com-nike-logologobrand-logoiconslogos-2515199407298sbym.png'
    const adidas = 'https://www.freepnglogos.com/uploads/adidas-logo-photo-png-3.png'
    const rolex = 'https://cdn.freebiesupply.com/logos/large/2x/rolex-logo-png-transparent.png'
    const logos = [vogue,walmart,samsung,nike,adidas,vogue,walmart,samsung,nike,adidas,rolex,rolex];
    return (
    <div className='bg-orange-200 p-5 text-white text-xl font-medium text-center'>
        <h2>Trusted by 4000+ companies</h2>
        <div className='flex  mt-5 gap-10 overflow-hidden animate-scrollerInfity'>
           {[...logos,...logos].map((logo,idx)=>(
            <img className='w-32' src={logo} alt="logoimg" key={idx} />
           ))} 
        </div>
    </div>
  )
}




export default Trusted