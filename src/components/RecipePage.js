import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Jumbotron from "react-bootstrap/Jumbotron";
import CheckIcon from "../images/check.svg";
import EditIcon from "../images/edit.svg";

export const RecipePage = ({ recipe }) => {
  const { id, name, prepTime, ingredients, directions } = recipe;
  return (
    <div className="container" style={{ padding: `2rem` }}>
      <Jumbotron>
        <h1>{name}</h1>
        <div style={{ textAlign: `left` }}>
          <h2>{`Preparation time: ${prepTime}`}</h2>
          <div className="recipe_box__ingredients" style={{ padding: `20px 0`, borderTop: `1px solid #e6e6e6` }}>
            <h2 style={{ marginBottom: `10px` }}>Ingredients:</h2>
            {ingredients.map((ingredient, idx) => (
              <span key={idx}>
                <Badge pill variant="primary">
                  {ingredient}
                </Badge>
              </span>
            ))}
          </div>
          <div className="recipe_box__directions" style={{ padding: `20px 0`, borderTop: `1px solid #e6e6e6` }}>
            <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
              <h2 style={{ marginBottom: `10px` }}>Directions:</h2>
              <Link to={`/edit/${id}`}>
                <img src={EditIcon} alt="edit" />
              </Link>
            </div>
            {directions.map((direction, idx) => (
              <div key={idx}>
                <span>
                  <img src={CheckIcon} alt="check mark"></img>
                  {direction}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
});

export default connect(mapStateToProps)(RecipePage);
