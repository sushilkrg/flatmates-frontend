import React, { useEffect } from "react";
import { setSavedForLaterListings } from "../redux-store/listingSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { LISTING_API_ENDPOINT } from "../utils/constant";

const useGetSavedForLaterListings = () => {
  const dispatch = useDispatch();

  const getMySavedForLaterListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/saveforlater`, {
        withCredentials: true,
      });
      dispatch(setSavedForLaterListings(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMySavedForLaterListings();
  }, []);
};

export default useGetSavedForLaterListings;
