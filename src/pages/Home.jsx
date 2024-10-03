import React from 'react'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonial'
import SearchSection from '../components/SearchSection'
import FeaturedListings from '../components/FeaturedListing'
import PremiumProperties from '../components/PremiumProperties'
import MobileAppPromotion from '../components/MobileAppPromotion'
import PopularCities from '../components/PopularCities'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SearchSection/>
      <PremiumProperties/>
      <MobileAppPromotion/>
      <PopularCities/>
      {/* <FeaturedListings/> */}
      <Testimonials/>
    </div>
  )
}

export default Home