import { connect } from "react-redux";
import RecipeListItem from "./RecipeListItem";
import SearchForm from "./SearchForm";

export const RecipeList = (props) => {
  const filter = props.filters.text.toLowerCase();
  const filteredRecipes = props.recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(filter) ||
      recipe.ingredients.join().toLowerCase().includes(filter)
  );
  return (
    <>
      <h1>{props.recipes.length === 0 ? "Start adding recipes!" : "Your saved recipes:"}</h1>
      <SearchForm />

      <div className="recipes">
        {filteredRecipes.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(RecipeList);
