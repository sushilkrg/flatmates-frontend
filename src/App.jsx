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

function App() {

  // Fetch user data from localStorage on app load
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    store.dispatch(login(JSON.parse(storedUser))); // Update state with retrieved data
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
    </>
  )
}

export default App

{/* <Router>
  <div className="min-h-screen bg-gray-900 text-white">
    {user && <TopNavigationBar />}
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {user && <Sidebar />}
      <Routes>
        <Route path="/" element={user ? <MainContent /> : <Navigate to="/login" />} />
        <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/login" />} />
       
        <Route path="/notifications" element={user ? <Notifications /> : <Navigate to="/login" />} />
        <Route path="/bookmarks" element={user ? <Bookmarks /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/logout" element={<Navigate to="/login" />} />
      </Routes>
      {user && <Trends />}
    </div>
  </div>
  <Footer />
</Router>
<Toaster /> */}