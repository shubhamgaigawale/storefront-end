import React, { useState, useRef, useEffect } from 'react';
import useFetchCategories from '../../../Hooks/useFetchCategories';

const CategoryDropdown = ({ selectedCategory, onCategorySelect, onClose }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [visibleCategories, setVisibleCategories] = useState(10);
    const dropdownRef = useRef(null);
    const { categories, loading, error } = useFetchCategories()
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleCategorySelect = (category) => {
        onCategorySelect(category);
        setDropdownOpen(false);
        onClose();
    };

    const showMoreCategories = () => {
        setVisibleCategories(prev => prev + 10);
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="relative px-4 py-2 border border-gray-300 rounded-l-md bg-white text-gray-700 hover:bg-gray-100 flex items-center"
            >
                <span className="mr-2">{selectedCategory}</span>
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {categories.slice(0, visibleCategories).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategorySelect(category)}
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        >
                            {category.name}
                        </button>
                    ))}
                    {categories.length > visibleCategories && (
                        <button
                            onClick={showMoreCategories}
                            className="w-full px-4 py-2 text-blue-500 hover:bg-gray-100 text-left"
                        >
                            Show More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
