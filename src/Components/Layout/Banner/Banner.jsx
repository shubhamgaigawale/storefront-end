import React from 'react';
import './Banner.css'; // Import custom CSS file for styling

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="banner-item">
                    <img src="https://f.media-amazon.com/images/G/31/img24/GW/boat/3000X1200_boAt_Prime._CB564370867_.jpg" alt="Offer 1" />
                    <div className="banner-overlay">
                        <h2>Big Sale on Electronics!</h2>
                        <p>Up to 50% off on selected items</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
