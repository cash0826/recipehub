import React from 'react';

// RecipeCard receives the recipes properties from RecipeList
// RecipeCard renders the recipe object title as a heading, maps the ingredientes under a new list, and accesses the instructions

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;