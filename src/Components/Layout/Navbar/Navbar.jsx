// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CalloutMenu from './MenuCallout/CalloutMenu';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

function Navbar({ isLoggedIn, username, onLogout }) {
  const [isCalloutVisible, setCalloutVisible] = useState(false);
  const navigate = useNavigate();

  const toggleCallout = () => setCalloutVisible(!isCalloutVisible);
  const closeCallout = () => setCalloutVisible(false);

  const buttons = isLoggedIn
    ? [
      {
        label: 'Edit Profile',
        onClick: () => {
          alert('Edit Profile Clicked');
          navigate('/edit-profile');
        },
      },
      {
        label: 'Log Out',
        onClick: () => {
          onLogout();
          navigate('/signin'); // Navigate to homepage after logout
        },
      },
    ]
    : [
      {
        label: 'Sign In',
        onClick: () => {
          navigate('/signin');
        },
      },
    ];

  return (
    <nav className="bg-amazon_blue p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <span className="ml-2">MyShop</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <SearchBar />
        </div>

        {/* Account & Cart Options */}
        <div className="flex items-center space-x-6 text-white">
          <button
            className="hover:text-gray-300 relative"
            onClick={(e) => {
              e.preventDefault();
              toggleCallout();
            }}
          >
            <div className="flex flex-col">
              <span className="text-sm">
                {isLoggedIn ? `Hello, ${username}` : 'Hello, Sign in'}
              </span>
              <span className="font-bold">Account & Lists</span>
            </div>
            <CalloutMenu
              isVisible={isCalloutVisible}
              onClose={closeCallout}
              buttons={buttons}
            />
          </button>

          <button className="hover:text-gray-300">
            <div className="flex flex-col">
              <span className="text-sm">Returns</span>
              <span className="font-bold">& Orders</span>
            </div>
          </button>

          <button className="relative flex items-center hover:text-gray-300">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            <span className="relative top-0 right-0 bg-yellow-500 text-black text-xs rounded-full px-1">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
