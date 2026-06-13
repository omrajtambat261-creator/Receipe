import React, { useState } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const addRecipe = () => {
    if (!recipeName || !ingredients || !steps) {
      alert("Please fill all fields");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      recipeName,
      ingredients,
      steps,
    };

    setRecipes([...recipes, newRecipe]);

    setRecipeName("");
    setIngredients("");
    setSteps("");
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="container">
      <h1>Recipe Book</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />

        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button onClick={addRecipe}>Add Recipe</button>
      </div>

      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.recipeName}</h2>

            <h4>Ingredients:</h4>
            <p>{recipe.ingredients}</p>

            <h4>Steps:</h4>
            <p>{recipe.steps}</p>

            <button
              className="delete-btn"
              onClick={() => deleteRecipe(recipe.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;