import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";
import { startAddRecipe } from "../actions/recipes";
import "../styles/styles.scss";

export const DashboardPage = () => {
  return (
    <>
      <SearchForm />
      <RecipeList />
      <Link to="/create">
        <Button variant="primary" size="large">
          Add Recipe
        </Button>
      </Link>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe)),
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);
