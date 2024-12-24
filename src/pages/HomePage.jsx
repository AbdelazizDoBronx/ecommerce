import React from 'react'
import HeroSection from '../components/home page/HeroSection'
import TopCategories from '../components/home page/TopCategories'
import BestSelling from '../components/home page/BestSelling'
import CashBack from '../components/home page/CashBack'
import BestSellingStore from '../components/home page/BestSellingStore'

const HomePage = () => {
  return (
   
      <>
        <HeroSection />
        <TopCategories />
        <BestSelling/>
        <CashBack />
        <BestSellingStore/>
      </>
    
  )
}

export default HomePage