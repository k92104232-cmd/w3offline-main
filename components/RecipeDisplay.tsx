
import React from 'react';

interface RecipeDisplayProps {
    recipe: string;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
    if (!recipe) {
        return null;
    }

    return (
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200/80 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-200 pb-2">Your Recipe</h2>
            <div 
                dir="rtl" 
                lang="ur" 
                className="prose prose-lg max-w-none urdu-text text-gray-700 whitespace-pre-wrap text-right leading-relaxed"
            >
                {recipe}
            </div>
        </div>
    );
};

// Fix: Added missing default export.
export default RecipeDisplay;
