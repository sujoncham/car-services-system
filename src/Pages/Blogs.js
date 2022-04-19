import React from "react";
import { Container, Row } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <Container>
      <Row>
        <PageTitle title="Blog"></PageTitle>
        <h1>Blog page</h1>
      </Row>
    </Container>
  );
};

export default Blogs;
