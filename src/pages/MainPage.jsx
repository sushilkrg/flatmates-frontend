import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import useGetListings from "../hooks/useGetListings";
import Listings from "../components/Listings";
import { LISTING_API_ENDPOINT } from "../../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setFilteredListings } from "../redux-store/listingSlice";
import { useSelector } from 'react-redux'

const MainPage = () => {


  const [cityname, setCityname] = useState("");
  const { listings } = useSelector(store => store.listing);
  const [allListings, setAllListings] = useState("");
  // const [filteredListings, setFilteredListings] = useState("");
  const [selectLookingFor, setSelectLookingFor] = useState("");


  // const [filterFlag, setFilterFlag] = useState(false);
  useGetListings();
  // const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/search/${cityname}`);
      console.log(res.data.filteredListings);
      setAllListings(res.data.filteredListings);
      // dispatch(setFilteredListings(res?.data?.filteredListings));
      // setCityname("");
      // setFilterFlag(true);
      // redirect(`/search/${cityname}`);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {

  // }, [allListings])

  // console.log(allListings);


  return (
    <div className="w-full p-4 md:p-6">
      {/* Navigation Bar */}

      {/* <div className="flex justify-around border-b-2 border-gray-800 pb-4 mb-6">
        <span className="cursor-pointer font-bold underline">All listings</span>
        <span className="cursor-pointer">Flatmates</span>
        <span className="cursor-pointer">Roommates</span>
      </div> */}
      {/* Search and Filter */}
      <div className="flex flex-row justify-around  mb-6">
        <div className="grid grid-col-1 md:grid-cols-3 gap-2 mx-3">
          <button onClick={() => setAllListings(listings)} className="cursor-pointer font-bold underline">All listings</button>
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
              onChange={(e) => setSelectLookingFor(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {/* <option value="" disabled>
                Select gender
              </option> */}
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      {/* {!filteredListings && <Listings listings={listings} />} */}
      {/* <Listings listings={filteredListings} /> */}
      <Listings listings={listings} />


    </div>
  );
};

export default MainPage;
