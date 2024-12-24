import React from 'react'
import ProductDetails from '../components/product page/ProductDetails'
import WhatCustomersSay from '../components/product page/WhatCustomersSay'
import Trusted from '../components/product page/Trusted'

const ProductPage = () => {
  return (
    <div>
        <ProductDetails/>
        <WhatCustomersSay/>
        <Trusted/>
    </div>
  )
}

export default ProductPage