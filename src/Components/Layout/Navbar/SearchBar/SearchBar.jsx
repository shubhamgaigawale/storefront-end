import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CategoryDropdown from '../Catogory/CategoryDropdown';

function SearchBar() {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category.name);
        setDropdownOpen(false);
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="relative flex items-center">
            {/* Category Dropdown */}
            <CategoryDropdown
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
                onClose={handleCloseDropdown}
            />

            {/* Search Input */}
            <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none"
                placeholder="Search for products"
            />

            {/* Search Button */}
            <button className="absolute right-0 top-0 h-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 rounded-r-md flex items-center">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default SearchBar;