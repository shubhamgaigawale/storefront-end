import React, { useRef, useEffect } from 'react';

function CalloutContainer({ isVisible, children, onClose }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClose(); // Close the container if click is outside
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
        >
            <div className="p-4">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { onClick: () => { child.props.onClick(); onClose(); } })
                )}
            </div>
        </div>
    );
}

export default CalloutContainer;
