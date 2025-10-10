import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile-pic.png";
import "./ProfileScreen.css";

function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="profile-wrapper">
      <div className="profile-header p-4 d-flex justify-content-between align-items-center">
        <FiArrowLeft
          size={24}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <h5 className="m-0">Account Settings</h5>
        <div style={{ width: 24 }}></div>
      </div>

      <Container className="p-4 d-flex flex-column align-items-center">
        <Row className="align-items-center mb-4 w-100">
          <Col xs="auto" className="pr-3">
            <Image
              src={profilePic}
              roundedCircle
              width={80}
              height={80}
              className="profile-pic"
              alt="Profile Picture"
            />
          </Col>
          <Col>
            <h5 className="mb-0">Marry Doe</h5>
            <p className="text-muted small-text">Marry@Gmail.Com</p>
          </Col>
        </Row>

        <div className="profile-bio position-relative p-3 w-100">
          <p className="text-muted small-text mb-0">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <FiEdit size={20} className="edit-icon position-absolute" />
        </div>
      </Container>
    </div>
  );
}

export default ProfileScreen;
