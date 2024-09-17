import React from 'react'
import useGetMyListings from '../hooks/useGetMyListings';
import { useSelector } from 'react-redux';
import Listings from '../components/Listings';

const MyListings = () => {
  const myListings = useSelector(store => store.listing.myListings)
  useGetMyListings();

  return (
    <div className="min-h-[87vh]">
      <h2 className="text-center mt-4">My-Listings</h2>
      <div className="container mx-auto p-4 space-y-4">
        <Listings listings={myListings} />
      </div>
    </div>
  )
}

export default MyListings