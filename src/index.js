import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.scss';
import { CarProvider } from './contexts/CarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CarProvider>
        <App />
    </CarProvider>
);
