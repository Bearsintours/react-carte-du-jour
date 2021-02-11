import React from "react";

const RecipeListItem = ({ recipe }) => {
  const { recipeName, prepTime, ingredients, instructions } = recipe;
  return (
    <div>
      <h1>{recipeName}</h1>
      <h2>{`Preparation time: ${prepTime} minutes`}</h2>
      <h2>Ingredients:</h2>
      {ingredients.map((ingredient, idx) => (
        <p key={idx}>{ingredient}</p>
      ))}
      <h2>{`Instructions: ${instructions}`}</h2>
    </div>
  );
};

export default RecipeListItem;
