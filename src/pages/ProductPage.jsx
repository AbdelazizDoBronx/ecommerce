import React from 'react'
import ProductDetails from '../components/product page/ProductDetails'
import WhatCustomersSay from '../components/product page/WhatCustomersSay'
import Trusted from '../components/product page/Trusted'
import Faq from '../components/product page/Faq'
import MightAlsoLike from '../components/product page/MightAlsoLike'

const ProductPage = () => {
  return (
    <div>
        <ProductDetails/>
        <WhatCustomersSay/>
        <Trusted/>
        <Faq/>
        <MightAlsoLike/>
    </div>
  )
}

export default ProductPage