import React from 'react';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import './App.css'


// data that is rendered and passed as props starting at App and ending in RecipeCard
const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Beef', 'Tomato Sauce'], instructions: 'Cook pasta and mix with sauce.' },
  { id: 2, title: 'Chicken Curry', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken, add curry powder, and stir in coconut milk.' },
];

// Parent component that holds RecipeList and Footer
// RecipeList declares a recipes attribute in order to pass the property to the nested function
// recipes is taken from the globally accessed data declared in const recipes

function App() {
  return (
    <div>
      <h1>RecipeHub</h1>
      <RecipeList recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;