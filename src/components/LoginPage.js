import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { startLogin } from "../actions/auth";
import BackgroundImg from "../images/bg.jpeg";

export const LoginPage = ({ startLogin }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `cover`,
        height: `100%`,
        paddingTop: `20%`,
        width: `100%`,
      }}
    >
      <div className="login__box">
        <h1 className="login__title">Carte du Jour</h1>
        <p style={{ marginBottom: `20px` }}>Your recipe app</p>
        <Button variant="primary" size="lg" onClick={startLogin}>
          Login with Google
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
