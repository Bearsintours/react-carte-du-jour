import React from "react";
import Button from "react-bootstrap/button";
import { connect } from "react-redux";
import { startRemoveRecipe } from "../actions/recipes";

const RecipeListItem = ({ recipe, startRemoveRecipe }) => {
  const { id, recipeName, prepTime, ingredients, instructions } = recipe;
  return (
    <div>
      <h1>{recipeName}</h1>
      <h2>{`Preparation time: ${prepTime} minutes`}</h2>
      <h2>Ingredients:</h2>
      {ingredients.map((ingredient, idx) => (
        <p key={idx}>{ingredient}</p>
      ))}
      <h2>{`Instructions: ${instructions}`}</h2>
      <Button size="small" variant="warning" onClick={() => console.log("edit")}>
        Edit
      </Button>
      <Button size="small" variant="danger" onClick={() => startRemoveRecipe(id)}>
        Delete
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startRemoveRecipe: (id) => dispatch(startRemoveRecipe(id)),
});

export default connect(undefined, mapDispatchToProps)(RecipeListItem);
