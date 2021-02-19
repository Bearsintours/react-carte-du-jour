import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const RecipeForm = ({ onSubmit, onRemove, recipe = {} }) => {
  const [name, setName] = useState(recipe ? recipe.name : "");
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : "");
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : "");
  const [instructions, setInstructions] = useState(recipe ? recipe.instructions : "");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // push array of ingredients rather than string
    // TODO: Add individual fields for each ingredients to add
    const ingredientsArray = Array.isArray(ingredients) ? ingredients : ingredients.split(",");
    const recipeData = { name, ingredients: ingredientsArray, prepTime, instructions };
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
    instructions &&
    instructions.length > 0;

  return (
    <div className="container">
      <div className="recipe_form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter recipe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group controlId="Ingredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="prepTime">
            <Form.Label>Preparation Time</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter time"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="Instructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
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
