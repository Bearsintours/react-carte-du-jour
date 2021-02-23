import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Check from "../images/check.svg";

const RecipeListItem = ({ recipe }) => {
  const { id, name, prepTime, ingredients } = recipe;
  return (
    <div className="recipe_box">
      <h1>{name}</h1>
      <h2>{`Preparation time: ${prepTime}`}</h2>
      <div className="recipe_box__ingredients">
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, idx) => (
          <div key={idx}>
            <span>
              <img src={Check} alt="check mark"></img>
              {ingredient}
            </span>
          </div>
        ))}
      </div>
      <div className="recipe_box__btns">
        <Link to={`/edit/${id}`}>
          <Button size="lg" variant="outline-info">
            Edit
          </Button>
        </Link>
        <Link to={`/recipe/${id}`}>
          <Button size="lg" variant="outline-info">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeListItem;
