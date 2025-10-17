
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import Loader from './components/Loader';
import { generateUrduRecipe } from './services/geminiService';

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState<string>('');
    const [recipe, setRecipe] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateRecipe = useCallback(async () => {
        if (!ingredients.trim()) {
            setError('Please enter some ingredients.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setRecipe('');

        try {
            const generatedRecipe = await generateUrduRecipe(ingredients);
            setRecipe(generatedRecipe);
        } catch (err) {
            console.error(err);
            setError('Sorry, something went wrong while generating the recipe. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [ingredients]);

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-orange-50/50">
            <div className="w-full max-w-4xl mx-auto">
                <Header />
                <main className="mt-8">
                    <IngredientInput
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                        onSubmit={handleGenerateRecipe}
                        isLoading={isLoading}
                    />
                    
                    {error && (
                        <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    {isLoading && <Loader />}
                    
                    {!isLoading && recipe && <RecipeDisplay recipe={recipe} />}
                </main>
            </div>
             <footer className="w-full max-w-4xl mx-auto text-center text-gray-500 text-sm mt-12 pb-4">
                <p>Powered by Google Gemini</p>
            </footer>
        </div>
    );
};

export default App;
