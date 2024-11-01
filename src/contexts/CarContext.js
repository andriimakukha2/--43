import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([
        {
            id: 1,
            name: 'Tesla Model S',
            description: 'Електричний седан з вражаючими характеристиками.',
            img: 'https://i.auto-bild.de/mdb/large/46/models-a9b.jpg',        },
        {
            id: 2,
            name: 'BMW M3',
            description: 'Спортивний автомобіль з вражаючими динамічними характеристиками.',
            img: 'https://i.auto-bild.de/mdb/large/42/m3-922.jpg',        },
        {
            id: 3,
            name: 'Audi A8',
            description: 'Розкішний седан з високим рівнем комфорту і технологій.',
            img: 'https://i.auto-bild.de/mdb/large/30/a8-c1d.png',        },
        {
            id: 4,
            name: 'Mercedes-Benz S-Class',
            description: 'Символ розкоші та інновацій у світі автомобілів.',
            img: 'https://i.auto-bild.de/mdb/large/78/sklasse-275.jpg',        },
        {
            id: 5,
            name: 'Porsche 911',
            description: 'Класичний спортивний автомобіль з видатними характеристиками.',
            img: 'https://i.auto-bild.de/mdb/large/38/911-865.png',        },
        {
            id: 6,
            name: 'Ford Mustang',
            description: 'Американський класичний спортивний автомобіль з потужним двигуном.',
            img: 'https://i.auto-bild.de/mdb/large/91/mustang-0a4.jpg',        },
        {
            id: 7,
            name: 'Lamborghini Aventador',
            description: 'Суперкар з неймовірним дизайном і потужністю.',
            img: 'https://i.auto-bild.de/mdb/large/66/aventador-b28.png',        },
        {
            id: 8,
            name: 'Ferrari 488',
            description: 'Спортивний автомобіль з видатною продуктивністю та дизайном.',
            img: 'https://i.auto-bild.de/mdb/large/66/488gtb-555.png',        },
        {
            id: 9,
            name: 'Toyota Camry',
            description: 'Надійний седан з комфортом та ефективністю.',
            img: 'https://i.auto-bild.de/mdb/large/45/camry-e30.jpg',        },
        {
            id: 10,
            name: 'Honda Accord',
            description: 'Комфортний седан з високим рівнем надійності.',
            img: 'https://i.auto-bild.de/mdb/large/68/accord-2f2.jpg',        },
        {
            id: 11,
            name: 'Chevrolet Corvette',
            description: 'Суперкар, що поєднує стиль і продуктивність.',
            img: 'https://i.auto-bild.de/mdb/large/47/corvette-968.png',        },
        {
            id: 12,
            name: 'Nissan GT-R',
            description: 'Спортивний автомобіль з неймовірною швидкістю та технологіями.',
            img: 'https://i.auto-bild.de/mdb/large/10/1-18e.jpg',        },
        {
            id: 13,
            name: 'Volkswagen Golf',
            description: 'Практичний хетчбек, який поєднує стиль і функціональність.',
            img: 'https://i.auto-bild.de/mdb/large/66/golf-285.png',        },
        {
            id: 14,
            name: 'Hyundai Elantra',
            description: 'Комфортний і економічний седан для щоденного використання.',
            img: 'https://i.auto-bild.de/mdb/large/58/elantra-faf.jpg',
        },
        {
            id: 15,
            name: 'Kia Stinger',
            description: 'Спортивний автомобіль з елегантним дизайном та високими показниками.',
            img: 'https://i.auto-bild.de/mdb/large/70/stinger-12a.png',
        },
        {
            id: 16,
            name: 'Mazda MX-5',
            description: 'Легкий спортивний автомобіль, що забезпечує відмінну керованість.',
            img: 'https://i.auto-bild.de/mdb/large/71/mx5-68f.png',
        },
        {
            id: 17,
            name: 'Subaru WRX',
            description: 'Спортивний автомобіль з відмінною прохідністю та потужним двигуном.',
            img: 'https://i.auto-bild.de/mdb/large/11/imprezawrxsti-8a6.jpg',
        },
        {
            id: 18,
            name: 'Volvo XC90',
            description: 'Розкішний SUV з високими показниками безпеки та комфортом.',
            img: 'https://i.auto-bild.de/mdb/large/26/xc90-ac1.jpg',
        },
    ]);

    return (
        <CarContext.Provider value={{ cars, setCars }}>
            {children}
        </CarContext.Provider>
    );
};

export const useCarContext = () => {
    return useContext(CarContext);
};
