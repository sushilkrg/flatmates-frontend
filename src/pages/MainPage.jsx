import React, { useState } from "react";
import useGetListings from "../hooks/useGetListings";
import Listings from "../components/Listings";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import axios from "axios";
import { useSelector } from 'react-redux'

const MainPage = () => {

  const { listings } = useSelector(store => store.listing);
  const [cityname, setCityname] = useState("");
  const [allListings, setAllListings] = useState(listings);

  // const [filteredListings, setFilteredListings] = useState("");
  const [selectLookingFor, setSelectLookingFor] = useState("all");

  useGetListings();
  // const dispatch = useDispatch();

  const getFilteredListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/filter`, { cityname: cityname, lookingFor: selectLookingFor });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/filter`, { params: { cityname: cityname, lookingFor: selectLookingFor } });
      setAllListings(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAllListings = () => {
    setAllListings(listings);
    setCityname("");
  }

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
              onChange={(e) => setSelectLookingFor(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      {!allListings && <Listings listings={listings} />}
      {allListings && <Listings listings={allListings} />}
    </div>
  );
};

export default MainPage;
