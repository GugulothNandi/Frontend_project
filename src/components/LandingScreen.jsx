import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingScreen() {
  return (
    <Container
      className="d-flex flex-column justify-content-end align-items-center vh-100 p-4"
      style={{ backgroundColor: "#f0e6ff" }}
    >
      <div className="text-center w-100 mb-5 pb-5">
        {}
        <h1 className="display-4" style={{ color: "#7b1fa2" }}>
          PopX
        </h1>
        <p className="text-muted mb-5">👋 Welcome to PopX!</p>
      </div>

      <div className="w-100" style={{ maxWidth: "350px" }}>
        <h2 className="mb-3">Welcome to PopX</h2>
        <p className="text-muted mb-4 small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="d-grid gap-2 mb-5">
          {}
          <Button as={Link} to="/signup" variant="primary" size="lg">
            Create Account
          </Button>

          {}
          <Button as={Link} to="/login" variant="outline-primary" size="lg">
            Already Registered? Login
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default LandingScreen;
