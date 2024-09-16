import axios from 'axios';
import React from 'react'
import { useNavigate } from "react-router-dom"
import { LISTING_API_ENDPOINT } from '../../utils/constant';
import { useSelector } from 'react-redux';

const ListingCard = ({ listing }) => {
    // console.log(listing);
    const navigate = useNavigate();
    const user = useSelector(store => store.user.user);
    // console.log(user);
    
    const handleDetails = (id) => {
        console.log(id);

        navigate(`/details/${id}`);
    }

    const handleSaveForLater = async (id) => {
        try {
            const res = await axios.post(`${LISTING_API_ENDPOINT}/saveforlater/${id}`, { id: user?._id },
                {
                    withCredentials: true
                });
            console.log(res);
            console.log("save for later added");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="border border-gray-300 p-4 flex flex-row">
            <div className="bg-gray-200 p-4 flex-1 items-center justify-center text-gray-500 border ">
                <img src={listing?.img} alt="No image" />
            </div>
            <div className="mt-0 flex-1 p-2">
                <p className="font-bold">{listing?.postedByName}</p>
                <p>📍{listing?.location}</p>
                <p>City - {listing?.cityName}</p>
                <p>Rent: ₹ {listing?.rent}</p>
                <p>Looking for: {listing?.lookingForGender}</p>
                <p>Looking for: {listing?.lookingForAccoType}</p>
                <div className="flex justify-between flex-col md:flex-row">
                    <button onClick={() => handleSaveForLater(listing?._id)} className="mt-4 flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white px-4 py-1 rounded-lg">
                        save for later
                        {/* <img className="w-8 border rounded-md" src="https://png.pngtree.com/png-vector/20201226/ourmid/pngtree-line-icon-save-png-image_2644818.jpg" alt="" /> */}
                    </button>
                    <button onClick={() => handleDetails(listing?._id)} className="mt-4 bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListingCard