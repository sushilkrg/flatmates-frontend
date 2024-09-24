import React, { useEffect, useState } from "react";
import useGetListings from "../hooks/useGetListings";
import Listings from "../components/Listings";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from "../redux-store/locationSlice";
import { setAllListings } from "../redux-store/listingSlice";

const MainPage = () => {

  const { listings } = useSelector(store => store.listing);
  const { location } = useSelector(store => store.location);
  const [cityname, setCityname] = useState(location);
  const [allListing, setAllListing] = useState(listings);
  const [selectLookingFor, setSelectLookingFor] = useState("all");
  const dispatch = useDispatch();

  useGetListings();

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setLocation(cityname));
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/search/${cityname}`);
      dispatch(setAllListings(res?.data?.filteredListings));
      setAllListing(res?.data?.filteredListings);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setSelectLookingFor(e.target.value);
    let lookingFor = e.target.value;
    let filteredListings;

    if (lookingFor === "all") {
      setAllListing(listings);
    }

    if (lookingFor == "male") {
      filteredListings = listings.filter(
        (listing) => listing?.lookingForGender !== "female"
      );
      setAllListing(filteredListings);
    }

    if (lookingFor == "female") {
      filteredListings = listings.filter(
        (listing) => listing.lookingForGender !== "male"
      );
      setAllListing(filteredListings)
    }
  }

  const handleAllListings = () => {
    setAllListing(listings);
    // setCityname("");
  }

  useEffect(() => {
    setAllListing(listings);
  }, [listings])

  return (
    <div className="w-full min-h-screen p-4 md:p-6">
      {/* Search and Filter */}
      <div className="flex flex-row justify-around  mb-6">
        <div className="grid grid-col-1 md:grid-cols-3 gap-2 mx-3">
          <button onClick={handleAllListings} className="cursor-pointer font-bold underline">All listings</button>
          <button className="cursor-pointer">Flatmates</button>
          <button className="cursor-pointer">Roommates</button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <form onSubmit={handleSearch} className="relative w-full sm:w-auto">
            <input
              type="text"
              value={cityname}
              placeholder="Cityname"
              className="border text-black px-4 py-2 pr-12 rounded-lg w-full outline-none"
              onChange={(e) => setCityname(e.target.value)}
              required
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg"
            >
              Search
            </button>
          </form>
          <div className="bg-gray-800 text-white  rounded-lg w-full sm:w-auto">
            <select
              name="lookingForGender"
              id="lookingForGender"
              value={selectLookingFor}
              onChange={handleChange}
              className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      {/* {!allListings && <Listings listings={listings} />}
      {allListings && <Listings listings={allListings} />} */}
      <Listings listings={allListing} />
    </div>
  );
};

export default MainPage;
