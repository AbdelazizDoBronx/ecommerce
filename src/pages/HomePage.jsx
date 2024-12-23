import React from 'react'
import NoticeBar from '../components/NoticeBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import TopCategories from '../components/TopCategories'
import BestSelling from '../components/BestSelling'
import CashBack from '../components/CashBack'
import BestSellingStore from '../components/BestSellingStore'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
   
      <>
        <NoticeBar />
        <NavBar />
        <HeroSection />
        <TopCategories />
        <BestSelling/>
        <CashBack />
        <BestSellingStore/>
        <Footer/>
      </>
    
  )
}

export default HomePage