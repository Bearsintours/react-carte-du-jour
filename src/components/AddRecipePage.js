import React from "react";
import { connect } from "react-redux";
import RecipeForm from "./RecipeForm";
import { startAddRecipe } from "../actions/recipes";

export const AddRecipePage = (props) => {
  const onSubmit = (recipeData) => {
    props.startAddRecipe(recipeData);
    props.history.push("/");
  };

  return <RecipeForm recipe={props.recipe} onSubmit={onSubmit} />;
};

const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe)),
});

export default connect(undefined, mapDispatchToProps)(AddRecipePage);
