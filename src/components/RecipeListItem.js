import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { startRemoveRecipe } from "../actions/recipes";

const RecipeListItem = ({ recipe, startRemoveRecipe }) => {
  const { id, name, prepTime, ingredients, instructions } = recipe;
  return (
    <div className="recipe_box">
      <h1>{name}</h1>
      <h2>{`Preparation time: ${prepTime} minutes`}</h2>
      <div className="recipe_box__ingredients">
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, idx) => (
          <span key={idx}>
            <Badge pill variant="primary">
              {ingredient}
            </Badge>
          </span>
        ))}
      </div>
      <h2>{`Instructions: ${instructions}`}</h2>
      <div class="recipe_box__btns">
        <Link to={`/edit/${id}`}>
          <Button size="lg" variant="outline-info">
            Edit
          </Button>
        </Link>
        <Button size="lg" variant="outline-danger" onClick={() => startRemoveRecipe(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startRemoveRecipe: (id) => dispatch(startRemoveRecipe(id)),
});

export default connect(undefined, mapDispatchToProps)(RecipeListItem);
