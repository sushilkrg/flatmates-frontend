import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { AUTH_API_ENDPOINT } from '../utils/constant';
import { logout } from '../redux-store/authSlice';
import { setAllListings, setSavedForLaterListings, setMyListings, setListingDetail } from '../redux-store/listingSlice';
import toast from 'react-hot-toast';

const TopNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${AUTH_API_ENDPOINT}/logout`, {
                withCredentials: true
            })

            dispatch(logout());
            dispatch(setAllListings(null));
            dispatch(setMyListings(null));
            dispatch(setSavedForLaterListings(null));
            dispatch(setListingDetail(null));
            toast.success(res?.data?.message)
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-lg sticky">
            <div className="container mx-auto px-16 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-blue-400">Flatmates</Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    {user && <Link to="/add" className="hover:text-blue-400">Add Listing</Link>}
                    {user && <Link to="/my-listings" className="hover:text-blue-400">My Listings</Link>}
                    {user && <Link to="/saved-for-later" className="hover:text-blue-400">Saved for later</Link>}
                    {user && <Link to="/logout" onClick={handleLogout} className="hover:text-blue-400">Logout</Link>}
                    {!user && <Link to="/login" className="hover:text-blue-400">Login</Link>}
                    {!user && <Link to="/signup" className="hover:text-blue-400">Signup</Link>}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden  bg-gray-800">
                    {user && <Link to="/add" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Add Listing</Link>}
                    {user && <Link to="/my-listings" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">My Listings</Link>}
                    {user && <Link to="/saved-for-later" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Saved for later</Link>}
                    {user && <Link to="/logout" onClick={handleLogout} className="block py-2 px-4  hover:text-blue-400">Logout</Link>}
                    {!user && <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Login</Link>}
                    {!user && <Link to="/signup" onClick={() => setIsOpen(false)} className="block py-2 px-4 hover:text-blue-400">Signup</Link>}
                </div>
            )}
        </nav>
    )
}

export default TopNav