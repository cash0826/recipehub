import React from 'react';
import RecipeCard from './RecipeCard';

// RecipeList iterates through the recipes object, passed as a property from the parent component, App.
// RecipeCard declares new attribues to pass the properties down to the nested function.

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;