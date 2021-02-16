import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RecipeList from "./RecipeList";
import { startAddRecipe } from "../actions/recipes";
import "../styles/styles.scss";

export const DashboardPage = () => {
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="search">
        <form>
          <Form.Group>
            <Form.Control
              className="search-bar"
              size="lg"
              type="text"
              value={filter}
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form.Group>
        </form>
      </div>
      <div className="recipes">
        <RecipeList />
        <Link to="/create">
          <Button variant="primary" size="large">
            Add Recipe
          </Button>
        </Link>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddRecipe: (recipe) => dispatch(startAddRecipe(recipe)),
});

export default connect(undefined, mapDispatchToProps)(DashboardPage);
