import React from "react";
import { Container, Row } from "react-bootstrap";
import CarService from "../Components/Car/CarService";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Services = () => {
  return (
    <Container>
      <Row>
        <PageTitle title="Services"></PageTitle>
        <CarService></CarService>
      </Row>
    </Container>
  );
};

export default Services;
