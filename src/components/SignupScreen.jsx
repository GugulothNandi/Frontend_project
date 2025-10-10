import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "No",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, isAgency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.companyName;

  return (
    <Container className="p-4 pt-5">
      <h3 className="mb-4">Create your PopX account</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 form-group-float" controlId="fullName">
          <Form.Control
            type="text"
            placeholder=" "
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Form.Label>Full Name*</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4 form-group-float" controlId="phone">
          <Form.Control
            type="tel"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Form.Label>Phone Number*</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4 form-group-float" controlId="email">
          <Form.Control
            type="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Label>Email Address*</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4 form-group-float" controlId="password">
          <Form.Control
            type="password"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Form.Label>Password*</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4 form-group-float" controlId="companyName">
          <Form.Control
            type="text"
            placeholder=" "
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <Form.Label>Company Name*</Form.Label>
        </Form.Group>

        <Form.Group className="mb-4" controlId="isAgency">
          <Form.Label className="d-block mb-2">Are you an Agency?*</Form.Label>
          <Form.Check
            inline
            type="radio"
            label="Yes"
            name="isAgency"
            id="Yes"
            value="Yes"
            checked={formData.isAgency === "Yes"}
            onChange={handleRadioChange}
          />
          <Form.Check
            inline
            type="radio"
            label="No"
            name="isAgency"
            id="No"
            value="No"
            checked={formData.isAgency === "No"}
            onChange={handleRadioChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-3 signup-btn"
          disabled={!isFormValid}
        >
          Create Account
        </Button>
      </Form>
    </Container>
  );
}

export default SignupScreen;
