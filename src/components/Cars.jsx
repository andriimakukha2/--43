import React from 'react';
import CarCard from './CarCard';
import { useCarContext } from '../contexts/CarContext';

const Cars = () => {
    const { cars } = useCarContext();

    return (
        <div className="cars">
            <h2>Список автомобілів</h2>
            <div className="car-list">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default Cars;
