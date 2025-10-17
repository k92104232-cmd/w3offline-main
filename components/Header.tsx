
import React from 'react';
import ChefHatIcon from './icons/ChefHatIcon';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <div className="inline-flex items-center justify-center bg-white p-4 rounded-full shadow-md mb-4">
                <ChefHatIcon className="h-12 w-12 text-orange-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Urdu Recipe Generator</h1>
            <p className="mt-2 text-lg text-gray-600">
                Discover delicious Urdu recipes with the ingredients you have!
            </p>
        </header>
    );
};

export default Header;
