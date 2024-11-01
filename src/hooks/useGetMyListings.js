import axios from "axios";
import  { useEffect } from "react";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setMyListings } from "../redux-store/listingSlice";

const useGetMyListings = () => {
  const dispatch = useDispatch();

  const getMyListings = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/mylistings`, {
        withCredentials: true,
      });
      dispatch(setMyListings(res?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyListings();
  }, []);
};

export default useGetMyListings;
