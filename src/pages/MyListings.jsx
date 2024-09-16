import React from 'react'
import ListingCard from '../components/ListingCard'
import useGetMyListings from '../hooks/useGetMyListings';
import { useSelector } from 'react-redux';
import Listings from '../components/Listings';

const MyListings = () => {
  const myListings = useSelector(store => store.listing.myListings)
  useGetMyListings();

  console.log(myListings);


  return (
    <div className="">
      <h2 className="text-center mt-4">My-Listings</h2>
      <div className="container mx-auto p-4 space-y-4">


        <Listings listings={myListings} />
        {/* <ListingCard /> */}
        {/* <ListingCard /> */}
        {/* <ListingCard /> */}
      </div>

    </div>
  )
}

export default MyListings