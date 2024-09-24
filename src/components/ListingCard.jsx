import axios from 'axios';
import React from 'react'
import { useNavigate } from "react-router-dom"
import { LISTING_API_ENDPOINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { deleteListing, setSavedForLaterListings } from '../redux-store/listingSlice';
import toast from 'react-hot-toast';

const ListingCard = ({ listing }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.user);

    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    }

    const handleSaveForLater = async (id) => {
        if (!user) {
            toast.error("Login to save for later");
            return;
        }
        try {
            const res = await axios.post(`${LISTING_API_ENDPOINT}/saveforlater/${id}`, { id: user?._id },
                {
                    withCredentials: true
                });
            toast.success(res?.data?.message);
            dispatch(setSavedForLaterListings(res?.data?.listing));
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteListing = async (id) => {
        try {
            const res = await axios.delete(`${LISTING_API_ENDPOINT}/${id}`,
                {
                    withCredentials: true
                });
            toast.success(res?.data?.message);
            dispatch(deleteListing(res?.data?.listing))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="border border-gray-300 p-4 flex flex-row  rounded-lg shadow-lg shadow-cyan-500/30">
            <div className="bg-gray-200  md:h-56 flex-1 items-center justify-center text-gray-500  rounded-lg">
                <img className="object-cover w-full h-full " src={listing?.image} alt="No image" />
            </div>
            <div className="mt-0 flex-1 pl-4">
                <p className="font-bold">{listing?.postedByName}</p>
                <p>📍{listing?.location}</p>
                <p>City - {listing?.cityName}</p>
                <p>Rent: ₹ {listing?.rent}</p>
                <p>Looking for: {listing?.lookingForGender}</p>
                <p>Looking for: {listing?.lookingForAccoType}</p>
                <div className="flex justify-between flex-col md:flex-row">
                    {user?._id != listing?.postedBy && <button onClick={() => handleSaveForLater(listing?._id)} className="mt-4 flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-1 rounded-lg">
                        {/* save for later */}
                        <img className="w-8 border rounded-md" src="https://png.pngtree.com/png-vector/20201226/ourmid/pngtree-line-icon-save-png-image_2644818.jpg" alt="" />
                    </button>}
                    {user?._id == listing?.postedBy && <button onClick={() => handleDeleteListing(listing?._id)} className="mt-4 flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-1 rounded-lg">
                        delete
                    </button>}
                    <button onClick={() => handleDetails(listing?._id)} className="mt-4 bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListingCard