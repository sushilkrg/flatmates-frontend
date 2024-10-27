import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LISTING_API_ENDPOINT } from "../utils/constant";
import { setListingDetail } from "../redux-store/listingSlice";

const useGetListingDetails = (id) => {
  const dispatch = useDispatch();

  const listingDetails = async () => {
    try {
      const res = await axios.get(`${LISTING_API_ENDPOINT}/details/${id}`, {
        withCredentials: true,
      });
      dispatch(setListingDetail(res?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    listingDetails();
  }, []);
};

export default useGetListingDetails;
