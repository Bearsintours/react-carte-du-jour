import { connect } from "react-redux";
import RecipeListItem from "./RecipeListItem";

export const RecipeList = (props) => {
  return (
    <div>
      <p>Your saves recipes:</p>
      {props.recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(RecipeList);
