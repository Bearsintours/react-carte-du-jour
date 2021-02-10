import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";

import "../styles/styles.scss";

class EditRecipeForm extends React.Component {
  onPrepTimeChange = (e) => {
    const prepTime = e.target.value;
    this.props.handleEditPrepTime(prepTime);
  };

  onIngredientsChange = (e) => {
    const ingredients = e.target.value.split(",");
    this.props.handleEditIngredients(ingredients);
  };

  onInstructionsChange = (e) => {
    const instructions = e.target.value;
    this.props.handleEditInstructions(instructions);
  };

  updateRecipe = (e) => {
    e.preventDefault();
    this.props.handleCloseModal();
    this.props.handleUpdateRecipe();
  };

  render() {
    return (
      <div>
        <Modal show={this.props.showModal}>
          <Form onSubmit={this.updateRecipe}>
            <Form.Group controlId="prepTime">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Preparation</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  value={this.props.recipeToEdit.prepTime}
                  onChange={this.onPrepTimeChange}
                  autoFocus
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="ingredients">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Ingredients</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  value={this.props.recipeToEdit.ingredients}
                  onChange={this.onIngredientsChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="instructions">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                componentClass="textarea"
                style={{ height: "200px" }}
                type="text"
                name="prepTime"
                value={this.props.recipeToEdit.instructions}
                onChange={this.onInstructionsChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Save
            </Button>
            <Button variant="danger" onClick={this.props.handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default EditRecipeForm;
