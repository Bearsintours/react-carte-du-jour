import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import RecipeList from "./RecipeList";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <Link to="/create">
          <Button variant="primary" size="lg">
            Add Recipe
          </Button>
        </Link>
      </div>
      <div className="container">
        <RecipeList />
      </div>
    </div>
  );
};

export default DashboardPage;
