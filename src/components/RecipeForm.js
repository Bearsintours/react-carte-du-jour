import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const RecipeForm = ({ onSubmit, onRemove, recipe = {} }) => {
  const [name, setName] = useState(recipe ? recipe.name : "");
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : "");
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);
  const [directions, setdirections] = useState(recipe ? recipe.directions : "");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // push array of ingredients rather than string
    // TODO: Add individual fields for each ingredients to add
    const ingredientsArray = Array.isArray(ingredients) ? ingredients : ingredients.split(/\r?\n/);
    const directionsArray = Array.isArray(directions) ? directions : directions.split(/\r?\n/);
    const recipeData = { name, prepTime, ingredients: ingredientsArray, directions: directionsArray };
    onSubmit(recipeData);
  };

  const handleOnRemove = (e) => {
    e.preventDefault();
    onRemove();
  };

  const isFormValid =
    name &&
    name.length > 0 &&
    ingredients &&
    ingredients.length > 0 &&
    prepTime &&
    prepTime.length > 0 &&
    directions &&
    directions.length > 0;

  return (
    <div className="container">
      <div className="recipe_form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group GroupcontrolId="title">
            <Form.Label>Recipe title</Form.Label>
            <Form.Control size="lg" type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Prep time</Form.Label>
            <Form.Control size="lg" type="text" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="ingredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              size="lg"
              type="text"
              placeholder="Put each ingredient in it's own line"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="directions">
            <Form.Label>Directions</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              size="lg"
              type="text"
              placeholder="Put each step in it's own line"
              value={directions}
              onChange={(e) => setdirections(e.target.value)}
            />
          </Form.Group>
          <Button disabled={!isFormValid} type="submit" size="lg">
            Save
          </Button>
          {onRemove && (
            <Button type="button" size="lg" variant="danger" onClick={handleOnRemove}>
              Delete
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
};

export default RecipeForm;
