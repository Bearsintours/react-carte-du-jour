import React from "react";
import { connect } from "react-redux";
import RecipeForm from "./RecipeForm";
import { startEditRecipe } from "../actions/recipes";
import { startRemoveRecipe } from "../actions/recipes";

export const EditRecipePage = (props) => {
  const onSubmit = (recipeData) => {
    props.startEditRecipe(props.recipe.id, recipeData);
    props.history.push("/");
  };

  const onRemove = () => {
    props.startRemoveRecipe(props.recipe.id);
    props.history.push("/");
  };

  return <RecipeForm recipe={props.recipe} onSubmit={onSubmit} onRemove={onRemove} />;
};

const mapStateToProps = (state, props) => ({
  recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  startEditRecipe: (id, recipe) => dispatch(startEditRecipe(id, recipe)),
  startRemoveRecipe: (id) => dispatch(startRemoveRecipe(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipePage);
