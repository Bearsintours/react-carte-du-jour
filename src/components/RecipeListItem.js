import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import { startRemoveRecipe } from "../actions/recipes";

const RecipeListItem = ({ recipe, startRemoveRecipe }) => {
  const { id, name, prepTime, ingredients, instructions } = recipe;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{`Preparation time: ${prepTime} minutes`}</h2>
      <h2>Ingredients:</h2>
      {ingredients.map((ingredient, idx) => (
        <p key={idx}>{ingredient}</p>
      ))}
      <h2>{`Instructions: ${instructions}`}</h2>
      <Link to={`/edit/${id}`}>
        <Button size="small" variant="warning">
          Edit
        </Button>
      </Link>
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
