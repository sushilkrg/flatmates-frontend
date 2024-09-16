import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LISTING_API_ENDPOINT } from "../../utils/constant";
import { setListingDetail } from "../redux-store/listingSlice";

const useGetListingDetails = (id) => {
  const dispatch = useDispatch();

  const listingDetails = async () => {
    try {
      // console.log(id);

      const res = await axios.get(`${LISTING_API_ENDPOINT}/details/${id}`, {
        withCredentials: true,
      });
      console.log(res?.data);
      dispatch(setListingDetail(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listingDetails();
  }, []);
};

export default useGetListingDetails;
