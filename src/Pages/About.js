import React from "react";
import { Container, Row } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <Container>
      <Row>
        <PageTitle title="About"></PageTitle>
        <h1>About page</h1>
      </Row>
    </Container>
  );
};

export default About;
