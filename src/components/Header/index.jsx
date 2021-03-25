import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="facebook.com/bito.hihi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mytoan handsome boy
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
