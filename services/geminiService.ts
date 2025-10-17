
import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, API key is sourced directly from process.env.API_KEY.
// The manual check for its existence is removed as it's assumed to be configured in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateUrduRecipe = async (ingredients: string): Promise<string> => {
    // Fix: Using systemInstruction to set the persona and task for the model. This is a more robust approach.
    const systemInstruction = `You are an expert Pakistani chef who creates delicious and authentic recipes in Urdu.
Based on the ingredients provided, generate a complete recipe.
The response MUST be entirely in Urdu.

The recipe should include:
1. A creative and appealing title (عنوان).
2. A list of ingredients (اجزاء).
3. Step-by-step cooking instructions (ترکیب).

Please format the response clearly.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Ingredients: ${ingredients}`,
            config: {
                systemInstruction: systemInstruction,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating recipe with Gemini API:", error);
        throw new Error("Failed to communicate with the Gemini API.");
    }
};
