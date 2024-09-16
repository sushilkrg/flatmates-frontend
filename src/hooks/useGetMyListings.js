import axios from "axios";
import React, { useEffect } from "react";
import { LISTING_API_ENDPOINT } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMyListings } from "../redux-store/listingSlice";

const useGetMyListings = () => {
//   const { user } = useSelector((store) => store.user);
  //   console.log(user);
  const dispatch = useDispatch();

  const getMyListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/mylistings`, {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(setMyListings(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyListings();
  }, []);
};

export default useGetMyListings;
