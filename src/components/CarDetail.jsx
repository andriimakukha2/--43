// src/components/CarDetail.js
import React from 'react';

const CarDetail = ({ car }) => {
    const handleImageError = (e) => {
        e.target.src = "/images/placeholder.png"; // Вкажіть шлях до запасного зображення
    };

    return (
        <div className="car-detail">
            <h2 className="car-detail__name">{car.name}</h2>
            <img
                src={car.imageUrl}
                alt={`Зображення ${car.name}`}
                onError={handleImageError}
                className="car-detail__image"
            />
            <p className="car-detail__description">{car.description}</p>
            {/* Додаткова інформація */}
        </div>
    );
};

export default CarDetail;
