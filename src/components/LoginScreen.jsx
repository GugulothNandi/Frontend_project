import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function LoginScreen() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login attempt");
  };

  return (
    <Container className="p-4 pt-5" style={{ minHeight: "100vh" }}>
      <div className="mt-5 pt-3">
        <h3 className="mb-2">Signin to your PopX account</h3>
        <p className="text-muted small mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Form onSubmit={handleSubmit}>
          {}
          <div className="form-floating mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email address"
              id="loginEmail"
              required
            />
            <Form.Label htmlFor="loginEmail" className="text-muted small">
              Email Address
            </Form.Label>
          </div>

          {}
          <div className="form-floating mb-4">
            <Form.Control
              type="password"
              placeholder="Enter password"
              id="loginPassword"
              required
            />
            <Form.Label htmlFor="loginPassword" className="text-muted small">
              Password
            </Form.Label>
          </div>

          {}
          <Button
            type="submit"
            className="w-100 btn-lg btn-grey-custom"
            disabled
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginScreen;
