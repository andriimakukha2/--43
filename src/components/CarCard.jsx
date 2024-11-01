import React from 'react';

const CarCard = ({ car }) => {


    return (
        <div className="car-card">
            <img
                src={car.img}
                alt={car.name}
                className="car-card__image"
            />
            <h3 className="car-card__name">{car.name}</h3>
            <p className="car-card__description">{car.description}</p>
            <button className="button car-card__button">Детальніше</button>
        </div>
    );
};

export default CarCard;
