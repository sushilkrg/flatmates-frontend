import axios from "axios";
import { useEffect } from "react";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import { setAllListings } from "../redux-store/listingSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetListings = () => {
  const dispatch = useDispatch();
  const {location} = useSelector((store) => store.location);

  const listingByLocation = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/search/${location}`);
      dispatch(setAllListings(res?.data?.filteredListings));
    } catch (error) {
      console.log(error);
    }
  }

  const allListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}`);
      dispatch(setAllListings(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  const mainFunction = () => {
    if(location){
      listingByLocation();
    } else {
      allListings();
    }
  }

  

  useEffect(() => {
    mainFunction();
  }, []);

};

export default useGetListings;
