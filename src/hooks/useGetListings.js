import axios from "axios";
import React, { useEffect } from "react";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import { setAllListings } from "../redux-store/listingSlice";
import { useDispatch } from "react-redux";

const useGetListings = () => {
  const dispatch = useDispatch();

  const allListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}`);
      dispatch(setAllListings(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allListings();
  }, []);
};

export default useGetListings;
