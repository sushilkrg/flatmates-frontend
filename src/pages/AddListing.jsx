import React, { useState } from "react";
import axios from "axios";
import { LISTING_API_ENDPOINT } from "../utils/constant"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddListing = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // image: null,
    postedByName: "",
    location: "",
    cityName: "",
    nearestPlace: "",
    rent: "",
    contactNumber: "",
    lookingForGender: "",
    lookingForAccoType: "",
    facilities: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${LISTING_API_ENDPOINT}/add`, {
        postedByName: formData?.postedByName,
        location: formData?.location,
        cityName: formData?.cityName,
        nearestPlace: formData?.nearestPlace,
        rent: formData?.rent,
        lookingForGender: formData?.lookingForGender,
        lookingForAccoType: formData?.lookingForAccoType,
        contactNumber: formData?.contactNumber,
        facilities: formData?.facilities,
        image: image,
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
        body: JSON.stringify({
          postedByName: formData?.postedByName,
          location: formData?.location,
          cityName: formData?.cityName,
          nearestPlace: formData?.nearestPlace,
          rent: formData?.rent,
          lookingForGender: formData?.lookingForGender,
          lookingForAccoType: formData?.lookingForAccoType,
          contactNumber: formData?.contactNumber,
          image: image,
        }),
      });
      toast.success(res?.data?.message);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold  mb-6 text-center">
        Add Listing
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Select Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className=" font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postedByName" className=" font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="postedByName"
            id="postedByName"
            placeholder="Enter name"
            value={formData.postedByName}
            onChange={handleChange}
            className="block w-full text-black  px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className=" font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cityName" className=" font-medium mb-2">
            City
          </label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Enter city"
            value={formData.cityName}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nearestPlace" className=" font-medium mb-2">
            Nearest Place
          </label>
          <input
            type="text"
            name="nearestPlace"
            id="nearestPlace"
            placeholder="Nearest place (e.g., metro station)"
            value={formData.nearestPlace}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="rent" className=" font-medium mb-2">
            Rent (INR)
          </label>
          <input
            type="number"
            name="rent"
            id="rent"
            placeholder="Enter rent amount"
            value={formData.rent}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="contactNumber" className=" font-medium mb-2">
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lookingForGender" className=" font-medium mb-2">
            Looking For (Gender)
          </label>
          <select
            name="lookingForGender"
            id="lookingForGender"
            value={formData.lookingForGender}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="any">any</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lookingForAccoType" className=" font-medium mb-2">
            Looking For  (Listing Type)
          </label>
          <select
            name="lookingForAccoType"
            id="lookingForAccoType"
            value={formData.lookingForAccoType}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="" disabled>
              Select listing type
            </option>
            <option value="flatmate">flatmate</option>
            <option value="roommate">roommate</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="facilities" className=" font-medium mb-2">
            Facilities
          </label>
          <input
            type="text"
            name="facilities"
            id="facilities"
            placeholder="Facilities (e.g., gym, wifi, etc.)"
            value={formData.facilities}
            onChange={handleChange}
            className="block text-black w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
