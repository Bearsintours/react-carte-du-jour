import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Link to="/dashboard">Carte du Jour</Link>
        <Button size="lg" variant="outline-primary" onClick={startLogout}>
          Logout
        </Button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
