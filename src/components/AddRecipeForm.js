import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import "../styles/styles.scss";

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitBtnDisabled: true,
      name: "",
      prepTime: "",
      ingredients: "",
      instructions: "",
    };
  }

  handleChangeRecipe = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddRecipe = (e) => {
    e.preventDefault();
    const recipe = {
      name: this.state.name.trim(),
      prepTime: this.state.prepTime.trim(),
      ingredients: this.state.ingredients.length > 0 ? this.state.ingredients.split(",") : [],
      instructions: this.state.instructions,
    };

    this.props.handleSaveRecipe(recipe);
    this.props.handleCloseModal();
  };

  render() {
    return (
      <Modal show={this.props.showModal} animation={true}>
        <Form onSubmit={this.addRecipe}>
          <Form.Group controlId="name">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Recipe</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                ref={(input) => (this.name = input)}
                type="text"
                name="name"
                placeholder="Enter recipe name"
                autoFocus
                onChange={(e) => this.handleChangeRecipe(e)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="ingredients">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Ingredients</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                ref={(input) => (this.ingredients = input)}
                type="text"
                name="ingredients"
                placeholder="Enter ingredients (comma separated)"
                onChange={(e) => this.handleChangeRecipe(e)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="prepTime">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Preparation</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                ref={(input) => (this.prepTime = input)}
                type="text"
                name="prepTime"
                placeholder="Enter time in min"
                onChange={(e) => this.handleChangeRecipe(e)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="instructions">
            <Form.Label>Instructions</Form.Label>{" "}
            <Form.Control
              ref={(input) => (this.instructions = input)}
              style={{ height: "200px" }}
              as="textarea"
              type="text"
              name="instructions"
              placeholder="Separate steps with a dot '.'"
              onChange={(e) => this.handleChangeRecipe(e)}
            />
          </Form.Group>
          <div>
            <Button variant="success" onClick={this.handleAddRecipe} disabled={this.state.name.length < 1}>
              Save
            </Button>
            <Button variant="danger" onClick={this.props.handleCloseModal}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default AddRecipeForm;
