import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const RecipeForm = ({ onSubmit, recipe = {} }) => {
  const [name, setName] = useState(recipe ? recipe.name : "");
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);
  const [prepTime, setPrepTime] = useState(recipe ? recipe.prepTime : "");
  const [instructions, setInstructions] = useState(recipe ? recipe.instructions : "");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const recipe = { name, ingredients, prepTime, instructions };
    onSubmit(recipe);
  };

  return (
    <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
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
            type="text"
            placeholder="Enter ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="prepTime">
          <Form.Label>Preparation Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter time"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Instructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" />
      </Form>
    </div>
  );
};

export default RecipeForm;
