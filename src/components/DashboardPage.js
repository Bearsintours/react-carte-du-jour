import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <SearchForm />
        <RecipeList />
        <Link to="/create">
          <Button variant="primary" size="lg">
            Add Recipe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
