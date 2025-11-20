// Store dynamic recipe data and render it appropriately with useState

import React, { useState } from 'react';

// RecipeCard receives the recipes properties from RecipeList
// RecipeCard renders the recipe object title as a heading, maps the ingredientes under a new list, and accesses the instructions

function RecipeCard({ recipe }) {

  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }
  
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
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
      <button onClick={handleReset}>Reset Likes</button>
    </div>
  );
}
export default RecipeCard;