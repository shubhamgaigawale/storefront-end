// src/components/CalloutButton.js
import React from 'react';

function CalloutButton({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
            {label}
        </button>
    );
}

export default CalloutButton;
