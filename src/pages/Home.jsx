import React from 'react'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonial'
import SearchSection from '../components/SearchSection'
import FeaturedListings from '../components/FeaturedListing'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SearchSection/>
      {/* <FeaturedListings/> */}
      <Testimonials/>
    </div>
  )
}

export default Home