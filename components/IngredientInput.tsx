
import React from 'react';

interface IngredientInputProps {
    ingredients: string;
    setIngredients: (value: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ ingredients, setIngredients, onSubmit, isLoading }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            onSubmit();
        }
    };
    
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80">
            <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-700 mb-2">
                What ingredients do you have?
            </label>
            <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., chicken, tomatoes, onions, garlic, spices..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-shadow duration-200 resize-none"
                disabled={isLoading}
            />
            <button
                onClick={onSubmit}
                disabled={isLoading || !ingredients.trim()}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                    </>
                ) : (
                    'Generate Recipe'
                )}
            </button>
        </div>
    );
};

export default IngredientInput;
