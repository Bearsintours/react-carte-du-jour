import { connect } from "react-redux";
import RecipeListItem from "./RecipeListItem";

export const RecipeList = (props) => {
  const filter = props.filters.text.toLowerCase();
  const filteredRecipes = props.recipes.filter(
    (recipe) => recipe.name.toLowerCase().includes(filter) || recipe.ingredients.join().toLowerCase().includes(filter)
  );
  return (
    <div className="container">
      <div>
        <h1>Your saved recipes:</h1>
        <div className="recipes">
          {filteredRecipes.map((recipe) => (
            <RecipeListItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
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
