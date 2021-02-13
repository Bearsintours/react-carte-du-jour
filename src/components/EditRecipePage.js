import React from "react";
import { connect } from "react-redux";
import RecipeForm from "./RecipeForm";
import { startEditRecipe } from "../actions/recipes";

export const EditRecipePage = (props) => {
  const onSubmit = (recipe) => {
    props.startEditExpense(recipe);
    props.history.push("/");
  };

  return <RecipeForm recipe={props.recipe} onSubmit={onSubmit} />;
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  startEditRecipe: (recipe) => dispatch(startEditRecipe),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);
