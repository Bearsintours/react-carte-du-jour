import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Check from "../images/check_circle-24px.svg";

const RecipeListItem = ({ recipe, startRemoveRecipe }) => {
  const { id, name, prepTime, ingredients, directions } = recipe;
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
      <div className="recipe_box__directions">
        <h2>Directions:</h2>
        {directions.map((direction, idx) => (
          <div key={idx}>
            <span>
              <img src={Check} alt="check mark"></img>
              {direction}
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
      </div>
    </div>
  );
};

export default RecipeListItem;
