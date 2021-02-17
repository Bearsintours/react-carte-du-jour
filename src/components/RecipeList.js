import { connect } from "react-redux";
import RecipeListItem from "./RecipeListItem";

export const RecipeList = (props) => {
  const filter = props.filters.text;
  const filteredRecipes = props.recipes.filter(
    (recipe) => recipe.name.includes(filter) || recipe.ingredients.join().includes(filter)
  );
  return (
    <div className="recipes">
      <h1>Your saved recipes:</h1>
      {filteredRecipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(RecipeList);
