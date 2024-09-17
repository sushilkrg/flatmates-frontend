import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddListing from './pages/AddListing';
import ListingDetails from './pages/ListingDetails';
import SavedForLater from './pages/SavedForLater';
import MyListings from './pages/MyListings';
import Footer from './components/Footer';
import { store } from './redux-store/store';
import { login } from './redux-store/authSlice';
import { Toaster } from 'react-hot-toast';


function App() {

  // Fetch user data from localStorage on app load
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    // Update state with retrieved data
    store.dispatch(login(JSON.parse(storedUser)));
  }

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <TopNav />
          <Routes>
            <Route path="/homepage" element={<Home />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Navigate to="/login" />} />
            <Route path="/add" element={<AddListing />} />
            <Route path="/details/:id" element={<ListingDetails />} />
            <Route path="/saved-for-later" element={<SavedForLater />} />
            <Route path="/my-listings" element={<MyListings />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <Toaster />
    </>
  )
}

export default App
