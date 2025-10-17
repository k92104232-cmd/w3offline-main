
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                <p className="text-gray-600">Crafting your recipe...</p>
            </div>
        </div>
    );
};

export default Loader;
